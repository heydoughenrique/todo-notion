import {
    VStack,
    Stack,
    Flex,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading
} from '@chakra-ui/react'

function FAQItem({ title, desc }) {
    return (
        <AccordionItem
            borderBottom='1px solid rgba(217,217,217,0.54)'
            borderStyle='dashed'
            borderWidth='0px 0px 1px 0px'
            borderTop='none'
        >
            <Heading as='h5' py={4}>
                <AccordionButton color='white'>
                    <Box
                        color='white'
                        fontWeight='600'
                        letterSpacing='1px'
                        textTransform='uppercase'
                        fontSize='xs'
                        flex='1'
                        textAlign='left'
                    >
                        {title}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
                {desc}
            </AccordionPanel>
        </AccordionItem>

    )



}
export default function FAQAccordion() {
    return (

        <Stack
            as={Flex}
            flexDirection={['column', 'row']}
            w='full'
            maxW={'8xl'}
            spacing={['4', '0']}
            py={['0', '24px']}
        >

            <VStack
                justify='flex-start'
                align='flex-start'
                flex='1'

            >

                <Accordion allowToggle>
                    <FAQItem
                        title='Como funciona o  tratamento psicológico?'
                        desc=' Na Psicologia temos diversas abordagens de psicoterapia, na qual eu sou especialista na linha de Terapia Cognitivo Comportamental. Sendo assim, o método aplicado se baseia em análise dos comportamentos e pensamentos do paciente, bem como das crenças e das formas de enfrentamento das vivências do dia a dia.

                        Essa abordagem é estruturada, clara e direta. Seu objetivo principal é identificar padrões de comportamento, pensamento, crenças e hábitos que estão na origem dos problemas, indicando, a partir disso, técnicas para alterar essas percepções de forma positiva.'
                    />

                    <FAQItem
                        title='O que é terapia cognitivo comportamental?'
                        desc='A Terapia Cognitivo Comportamental, abreviada como TCC, é uma abordagem da psicoterapia que entende a forma como o ser humano interpreta os acontecimentos na vida dele, como aquilo que nos afeta, como interpretamos e internalizemos e não os acontecimentos em si. Ou seja: é a forma como cada pessoa vê, sente e pensa com relação à uma situação que causa desconforto, dor, incômodo, tristeza ou qualquer outra sensação negativa.
                        À medida que nos relacionamos, interagimos e nos deixamos influenciar, nós escrevemos boa parte daquilo que somos. E nisso podemos incluir as crenças limitantes no processo. Afinal, elas são as ideias e os ideais daquilo que — consciente ou inconscientemente — nos impede de ir adiante, conquistar e até mesmo acreditar no sucesso. Deixamo-nos apegar às velhas crenças que influenciam a estagnação pessoal e profissional.
                        Essa abordagem é estruturada, clara e direta. Seu objetivo principal é identificar padrões de comportamento, pensamento, crenças e hábitos que estão na origem dos problemas, indicando, a partir disso, técnicas para alterar essas percepções de forma positiva.'
                    />

                    <FAQItem
                        title='Quando devo procurar um psicólogo?'
                        desc='Você deve buscar ajuda profissional de um psicólogo quando observar que está com dificuldades de compreender suas emoções e de tomar as melhores decisões para a sua vida. Porém, muitas pessoas ainda possuem medo em buscar a psicoterapia, pois pensam que podem estar loucas ou até mesmo não querem demonstrar suas fraquezas. Essa resistência é gerada pelo medo, vergonha, desconhecimento ou até mesmo por não acreditar que suas emoções e pensamentos influenciam diretamente nas suas atitudes.
                        Também existem casos de encaminhamento de outros médicos, em que muitas vezes não se descobre em exames clínicos, físicos a causa de determinadas doenças. Quando isso ocorre, temos o processo de psicossomático, ou seja, doenças da mente que resultam em doenças no corpo físico.
                        Se as suas emoções – seja tristeza, paixão, raiva ou irritação – são intensas a ponto de você se questionar ou atrapalhar suas atividades cotidianas, talvez seja hora de buscar ajuda. A ansiedade extrema, por exemplo, pode aumentar a proporção das preocupações, causar angústias desnecessárias e prejudicar a qualidade de vida.'
                    />

                    <FAQItem
                        title='Posso fazer o tratamento apenas 2 vezes por mês?'
                        desc='Não é recomendável para o sucesso do tratamento. Para o processo do tratamento psicológico, temos a necessidade de aplicar as técnicas e reflexões semanalmente. É importante a constância no autoconhecimento, por esse motivo, 1 vez por semana se faz necessário a sessão de terapia para psicólogo e paciente tratarem situações do cotidiano. Em casos particulares, se faz necessário mais que uma vez por semana, quando há risco de suicídio ou um sofrimento acentuado.
                        No processo de alta, as sessões costumam ser reduzidas para 2 vezes ao mês, ocorrendo os encontros quinzenalmente.'
                    />

                </Accordion>

            </VStack>

            <VStack
                justify='flex-start'
                align='flex-start'
                flex='1'

            >

                <Accordion allowToggle>

                    <FAQItem
                        title='Como funciona a psicoterapia online?'
                        desc='O Conselho Federal de Psicologia regulamentou a prática de atendimento online no Brasil em novembro de 2018 e, desde então, os psicólogos regulamentados estão aptos a aplicar essa modalidade. Demais países, como Estados Unidos, Inglaterra, Alemanha e etc., aplicam este formato há mais de 20 anos.
                        O atendimento online tem a mesma duração da sessão presencial, média de 50 minutos, sendo 1 vez por semana. Em casos de necessidades, a frequência será aumentada para 2 vezes por semana
                        Para o atendimento online ocorrer de forma satisfatória, é importante garantirmos dois requisitos essenciais para a sessão: internet de qualidade e uma câmera de imagem. Na modalidade online também trabalhamos com a linguagem corporal, além da fala, por esse motivo, a imagem do paciente é de suma importância.'
                    />

                    <FAQItem
                        title=' Quanto custa uma sessão de piscoterapia?'
                        desc='  Essa resposta varia de psicólogo para psicólogo, pois vai depender dos anos de experiência, da formação e especialização, da abordagem aplicada, além da região de atendimento.
                        Vale compreender quanto você está disposto a investir em você mesmo, pois a psicoterapia gera resultados exclusivamente para o paciente, é um investimento na qualidade de vida, sendo assim, se o valor é caro ou barato, depende também do quanto o paciente compreende que investir em si mesmo se faz necessário.'
                    />

                    <FAQItem
                        title=' O que muda de terapeuta, psicólogo e psiquiatra?'
                        desc='Qualquer pessoa pode atuar como terapeuta, mas ˜psicoterapeuta˜ somente quem é formado em Psicologia. Hoje há muitos cursos livres que habilitam profissionais de diversas áreas a se tornarem terapeutas. Isso faz com que o serviço e o resultado possam ser diferentes, tanto na abordagem, quanto no preço e na qualidade.
                        O psicólogo é um profissional formado em Psicologia, que trata por meio da psicoterapia transtornos mentais gerados ao longo da vida do paciente. O psicólogo não receita o uso de medicação, porém, ele detecta sintomas e doenças mentais nas quais ele pode encaminhar o paciente para o tratamento conjunto com um psiquiatra.

                        O psiquiatra é um médico, graduado em Medicina. Ele sim pode receitar remédios para diversas manifestações como depressão, ansiedade, esquizofrenia, entre outras doenças. Muitos quadros psicológicos se beneficiam do tratamento em conjunto do psicólogo e o psiquiatra.'
                    />

                    <FAQItem
                        title='Qual a diferença entre um psicólogo e um coach?'
                        desc='Hoje no Brasil não temos a regulamentação da profissão de Coach, porém, temos diversos cursos para formar pessoas de diferentes profissões em um profissional do Coaching. Sendo assim, o coach não pode formular e fornecer diagnósticos, ele incentiva e apoia o seu cliente em seu objetivo profissional, estabelecido dentro de um número de 8 a 10 sessões. Sua atuação não possui caráter clínico, sendo assim, não trata de traumas e sintomas psicológicos.

                        Já o psicólogo, além de aumentar o nível de autoconhecimento dos seus pacientes, trabalha nas queixas associadas aos conflitos internos. Apoia os seus pacientes na superação ou, ao menos, no gerenciamento dos problemas de relacionamento, ansiedade, estresse, medo, depressão entre tantos outros de ordem psíquica- emocional. Seu trabalho busca as origens dos problemas, entendendo suas funções e sempre indaga a forma pelo qual o indivíduo encara suas questões pessoais, com o objetivo primordial de tornar a vida da pessoa a mais confortável possível.'
                    />

                </Accordion>

            </VStack>

        </Stack>

    )
}

