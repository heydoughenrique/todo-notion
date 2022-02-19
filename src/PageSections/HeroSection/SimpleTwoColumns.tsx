import { Flex, Container, Stack, Badge, Box, Image, VStack, Text, Button, ButtonGroup } from '@chakra-ui/react'

import { useRouter } from 'next/router'
import en from '../../locales/en'
import pt from '../../locales/pt'

export default function SimpleTwoColumns({ badge, tagline, subtitle, ctaPrimary, ctaSecondary, image, altImage }) {
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
                        <Badge variant='solid' background='secondary.500' color='secondary.800'>{badge}</Badge>

                        <Text as='h1' fontSize='6xl'>
                            {tagline}
                        </Text>

                        <Text fontSize='xl' maxW={'lg'}>
                            {subtitle}
                        </Text>

                        <ButtonGroup>
                            <Button>
                                {ctaPrimary}
                            </Button>
                            <Button >
                                {ctaSecondary}
                            </Button>
                        </ButtonGroup>


                    </VStack>

                    <Box w={'full'} flex='1'>
                        <Image
                            src={image}
                            alt={altImage}
                        />
                    </Box>

                </Stack>

            </Container >
        </Flex >
    )
}
