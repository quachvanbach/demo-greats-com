'use client'

import {collectionForMen, collectionForWomen} from "@/data/collectiondata";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

const swiperSettings = {
    slidesPerView: 1.3,
    loop: true,
    breakpoints: {
        540: {
            slidesPerView: 2.5,
            loop: true,
        },
        768: {
            slidesPerView: 3,
            loop: true,
        },
        1024: {
            slidesPerView: 4,
        },
    },
    className: "mySwiper"
};

export default function Collections() {
    const [active, setActive] = useState('tab-for-men');

    const handleTabClick = (tabId) => {
        setActive(tabId)
    }

    return (
        <>
            <div className='collection-wrapper w-[100vw]'>
                <section className='collection-section py-[100px] sm:py-[60px]'>
                    <div
                        className='collection-container max-w-[1280px] w-[100%] px-[40px] lg:px-[20px] sm:px-0 mx-auto'>
                        <div className='collection-title flex items-center justify-between mb-[20px] sm:px-[20px]'>
                            <div
                                className='font-playfair-display text-[35px] md:text-[28px] mr-[40px] leading-none'>Featured
                                Collections
                            </div>
                            <ul className='flex flex-row items-center mx-[-10px]'>
                                <li className={`${active === 'tab-for-men' ? 'active font-bold opacity-100' : 'opacity-70'} mx-[10px] cursor-pointer`}
                                    onClick={() => handleTabClick('tab-for-men')}>For Men
                                </li>
                                <li className={`${active === 'tab-for-women' ? 'active font-bold opacity-100' : 'opacity-70'} mx-[10px] cursor-pointer`}
                                    onClick={() => handleTabClick('tab-for-women')}>For Women
                                </li>
                            </ul>
                        </div>
                        <div className='collection-content sm:ml-[20px]'>
                            <div className={`tab-content ${active === 'tab-for-men' ? 'active' : ''} hidden`}>
                                <Swiper {...swiperSettings} className="my-swiper "
                                >
                                    {
                                        collectionForMen.map(({id, image, title}) => (
                                            <SwiperSlide key={id}
                                                         className='basis-1/4 md:basis-1/3 sm:basis-[40%] xs:basis-3/4'>
                                                <div className='collection-item mx-[10px]'>
                                                    <a href="" className='collection-item__link'>
                                                        <img src={image} alt="" className='collection-item__image'/>
                                                        <h1 className='collection-item__title text-center'>{title}</h1>
                                                    </a>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                            <div className={`tab-content ${active === 'tab-for-women' ? 'active' : ''} hidden `}>
                                <Swiper {...swiperSettings} className="my-swiper"
                                >
                                    {
                                        collectionForWomen.map(({id, image, title}) => (
                                            <SwiperSlide key={id} className='basis-1/4 md:basis-1/3 sm:basis-[40%]'>
                                                <div className='collection-item'>
                                                    <a href="" className='collection-item__link'>
                                                        <img src={image} alt="" className='collection-item__image'/>
                                                        <h1 className='collection-item__title text-center'>{title}</h1>
                                                    </a>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}