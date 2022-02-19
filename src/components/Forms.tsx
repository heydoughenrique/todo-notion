import { FormControl, FormLabel, Input, FormHelperText } from '@chakra-ui/react'
import { Formik } from 'formik';
import Script from 'next/script'

export default function ContactForm() {
    return (
        <>
            <Script src="https://unpkg.com/formik/dist/formik.umd.production.min.js" strategy="lazyOnload" />
            {/* <Formik
                initialValues={{ email: '' }}
            >

            </Formik> */}

            <FormControl>
                <FormLabel htmlFor='email'>Email address</FormLabel>
                <Input id='email' type='email' />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
        </>

    )
}

