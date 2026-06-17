FROM node:22-alpine AS base
#installing a package for node in alpine
RUN apk add --no-cache libc6-compat

WORKDIR /app
#to use pnpm without needing global npm 
RUN corepack enable && corepack prepare pnpm@latest --activate


FROM base AS deps
#copy the dependecies and lock file for exact version
COPY package.json pnpm-lock.yaml
#installing the files in sync with frozen
RUN pnpm install --frozen-lockfile

FROM base AS builder
# set working dir as /app in our project
WORKDIR /app
# taking the node modules
COPY --from=deps /app/node_modules ./node_modules

#classic way to copy all the source code
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

#this runs the eslint, type check and compilation of TCSS
RUN pnpm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
#ablobe run crate a system user for security isolation

COPY --from=builder /app/public ./public
#copying hte assets

RUN mkdir .next
RUN chown nextjs:nodejs .next
# Pulling the standalone compiled application from the builder stage
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]

#after all this just run 
# docker build -t nextjs-app
#docker run -p 3000:3000 nextjs-app

# the app will be at http://localhost:3000