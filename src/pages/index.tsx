import { AppProps } from 'next/app'
import Head from 'next/head';

import { Flex, Heading, Text } from '@chakra-ui/react'
import MenuSimpleCentered from '../PageSections/Header/MenuSimpleCentered'
import SimpleTwoColumns from '../PageSections/HeroSection/SimpleTwoColumns'

import { useRouter } from 'next/router'
import en from '../locales/en'
import pt from '../locales/pt'
import Slider1Column from '../components/Slider1Column'
import Feature1 from '../PageSections/Features/feature1'
import Feature1Inverted from '../PageSections/Features/feature1inverted';
import SimpleCenteredCTA from '../PageSections/CTA/SimpleCenteredCTA';
import FAQFooter from '../PageSections/Footer/FAQFooter';



export default function Home({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : pt

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push('/', '/', { locale })
  }


  return (
    <>
      <Head>
        <title>Strides Digital®</title>
        <meta name='description' content='Ajudamos você a encontrar a cortina ou persiana ideal. Solicite seu atendimento online.' />

      </Head>
      <MenuSimpleCentered />

      <SimpleTwoColumns
        badge={t.heroHome.badge}
        tagline={t.heroHome.tagline}
        subtitle={t.heroHome.subtitle}
        ctaPrimary={t.heroHome.cta}
        ctaSecondary=''
        image='/images/Strides/welcome-strides.png'
        altImage=''
      />

      <Slider1Column />

      <Feature1
        layerStyle='secondary'
        image='/images/Strides/money-back.svg'
        altText='Money back guarantee for our Website Subscription.'
        badge=''
        tagline='14 dias de garantia'
        subtitle='Se dentro de 14 dias após a publicação do site você não ficar satisfeito, reembolsaremos seu dinheiro.'
        ctaPrimary='Comece hoje'
        ctaSecondary=''
      />

      <Feature1Inverted
        layerStyle=''
        image='/images/Strides/cancel-anytime.png'
        altText='Cancel anytime'
        badge=''
        tagline='Cancele quando quiser'
        subtitle='Sentimos ao ver você partir, mas se precisar cancelar seu plano, tudo bem. Sem contratos longos. Todos os nossos planos são mensais.'
        ctaPrimary='Ok! Vamos lá!'
        ctaSecondary='' />

      <SimpleCenteredCTA
        layerStyle=''
        badge=''
        tagline='Dê grandes passos com um ótimo website'
        subtitle='Obtenha mais clientes com um site claro, simples e profissional a preços razoáveis.'
        cta='Ver Planos e Preços' />


      <FAQFooter />

    </>
  )
}
