import { Flex, Container, Stack, Badge, Heading, Box, Image, VStack, Text, Button, ButtonGroup } from '@chakra-ui/react'

import { useRouter } from 'next/router'
import en from '../../locales/en'
import pt from '../../locales/pt'

export default function Feature3({ badge, tagline, subtitle, ctaPrimary, ctaSecondary }) {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'en' ? en : pt

    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push('/', '/', { locale })
    }

    return (
        <Flex
            as='section'
            w='full'
            align='center'>

            <Container
                maxW={'container.2xl'}>

                <Stack
                    as={Flex}
                    flexDirection={['column', 'column']}

                    maxW={'7xl'}
                    spacing={['0', '40px']}
                    py={['0', '24px']}
                    mx={'auto'}>



                    <VStack
                        justify='flex-start'
                        spacing={4}
                        align='flex-start'
                        flex='1'
                    >

                        <Heading as='h2' fontSize='4xl'>
                            Nossa Clínica de Psicologia em SP
                        </Heading>

                        <Text fontSize='lg' maxW={'lg'}>
                            Para terapias presenciais, possuímos em nossas instalações ambientes reservados e climatizados.
                        </Text>

                    </VStack>

                    <Stack
                        as={Flex}
                        flexDirection={['column', 'row']}
                        alignItems='flex-start'>
                        <Box w={'full'} flex='1'>
                            <Image
                                src='/images/psicologa-em-pinheiros0katherine-avellar.jpg'
                                alt='Strides Logo'
                            />
                        </Box>
                        <Box w={'full'} flex='1'>
                            <Image
                                src='/images/psicologa-em-pinheiros0katherine-avellar.jpg'
                                alt='Strides Logo'
                            />
                        </Box>
                        <Box w={'full'} flex='1'>
                            <Image
                                src='/images/psicologa-em-pinheiros0katherine-avellar.jpg'
                                alt='Strides Logo'
                            />
                        </Box>
                        <Box w={'full'} flex='1'>
                            <Image
                                src='/images/psicologa-em-pinheiros0katherine-avellar.jpg'
                                alt='Strides Logo'
                            />
                        </Box>

                    </Stack>
                    <Stack
                        as={Flex}
                        flexDirection={['column', 'row']}
                        alignItems='flex-start'>
                        <Box w={'full'} flex='1'>
                            <Image
                                src='/images/psicologa-em-pinheiros0katherine-avellar.jpg'
                                alt='Strides Logo'
                            />
                        </Box>
                        <Box w={'full'} flex='1'>
                            <Image
                                src='/images/psicologa-em-pinheiros0katherine-avellar.jpg'
                                alt='Strides Logo'
                            />
                        </Box>
                        <Box w={'full'} flex='1'>
                            <Image
                                src='/images/psicologa-em-pinheiros0katherine-avellar.jpg'
                                alt='Strides Logo'
                            />
                        </Box>
                        <Box w={'full'} flex='1'>
                            <Image
                                src='/images/psicologa-em-pinheiros0katherine-avellar.jpg'
                                alt='Strides Logo'
                            />
                        </Box>

                    </Stack>

                </Stack>

            </Container >
        </Flex >
    )
}
