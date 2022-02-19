import { Flex, Container, Stack, Badge, Heading, Box, Text, Button } from "@chakra-ui/react"


export default function WithImageBackground() {
    return (
        <Flex
            as="section"
            w="full"
            h={"740px"}
            align="left"
            background="blue">

            <Container
                maxW={"container.2xl"}

                backgroundImage="url('./images/hero-bg.png')"
                h={"740px"}

                w={["100vw", "100vw"]}
                maxWidth={["100vw", "1280px"]}

                flexDirection="column"
                align="left"
                justify=""
                borderRadius={[0, 10]}
                color="white"
                px={["5", "20"]}
                py="40">


                <Stack
                    as={Flex}
                    align="center"
                    textAlign={'center'}
                    maxW={'7xl'}
                    spacing={["0", "40px"]}
                    py={["0", "24px"]}
                    mx={"auto"}>


                    {/* <Badge variant="solid" background="secondary.500" color="secondary.800">Freelancer tool</Badge> */}

                    <Heading as="h1" fontSize="2xl" maxW={'4xl'}>
                        2Easy Accounting at <br />
                        Your Fingertips
                    </Heading>

                    <Text fontSize="xl" maxW={'lg'}>
                        From proposal to payment, Incomee is the easiest tool to run your freelance business seamlessly ✌️
                    </Text>

                    <Button maxW={'2xs'}>
                        Get started
                    </Button>

                </Stack>

            </Container >
        </Flex >
    )
}
