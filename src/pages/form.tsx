import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import {
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
} from "@chakra-ui/react"

interface IFormInput {
    fullName: string;
    email: string;
    phone: string;
}

export default function App() {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

    return (
        <>

            <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="name"
                    {...register("fullName", { required: true, maxLength: 20 })} />
            </FormControl>

            <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email"
                    {...register("email", { required: true, maxLength: 20 })} />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl id="phone">
                <FormLabel>Phone</FormLabel>
                <Input type="phone"
                    {...register("phone", { required: true, maxLength: 20 })} />
            </FormControl>

            <Button type="submit" size="md"> Iniciar Atendimento</Button>



        </>
    );
}