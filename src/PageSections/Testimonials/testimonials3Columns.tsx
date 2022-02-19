import { Flex, Container, Stack, Badge, Heading, Box, Image, VStack, Text, Button, ButtonGroup } from '@chakra-ui/react'
import Link from 'next/link'

import { useRouter } from 'next/router'
import en from '../../locales/en'
import pt from '../../locales/pt'

function TestimonialItem({ picture, altText, title, desc, ...rest }) {
    return (
        <Box
            background='#fcfcfc'
            w={['100%', '360px']}
            p={5}
            borderWidth='0px'
            textAlign='center'
            letterSpacing='1px'
            {...rest} >
            <Box w={'full'} flex='1'>
                <Image
                    src={picture}
                    alt={altText}
                    mx='auto'
                    borderRadius='full'
                    boxSize='90px'
                />

            </Box>

            <Text as='h5' mt={6} fontSize='xl'>{title}</Text>
            <Text mt={4} fontSize='sm' >{desc}</Text>
        </Box >
    )
}

export default function Testimonials3Columns({ badge, tagline, subtitle, ctaPrimary, ctaSecondary }) {
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
            align='center'
        >

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



                    <Stack
                        justify='space-around'
                        spacing={4}
                        align='baseline'
                        flex='1'
                        flexDir={['column', 'row']}
                    >
                        <TestimonialItem
                            picture='/images/depoimento-giovanna-cocci.png'
                            altText='Depoimento Giovanna Cocci'
                            title='Giovanna Cocci'
                            desc='Isso está sendo vital na minha jornada. Me mostrou que a terapia vai além da sessão, está em cada momento do dia, em como nos sentimentos e agimos em cada encontro e desencontro da vida. 👊 😉'
                        />
                        <TestimonialItem
                            picture='/images/depoimento-erika-kodjaian.png'
                            altText='Depoimento Erika Kodjaian'
                            title='Erika Kodjaian'
                            desc='Muita motivação e ética. Já fiz muita terapia e recomendo de olhos fechados. Faço online e posso afirmar que os benefícios são os mesmos da terapia presencial.  Muito satisfeita! Gratidão ! 🙏😊'
                        />
                        <TestimonialItem
                            picture='/images/depoimento-danielle-venda.png'
                            altText='Depoimento Danielle Venda'
                            title='Danielle Venda'
                            desc='Mais de 13 anos de experiência, formada pela Universidade Presbiteriana Mackenzie. Pós-graduada em “Neurociências e Comportamento” pela Pontifícia Universidade Católica – PUC e em “Terapia Comportamental Cognitiva” pela Faculdade Unyleya. Realiza terapia em inglês.
            '
                        />
                    </Stack>

                </Stack>

            </Container >
        </Flex >
    )
}
