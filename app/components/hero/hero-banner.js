import desktopHero from '@/public/assets/images/hero-banner.jpg';
import mobileHero from '@/public/assets/images/mobile-hero-banner.jpg';
import './hero.css'

export default function HeroBanner() {
    return (
        <>
            <div className='hero-wrapper w-[100vw]'>
                <div className='hero-section h-[90vh] md:h-[80vh] min-h-[600px] relative block'>
                    <section className='hero-banner'>
                        <picture className='absolute top-0 left-0 w-full h-full'>
                            <source srcSet={mobileHero.src} type='image/webp' media='(max-width: 767px)'/>
                            <img src={desktopHero.src} alt="Hero banner" className='w-full h-full object-cover'/>
                        </picture>

                        <div className='absolute top-0 left-0 w-full h-full pb-[80px] flex items-end'>
                            <div className='max-w[1280px] w-full py-0 px-[40px] my-0 mx-auto'>
                                <div className='text-center text-white'>
                                    <h1 className='font-playfair-display text-[53px]'>Hello, Summer</h1>
                                    <p>Brighten your wardrobe with the season's new essentials.</p>
                                    <div className='mt-[20px] flex sm:flex-col justify-center items-center'>
                                        <a href="" className='hero-shop-button'><span
                                            className='font-[500] z-10'>Shop men</span></a>
                                        <a href="" className='hero-shop-button sm:ml-0 sm:mt-[15px] ml-[15px]'><span
                                            className='font-[500] z-10'>Shop women</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}