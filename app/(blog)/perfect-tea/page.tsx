import React from 'react'
import BlogContainer from '../blogContainer'
import Link from 'next/link'
import { Home } from 'lucide-react'
import ContentTable from '@/app/(components)/contentTable'
import Image from 'next/image'
import { Metadata } from 'next';
import blogFeature from '@/public/assets/tea-blog-feature.jpeg'
import SimilarContent from '@/app/(components)/similarContent'

export const metadata: Metadata = {
    title: "How to make a perfect cup of tea. A comprehensive guide",
    description: "Discover the secrets to brewing the perfect cup of tea with our in-depth guide. Learn techniques, tips and tricks to take your tea-making skills to new heights."
};

const TeaComponent = () => {
    const tableContents = [
        { title: 'The Importance of Ingredient Quality' },
        { title: 'The Art of Fermentation' },
        { title: 'Enhance your tea experience' },
        { title: 'Embrace the tea ritual' }

    ]
    return (
        <>
            <BlogContainer className='mx-2 md:mx-16 py-32'>
                <div className='flex items-center gap-x-4 py-7 text-lg'>
                    <Link href={'/'}><Home className='h-4 w-4' /></Link> / <Link href={'/perfect-tea'}>Perfect Tea</Link>
                </div>
                <div className='grid grid-cols-12 gap-x-5'>
                    <div className="col-span-12  lg:col-span-4">
                        <details
                            className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-16 max-h-[80vh] overflow-hidden overflow-y-auto"
                            open
                        >
                            <summary className="text-lg font-semibold capitalize cursor-pointer">
                                Table of contents
                            </summary>
                            <ul className="mt-4 font-in text-base">
                                {
                                    tableContents.map((heading, index) => (
                                        <ContentTable key={index} heading={heading} />
                                    ))
                                }
                            </ul>
                        </details>
                    </div>
                    <div className='col-span-12 lg:col-span-8'>
                        <h1 className='font-bold text-4xl text-[#00563B]'>How to make a perfect cup of tea. Comprehensive guide</h1>
                        <div className='my-10'>
                            <div className='flex justify-end'>
                                <Image className='w-full h-[400px] object-fill' src={blogFeature} alt='cocoa bean' />
                            </div>
                            <span className='cursor-pointer text-sky-400'>source: <Link href={'https://pexels.com/'} >pexels.com</Link></span>
                        </div>
                        <article>
                            <p className=''>Tea has been appreciated for centuries, celebrated for its comforting warmth, soothing aroma, and countless health benefits. From the elegant Japanese matcha ceremony to the intense flavors of Indian tea, tea culture spreads across the world, capturing hearts and minds with every sip.</p>
                            <p className='py-4'>In this comprehensive guide, we delve into the art of brewing the perfect cup of tea, exploring techniques, tips and tricks to take your tea-making skills to new heights. Whether you&apos;re a seasoned tea lover or just starting your journey into the world of tea, join us as we reveal the secrets of this beloved beverage.</p>

                            <div className='py-4' id="The Importance of Ingredient Quality">
                                <h2 className='text-xl font-bold pb-2 pt-4 text-[#00563B]'>The importance of Ingredient quality</h2>

                                <p className='text-lg py-4'>
                                    The foundation of any great cup of tea lies in the quality of its ingredients. Start with fresh, high-quality tea leaves, sourced from reputable suppliers known for their commitment to excellence. Whether you prefer the subtle flavors of green tea, the bold flavors of black tea, or the subtle complexities of oolong tea, choose teas that match your taste and preferences.
                                </p>
                            </div>

                            <div className='py-4' id='Understanding Tea Varieties'>
                                <h2 className='font-bold text-[#00563B] text-lg'>Understanding Tea Varieties</h2>
                                <p className='py-4'>Tea comes in a dazzling array of varieties, each offering its own unique characteristics and flavour. Learn about the different types of tea, including black, green, white, oolong, and herbal tea. Explore the nuances of each variety, from the floral notes of Jasmine Green Tea to the earthy richness of Pu-erh.</p>


                            </div>

                            <div className='py-4' id='The Art of Fermentation'>
                                <h2 className='font-bold text-[#00563B] text-lg' >The Art of Fermentation</h2>
                                <p className='py-4'>Achieving the perfect drink requires precision, patience, and a dash of intuition. Start by choosing the right vessel for your tea, whether it&apos;s a classic teapot, an elegant teapot, or a convenient infuser basket. Measure tea leaves carefully, following recommended brewing instructions to ensure optimal flavor extraction.</p>
                                <p className='py-4'>
                                    Pay attention to water temperature and steeping times, as these factors can greatly affect the taste and aroma of the tea. Experiment with different brewing methods and parameters, and adjust the variables to suit your personal preferences.
                                </p>


                            </div>



                            <div className='py-4' id='Enhance your tea experience'>
                                <h2 className='font-bold text-[#00563B] text-lg'>Enhance your tea experience</h2>

                                <p className='py-4'>The journey to the perfect cup of tea extends beyond the brewing process. Consider the atmosphere and surroundings in which you are enjoying tea, whether that is a cozy corner of your home, a quiet garden environment, or a bustling café full of laughter and conversation.

                                    Experiment with tea pairings, discover complementary flavors and textures that enhance the overall sensory experience. Indulge in desserts such as delicate pastries, butter cakes, or delicious chocolates, creating harmonious flavor combinations that delight the palate.</p>

                            </div>

                            <div className='font-lg py-4' id='Embrace the tea ritual'>
                                <h2 className='font-bold text-lg'>Embracing the tea ritual</h2>

                                <p className='py-4'>Tea is more than just a drink - it is a ritual, a moment of mindfulness and connection in a fast-paced world. Enjoy tea rituals from around the world, from the meditative serenity of the Japanese tea ceremony to the joyful gatherings of English afternoon tea.

                                    Create your own tea ritual, infusing each cup with intention, gratitude, and appreciation for life&apos;s simple pleasures. Whether you&apos;re savoring tea alone or sharing it with loved ones, let every sip be a reminder to slow down, breathe deeply, and savor the moment.</p>
                            </div>

                        </article>
                    </div>
                </div>
                {
                        <SimilarContent title='/perfect-tea'/>
                    }
            </BlogContainer>
        </>
    )
}

export default TeaComponent