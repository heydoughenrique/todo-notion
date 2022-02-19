import {
    Heading,
    Text,
    Box,
    Button,
    Flex,
    Container
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

function SliderItem({ image }) {
    return (
        <Image
            src={image}
            alt='Strides Logo'
            layout='fill'
        />
    )
}

export default function Slider3Columns() {
    return (
        <Flex
            as='section'
            w='full'
            align='center'
            maxH='xl'
            background='neutral.900'>
            <Container

                maxW='full'
                py={['0', '24px']}>
                <Swiper
                    freeMode={true}
                    loop={true}
                    grabCursor={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        },
                        1920: {
                            slidesPerView: 5,
                            spaceBetween: 10
                        }
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}

                    className="mySwiper"

                >
                    <SwiperSlide>
                        <SliderItem
                            image={'/images/Strides/portfolio-sd-1.jpg'}

                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderItem
                            image={'/images/Strides/portfolio-sd-2.jpg'}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderItem
                            image={'/images/Strides/portfolio-sd-3.jpg'}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SliderItem
                            image={'/images/Strides/portfolio-sd-2.jpg'}
                        />
                    </SwiperSlide>


                </Swiper >

            </Container>

        </Flex >
    );
};