import * as React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import {
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
} from "@chakra-ui/react"

export default function FormikExample() {
    function validateName(value) {
        let error
        if (!value) {
            error = "Name is required"
        }
        return error
    }

    function validateEmail(value) {
        let error
        if (!value) {
            error = "Email is required"
        }
        return error
    }

    function validatePhone(value) {
        let error
        if (!value) {
            error = "Email is required"
        }
        return error
    }

    return (
        <Formik
            initialValues={{ name: "Douglas" }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    fetch(`https://hooks.zapier.com/hooks/catch/3660927/bdgfuap/`, {
                        method: 'POST',
                        body: JSON.stringify(values, null, 2),
                    }

                    )
                    alert(JSON.stringify(values, null, 2))
                    actions.setSubmitting(false)
                }, 1000)
            }}
        >
            {(props) => (
                <Form>
                    <Field name="name" validate={validateName}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                <FormLabel htmlFor="name">First name</FormLabel>
                                <Input {...field} id="name" placeholder="name" />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>

                    <Field name="email" validate={validateEmail}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.email && form.touched.email}>
                                <FormLabel htmlFor="name">Email</FormLabel>
                                <Input {...field} id="email" placeholder="nome@email.com.br" />
                                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>

                    <Field name="phone" validate={validatePhone}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.phonel && form.touched.phone}>
                                <FormLabel htmlFor="phone">Phone</FormLabel>
                                <Input {...field} id="phone" placeholder="(11) 9900-9000" />
                                <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>

                    <Field name="campaignid">
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.campaignid && form.touched.campaignid}>
                                <FormLabel htmlFor="campaignid">Campaignid</FormLabel>
                                <Input {...field} id="campaignid" />
                                <FormErrorMessage>{form.errors.campaignid}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>


                    <Button
                        mt={4}
                        colorScheme="teal"
                        isLoading={props.isSubmitting}
                        type="submit"
                    >
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    )
}