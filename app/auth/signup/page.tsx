"use client";

import { signUpSchema } from "@/app/schemas/auth";
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
    return(
        <Card>
            <CardHeader>
                <CardTitle>SignUp</CardTitle>
                <CardDescription>Register To our Blog Site</CardDescription>
            </CardHeader>
            <CardContent>
                <form >
                    <FieldGroup>
                        <Controller name="" control={form.control} render={({field, fieldState})=>(
                            <Field>
                                <FieldLabel>Full Name</FieldLabel>
                                <Input placeholder="Ankit Mishra"{...field}/>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}></Controller>
                    </FieldGroup>


                </form>
            </CardContent>
        </Card>
    )
}