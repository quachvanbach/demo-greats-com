'use client'

import {collectionForMen, collectionForWomen, collectionForWomenen} from "@/data/collectiondata";
import './collections.css';
import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";

const swiperSettings = {

    pagination: {
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2.3,
            spaceBetween: 20,
            loop: true,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
    modules: [Pagination],
    className: "mySwiper"
};

export default function Collections() {
    const [active, setActive] = useState('tab-for-men');

    const handleTabClick = (tabId) => {
        setActive(tabId)
    }

    return (
        <>
            <div>
                <section className='py-[100px]'>
                    <div className='max-w-[1280px] w-[100%] px-[40px] py-0 mx-auto my-0'>
                        <div className='flex flex-row items-center justify-between mb-[20px] leading-[35px]'>
                            <div className='font-playfair-display text-[35px]'>Featured Collections</div>
                            <ul className='flex flex-row items-center mx-[-10px]'>
                                <li className='mx-[10px] cursor-pointer'
                                    onClick={() => handleTabClick('tab-for-men')}>For Men
                                </li>
                                <li className='mx-[10px] cursor-pointer'
                                    onClick={() => handleTabClick('tab-for-women')}>For Women
                                </li>
                            </ul>
                        </div>
                        <div className='tabs-container'>
                            <div className={`tab-content ${active === 'tab-for-men' ? 'active' : ''}`}>
                                <Swiper {...swiperSettings} className="mySwiper"
                                >
                                    {
                                        collectionForMen.map(({id, image, title}) => (
                                            <SwiperSlide key={id}>
                                                <div className='text-center'>
                                                    <a href="" className='block w-[100%] '>
                                                        <img src={image} alt=""/>
                                                        <h1>{title}</h1>
                                                    </a>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                            <div className={`tab-content ${active === 'tab-for-women' ? 'active' : ''}`}>
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={30}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    {
                                        collectionForWomen.map(({id, image, title}) => (
                                            <SwiperSlide key={id}>
                                                <img src={image} alt=""/>
                                                <h1>{title}</h1>
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