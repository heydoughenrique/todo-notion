import { Flex, Container, Stack, Badge, Heading, Box, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'


export default function SimpleCenteredCTA({ layerStyle, badge, tagline, subtitle, cta }) {
    return (
        <Flex
            as='section'
            w='full'
            minH={'480px'}
            align='center'
            layerStyle={layerStyle}>

            <Container
                maxW={'container.2xl'}>

                <Stack
                    as={Flex}
                    align='center'
                    textAlign={'center'}
                    maxW={'7xl'}
                    spacing={['0', '40px']}
                    py={['0', '24px']}
                    mx={'auto'}>


                    {/* <Badge variant='solid' background='secondary.500' color='secondary.800'>{badge}</Badge> */}

                    <Heading as='h1' fontSize='2xl' maxW={'4xl'}>
                        {tagline}
                    </Heading>

                    <Text fontSize='xl' maxW={'2xl'}>
                        {subtitle}
                    </Text>

                    <Link href='/terms' passHref>
                        <Button variant='solid' size='lg'>Converse comigo via Whatsapp</Button>
                    </Link>

                </Stack>

            </Container >
        </Flex >
    )
}
