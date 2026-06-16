'use client';

import LineWaves from '@/components/ui/LineWaves';
import { signUpSchema } from '@/app/schemas/auth';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';

import { Input } from '@/components/ui/input';

type FormValues = {
  name: string;
  email: string;
  password: string;
};

export default function SignupPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
      <LineWaves
  speed={0.3}
  innerLineCount={40}
  outerLineCount={32}
  warpIntensity={2.7}
  rotation={53}
  edgeFadeWidth={0.1}
  colorCycleSpeed={0.3}
  brightness={1}
  color1="#f10c0c"
  color2="#0c0c0d"
  color3="#ffffff"
  enableMouseInteraction
  mouseInfluence={2}
/>
      </div>

      {/* Overlay - allows mouse through */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-10" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4 z-20">
        <div className="relative w-full max-w-md">
          {/* Green Glow Border */}
          <div
            className="
              absolute
              -inset-[2px]
              rounded-3xl
              bg-gradient-to-r
              from-emerald-400
              via-green-500
              to-lime-400
              opacity-80
              blur-md
              animate-pulse
            "
          />

          <Card
            className="
              relative
              rounded-3xl
              border
              border-emerald-400/20
              bg-zinc-900/80
              backdrop-blur-xl
              text-white
              shadow-[0_0_50px_rgba(34,197,94,0.25)]
            "
          >
            <CardHeader className="space-y-2 text-center">
              <CardTitle className="text-3xl font-bold">
                Create Account
              </CardTitle>

              <CardDescription className="text-zinc-400">
                Register to start writing and sharing blogs
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FieldGroup>
                  <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel className="text-zinc-200">
                          Full Name
                        </FieldLabel>

                        <Input
                          {...field}
                          placeholder="Ankit Mishra"
                          aria-invalid={fieldState.invalid}
                          className="
                            bg-white/5
                            border-white/10
                            text-white
                            placeholder:text-zinc-500
                            focus-visible:border-emerald-400
                          "
                        />

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel className="text-zinc-200">
                          Email
                        </FieldLabel>

                        <Input
                          {...field}
                          type="email"
                          placeholder="you@example.com"
                          aria-invalid={fieldState.invalid}
                          className="
                            bg-white/5
                            border-white/10
                            text-white
                            placeholder:text-zinc-500
                            focus-visible:border-emerald-400
                          "
                        />

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  <Controller
                    name="password"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel className="text-zinc-200">
                          Password
                        </FieldLabel>

                        <Input
                          {...field}
                          type="password"
                          placeholder="••••••••"
                          aria-invalid={fieldState.invalid}
                          className="
                            bg-white/5
                            border-white/10
                            text-white
                            placeholder:text-zinc-500
                            focus-visible:border-emerald-400
                          "
                        />

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  <Button
                    type="submit"
                    className="
                      w-full
                      bg-gradient-to-r
                      from-emerald-500
                      via-green-500
                      to-lime-500
                      text-white
                      font-semibold
                      transition-all
                      duration-300
                      hover:scale-[1.02]
                      hover:opacity-90
                    "
                  >
                    Register
                  </Button>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}