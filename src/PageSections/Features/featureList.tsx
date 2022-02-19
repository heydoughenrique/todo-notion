import { Flex, Container, Stack, Badge, Box, Image, VStack, Text, Button, ButtonGroup } from '@chakra-ui/react'

import { useRouter } from 'next/router'
import en from '../../locales/en'
import pt from '../../locales/pt'

function Feature({ picture, altText, title, desc, ...rest }) {
    return (
        <Flex p={5} flexDir={['column', 'row']} {...rest}>
            <Image
                src={picture}
                alt={altText}
                boxSize={['80px', '80px']}
            />
            <Box>
                <Text as='h3' fontSize='xl'>{title}</Text>
                <Text mt={4}>{desc}</Text>
            </Box>

        </Flex>
    )
}

export default function FeatureList({ title, desc }) {
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

                <Text>Principais Áreas de Atuação</Text>

                <Stack
                    as={Flex}
                    flexDirection={['column', 'row']}
                    alignItems='flex-start'
                    maxW={'7xl'}
                    spacing={['0', '0px']}
                    py={['0', '24px']}
                    mx={'auto'}>




                    <VStack
                        justify='flex-start'
                        spacing={4}
                        align='flex-start'
                        px={4}
                    >

                        <Feature
                            picture='/images/estresse-no-trabalho-atelier-da-mente.svg'
                            altText='Estresse no Trabalho'
                            title='Estresse no trabalho'
                            desc='Gestão da tensão e sobrecarga no trabalho, além das relações sociais entre seus gestores, pares e subordinados.'
                        />

                        <Feature
                            picture='/images/ansiedade-atelier-da-mente.svg'
                            altText='Transtorno de ansiedade'
                            title='Transtorno de ansiedade'
                            desc='Tratamentos para quadros de ansiedade, fobias, TOC, síndrome do pânico entre outros grupos de transtornos.'
                        />

                        <Feature
                            picture='/images/depressao-atelier-da-mente.svg'
                            altText='Transtornos depressivos'
                            title='Transtornos depressivos'
                            desc='Tratamentos para depressão, tristeza, humor negativo, transtorno bipolar e outros estados temperamentais.'
                        />

                        <Feature
                            picture='/images/terapia-infantil.svg'
                            altText='Terapia infantil'
                            title='Terapia infantil'
                            desc='Desenvolvimento do bem estar físico e mental da criança e da integração e qualidade de vida em família.'
                        />


                    </VStack>

                    <VStack
                        justify='flex-start'
                        spacing={4}
                        align='flex-start'
                        px={4}
                    >

                        <Feature
                            picture='/images/terapia-de-casal-atelier-da-mente.svg'
                            altText='Terapia de casal'
                            title='Terapia de casal'
                            desc='Mediação para o enfrentamento das dificuldades e convivência do casal, abrindo espaço de diálogo e reflexão.'
                        />

                        <Feature
                            picture='/images/questoes-de-genero-atelier-da-mente.svg'
                            altText='Questões de gênero'
                            title='Questões de gênero'
                            desc='Reflexão sobre identidade de gênero ou a orientação sexual. Questões sentimentais e não somente sexuais.'
                        />

                        <Feature
                            picture='/images/disfucoes-sexuais.svg'
                            altText='Disfunções sexuais'
                            title='Disfunções sexuais'
                            desc='Identificação das causas e tratamento dos sintomas para dificuldades na resposta sexual, desejo e orgasmos.'
                        />

                    </VStack>

                </Stack>

            </Container >
        </Flex >
    )
}
