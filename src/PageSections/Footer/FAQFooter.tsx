import { Flex, Container, Stack, Badge, Heading, Box, Image, VStack, Text, Button, ButtonGroup, Divider } from '@chakra-ui/react'

import { useRouter } from 'next/router'
import FAQAccordion from '../../components/Accordion'
import en from '../../locales/en'
import pt from '../../locales/pt'


export default function FAQFooter() {
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
            minH={'640px'}
            align='center'
            layerStyle='neutral'
        >

            <Container
                maxW={'container.2xl'}>

                <Stack
                    as={Flex}
                    flexDirection={['column', 'row']}
                    alignItems='flex-start'
                    maxW={'5xl'}
                    spacing={['4', '0']}
                    py={['0', '24px']}
                    mx={'auto'}>

                    <VStack
                        justify='flex-start'
                        spacing={4}
                        align='flex-start'
                        flex='1'
                    >
                        <Box>
                            <Heading as='h5' fontSize='md'>Agende um horário</Heading>
                            <Text>Por WhatsApp</Text>
                            <Text>Por Telefone (11) 95308-7547</Text>
                            <Text>Por Formulário de contato</Text>
                        </Box>

                        <Box>
                            <Heading as='h5' fontSize='md'>Endereço do Consultório</Heading>
                            <Text>
                                Rua Paulistânia, 242 – Cj 44, Sumaré, São Paulo – SP <br />
                                Ao lado da do Metrô Vila Madalena <br />
                                Como chegar →
                            </Text>
                        </Box>
                    </VStack>

                    <VStack
                        justify='flex-start'
                        spacing={4}
                        align='flex-start'
                        flex='1'
                    >
                        <Box>
                            <Heading as='h5' fontSize='md'>Horário de funcionamento</Heading>
                            <Text>Segunda a Sexta: 7:00 – 22:00</Text>
                            <Text>Sábado: 8:00 – 14:00</Text>
                            <Text>Domingo: Fechado</Text>
                        </Box>

                        <Box>
                            <Heading as='h5' fontSize='md'>Não aceitamos convênio</Heading>
                            <Text>
                                Mas não se preocupe! Saiba como solicitar aqui o reembolso ao seu plano de saúde.
                            </Text>
                        </Box>
                    </VStack>

                </Stack>

                <Stack
                    as={Flex}
                    flexDirection='column'
                    alignItems='center'
                    justify='center'
                    maxW={'5xl'}
                    spacing={['4', '0']}
                    py={['0', '24px']}
                    mx={'auto'}>

                    <Button variant='solid' size='md'>Converse conosco via Whatsapp</Button>

                    <Divider py={10} />

                    <Text as='h2' pt={12} pb={4}>Perguntas Frequentes</Text>

                    <FAQAccordion />

                </Stack>

            </Container >
        </Flex >
    )
}
