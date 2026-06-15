"use client";
"use client";

import { signUpSchema } from "@/app/schemas/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";

export default function Signup(){
    const form = useForm({
        resolver:zodResolver(signUpSchema) ,
        defaultValues:{
            email:"",
            name:"",
            password:""
        },
    });

    function onSubmit(){

    }
    return(
        <Card>
            <CardHeader>
                <CardTitle>SignUp</CardTitle>
                <CardDescription>Register To our Blog Site</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller name="name" control={form.control} render={({field, fieldState})=>(
                            <Field>
                                <FieldLabel>Full Name</FieldLabel>
                                <Input aria-invalid={fieldState.invalid} placeholder="Ankit Mishra"{...field}/>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}></Controller>
                        <Controller name="email" control={form.control} render={({field, fieldState})=>(
                            <Field>
                                <FieldLabel>Email</FieldLabel>
                                <Input  aria-invalid={fieldState.invalid}  placeholder="zid@blog.com" type="email"{...field}/>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}></Controller>
                        <Controller name="password" control={form.control} render={({field, fieldState})=>(
                            <Field>
                                <FieldLabel>Password</FieldLabel>
                                <Input  aria-invalid={fieldState.invalid}  placeholder="AC***F#$" type="password"{...field}/>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}></Controller>
                        <Button>
                            Register
                        </Button>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    )
}
