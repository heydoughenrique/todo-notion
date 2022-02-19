import MenuSimpleCentered from "../PageSections/Header/MenuSimpleCentered"
import SimpleCentered from "../PageSections/HeroSection/SimpleCentered"


import { useRouter } from 'next/router'
import en from '../locales/en'
import pt from '../locales/pt'

export default function Pricing() {

    const router = useRouter()
    const { locale } = router
    const t = locale === 'en' ? en : pt

    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push('/', '/', { locale })
    }

    return (
        <>
            <MenuSimpleCentered />
            <SimpleCentered
                badge=''
                tagline={t.heroPricing.tagline}
                subtitle={t.heroPricing.subtitle}
                cta='' />
        </>


    )
}