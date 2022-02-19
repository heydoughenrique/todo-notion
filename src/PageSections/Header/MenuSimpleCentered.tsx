import { Flex, Button, IconButton, Image, Stack, Select, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Link from 'next/link'

import { useRouter } from 'next/router'
import en from '../../locales/en'
import pt from '../../locales/pt'

export default function MenuSimpleCentered() {
    const router = useRouter()
    const { locale, pathname, asPath, query } = router
    const t = locale === 'en' ? en : pt

    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push({ pathname, query }, asPath, { locale: locale })

    }


    const [display, changeDisplay] = useState('none')

    return (
        <Flex
            pos='fixed'
            w='100vw'
            background='white'
            minH='80px'
            zIndex='9999'
        >
            <Flex
                mx='auto'
                align='center'
                justify='space-between'
                maxW='1280px'
                width='100vw'
                px={5}
                background='white'>
                <Flex w={[140, 160]}>
                    <Link href='/' passHref>
                        <Image
                            src='/images/logo.svg'
                            alt='Strides Logo'
                        />
                    </Link>
                </Flex>

                <ButtonGroup
                    variant='link'
                    spacing='6'
                    display={['none', 'none', 'flex', 'flex']}>
                    <Link href='/' passHref>
                        <Button aria-label={t.menu.home}>{t.menu.home}</Button>
                    </Link>
                    <Link href='/pricing' passHref>
                        <Button aria-label={t.menu.pricing}>{t.menu.pricing}</Button>
                    </Link>
                    <Link href='/terms' passHref>
                        <Button aria-label={t.menu.terms}>{t.menu.terms}</Button>
                    </Link>
                </ButtonGroup>
                {/* 
                <Flex
                    display={['none', 'none', 'flex', 'flex']}>
                    <Link href='/' passHref>
                        <Button
                            variant='link'
                            aria-label={t.menu.home}
                            my={5}
                            w='100%'>
                            {t.menu.home}
                        </Button>
                    </Link>

                    <Link href='/about' passHref>
                        <Button
                            variant='link'
                            aria-label={t.menu.pricing}
                            my={5}
                            w='100%'>
                            {t.menu.pricing}
                        </Button>
                    </Link>

                    <Link href='/contact' passHref>
                        <Button
                            variant='link'
                            aria-label={t.menu.terms}
                            my={5}
                            w='100%'>
                            {t.menu.terms}
                        </Button>
                    </Link>
                </Flex> */}

                <Stack
                    flex={{ base: 5, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={[2, 2, 6, 6]}
                    mr={[3, 3, 0, 0]}>

                    <Link href='/contact' passHref>
                        <Button
                            variant='link'
                            aria-label={t.menu.sales}
                            w='100%'
                            display={['none', 'none', 'flex', 'flex']}>
                            {t.menu.sales}
                        </Button>
                    </Link>

                    <Button
                        variant='link'
                        aria-label={t.menu.login}
                        w='100%'
                        display={['none', 'none', 'flex', 'flex']}>
                        {t.menu.login}
                    </Button>
                    <Button
                        variant='outline'
                        size='md'
                        aria-label={t.menu.getstarted}
                        w={['50%', '50%', '100%', '100%']}>
                        {t.menu.getstarted}
                    </Button>
                    <Select
                        placeholder={locale}
                        onChange={changeLanguage}
                        defaultValue={locale}
                        minWidth={24}
                        display={['none', 'none', 'flex', 'flex']}>
                        <option value='en'>EN-US</option>
                        <option value='pt'>PT-BR</option>
                    </Select>
                </Stack>

                <IconButton
                    aria-label='Open Menu'
                    size='lg'
                    mr={2}
                    icon={<HamburgerIcon />}
                    display={['flex', 'flex', 'none', 'none']}
                    onClick={() => changeDisplay('flex')}
                />

            </Flex>


            {/* Mobile Dropdown */}
            <Flex
                w='100vw'
                bgColor='gray.50'
                zIndex={20}
                h='100vh'
                pos='fixed'
                top='0'
                left='0'
                overflowY='auto'
                flexDir='column'
                display={display}
            >
                <Flex justify='flex-end'>
                    <IconButton
                        mt={2}
                        mr={2}
                        aria-label='Close Menu'
                        size='lg'
                        icon={<CloseIcon />}
                        onClick={() => changeDisplay('none')}
                    />
                </Flex>
                <Flex
                    flexDir='column'
                    align='center'
                >
                    <Link href='/' passHref>
                        <Button
                            as='a'
                            variant='ghost'
                            aria-label={t.menu.home}
                            my={5}
                            w='100%'>
                            {t.menu.home}
                        </Button>
                    </Link>

                    <Link href='/about' passHref>
                        <Button
                            as='a'
                            variant='ghost'
                            aria-label={t.menu.pricing}
                            my={5}
                            w='100%'>
                            {t.menu.pricing}
                        </Button>
                    </Link>

                    <Link href='/contact' passHref>
                        <Button
                            as='a'
                            variant='ghost'
                            aria-label={t.menu.terms}
                            my={5}
                            w='100%'>
                            {t.menu.terms}
                        </Button>
                    </Link>

                    <Stack

                        justify={'flex-end'}
                        direction={'column'}
                        width='90vw'
                    >
                        <Button
                            as='a'
                            variant='ghost'
                            aria-label={t.menu.login}
                            w='100%'>
                            {t.menu.login}
                        </Button>
                        <Button
                            as='a'
                            variant='solid'
                            aria-label={t.menu.getstarted}
                            w='100%'>
                            {t.menu.getstarted}
                        </Button>
                        <Select
                            onChange={changeLanguage}
                            defaultValue={locale}
                            w='100%'>
                            <option value='en'>EN-US</option>
                            <option value='pt'>PT-BR</option>
                        </Select>

                    </Stack>

                </Flex>
            </Flex>
            {/* END Mobile */}


        </Flex>


    )
}
