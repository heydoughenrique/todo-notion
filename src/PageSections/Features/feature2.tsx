import { Flex, Container, Stack, Badge, Box, Image, VStack, Text, Button, ButtonGroup } from '@chakra-ui/react'

import { useRouter } from 'next/router'
import en from '../../locales/en'
import pt from '../../locales/pt'

export default function Feature2({ badge, tagline, subtitle, ctaPrimary, ctaSecondary }) {
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
            pt='80px'>

            <Container
                maxW={'container.2xl'}>

                <Stack
                    as={Flex}
                    flexDirection={['column', 'row']}
                    alignItems='center'
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
                        <Badge variant='solid' background='secondary.500' color='secondary.800'># VOCÊ ESCOLHE</Badge>

                        <Text as='h2' fontSize='4xl'>
                            Atendimento Online e Presencial
                        </Text>

                        <Text fontSize='lg' maxW={'lg'}>
                            No consultório ou pela internet, agende seu atendimento conosco. Entenda como funciona cada tipo de atendimento:
                        </Text>

                        <Stack
                            flexDir='row'
                            display='flex'
                            justifyContent='space-between'
                            alignItems='flex-start'
                        >
                            <Box>
                                <Image
                                    src='/images/presencial-katherine-avellar.svg'
                                    alt='Atendimento Presencial'
                                    boxSize={['120px', '160px']}
                                />
                                <Text as='h4'>
                                    Presencial
                                </Text>
                                <Text mb={8} mt={2}>
                                    Sessões realizadas em nossa clínica localizada na Vila Madalena em São Paulo.
                                </Text>
                                <Button variant='outline'>
                                    Agendar
                                </Button>
                            </Box>
                            <Box>
                                <Image
                                    src='/images/online-katherine-avellar.svg'
                                    alt='Atendimento Online'
                                    boxSize={['120px', '160px']}
                                />
                                <Text as='h4' >
                                    Online
                                </Text>
                                <Text mb={8} mt={2}>
                                    Sessões realizadas em nossa clínica localizada na Vila Madalena em São Paulo.
                                </Text>
                                <Button variant='outline'>
                                    Agendar
                                </Button>
                            </Box>

                        </Stack>

                    </VStack>

                    <Box w={'full'} flex='1' flexDir='column'>
                        <Image
                            src='/images/bg-at.jpg'
                            alt='Figura de um consultório psicológico'
                            mx='auto'
                        />

                    </Box>

                </Stack>

            </Container >
        </Flex >
    )
}
