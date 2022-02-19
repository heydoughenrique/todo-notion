import { Flex, Container, Stack, Badge, Heading, Box, VStack, Text, Button, ButtonGroup } from '@chakra-ui/react'

import Image from 'next/image'

import { useRouter } from 'next/router'
import en from '../../locales/en'
import pt from '../../locales/pt'

export default function Feature1Inverted({ layerStyle, image, altText, badge, tagline, subtitle, ctaPrimary, ctaSecondary, }) {
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
            layerStyle={layerStyle}
            w='full'
            minH={'640px'}
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


                    <VStack
                        justify='flex-start'
                        spacing={4}
                        align='flex-start'
                        flex='1'
                    >
                        <Badge variant='solid' background='secondary.500' color='secondary.800'>{badge}</Badge>

                        <Heading as='h2' fontSize='4xl'>
                            {tagline}
                        </Heading>

                        <Text fontSize='lg' maxW={'lg'}>
                            {subtitle}
                        </Text>

                        <ButtonGroup>
                            <Button variant='solid' size='lg'>
                                {ctaPrimary}
                            </Button>
                            <Button variant='solid' size='lg'>
                                {ctaSecondary}
                            </Button>
                        </ButtonGroup>

                    </VStack>

                    <Box
                        position='relative'
                        w='full'
                        flex='1'
                    >
                        <Image
                            width="100%"
                            height="70%"
                            layout="responsive"
                            objectFit="contain"
                            src={image}
                            alt={altText} />
                    </Box>

                </Stack>



            </Container >
        </Flex >
    )
}
