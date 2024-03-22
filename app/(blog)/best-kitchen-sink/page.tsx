import React from 'react'
import BlogContainer from '../blogContainer'
import Link from 'next/link'
import { Home } from 'lucide-react'
import ContentTable from '@/app/(components)/contentTable'
import Image from 'next/image'
import featuredImage from '@/public/assets/featured-best-kitchen-sink.jpeg'
import { Metadata } from 'next'
import SimilarContent from '@/app/(components)/similarContent'


export const metadata: Metadata = {
    title: 'Top 10 Kitchen Sinks Revealed: Find Your Perfect Fit',
    description: 'Unveiling the best kitchen sinks! Explore materials, styles, functionalities, & prices to discover your dream sink for any budget.'
}
const BestKitchenSink = () => {

    const tableContents = [
        { title: '1. Kraus KSF-1002 Kore Workstation Undermount Stainless Steel Sink' },
        { title: '2. Blanco Diamond Silva Single Bowl Quartz Composite Sink' },
        { title: '3. Kohler KHF-510-VS Farmhouse Cast Iron Sink' },
        { title: '4. Ruvati 33 Inch Workstation Stainless Steel Sink' },
        { title: '5. Elkay Crosstown Single Bowl Undermount Stainless Steel Sink' },
        { title: '6. Fragranite Orion Single Bowl Composite Sink' },
        { title: '7. Sinkology Savona Farmhouse Fireclay Sink' },
        { title: '8. Moen Align Stainless Steel Double Bowl Sink' },
        { title: '9. Franke Mythos Single Bowl Workstation Stainless Steel Sink' },
        { title: '10. KOHLER Stages Undermount Single Bowl Cast Iron Sink with Self-Trimming Flange' }
    ]
    return (
        <>
            <BlogContainer className='text-left mx-2 md:mx-16 py-32'>
                <div className='flex items-center gap-x-4 py-7 text-lg'>
                    <Link href={'/'}><Home className='h-4 w-4' /></Link> / <Link href={'/best-kitchen-sink'}>Best-kitchen-sink</Link>
                </div>
                <div className='grid grid-cols-12 gap-x-5'>
                    <div className="col-span-12  lg:col-span-4">
                        <details
                            className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-16 max-h-[80vh] overflow-hidden overflow-y-auto"
                            open
                        >
                            <summary className="text-lg font-semibold capitalize cursor-pointer">
                                Table of content
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
                        <h1 className='font-bold text-4xl text-[#00563B]'>Best Kitchen Sinks for Every Need</h1>
                        <div className='my-10'>
                            <div className='flex justify-end'>
                                <Image className='w-full h-[400px] object-fill' src={featuredImage} alt='cocoa bean' />
                            </div>
                            <span className='cursor-pointer text-sky-400'>source: <Link href={'https://pexels.com/'} >pexels.com</Link></span>
                        </div>
                        <article>
                            <p className='text-lg'>The kitchen sink - the unsung hero of countless meals, dishes, and culinary creations. It&apos;s a workhorse, a stage for prep work, and a crucial element in maintaining a clean and functional kitchen. But with a multitude of options available, choosing the best kitchen sink can feel overwhelming. Fear not! This comprehensive guide dives into the top 10 contenders, exploring materials, styles, functionalities, and price points to help you find the perfect fit for your kitchen.
                            </p>
                            <div className='py-6' id='1. Kraus KSF-1002 Kore Workstation Undermount Stainless Steel Sink'>
                                <h2 className='py-4 font-bold text-lg text-[#00563B]'>1. Kraus KSF-1002 Kore Workstation Undermount Stainless Steel Sink (Price: Around $370)</h2>
                                <div>
                                    <p><span className='font-bold'>Material:</span>
                                        16 Gauge T-304 Grade Stainless Steel</p>
                                    <p> <span className='font-bold'>Style:</span> Undermount Workstation with Integrated Ledge and Cutting Board</p>
                                    <p className='py-4'>The Kraus KSF-1002 Kore Workstation is a dream come true for those seeking a multifunctional marvel. This undermount stainless steel sink boasts a spacious basin and an integrated ledge that serves as a platform for a cutting board, colander, or drying rack (included). This innovative design streamlines workflow and maximizes counter space, making it ideal for busy kitchens.</p>

                                </div>
                                <span className='font-bold'>Want to buy this? <Link className='text-blue-500 underline' target={'_blank'} href={'https://www.amazon.sa/-/en/Waterfall-Sink%EF%BC%8C304-Stainless-Workstation-80x45x22cm/dp/B0C6WNVQ6Y/ref=asc_df_B0C6WNVQ6Y/?tag=sashogostdde-21&linkCode=df0&hvadid=453112708753&hvpos=&hvnetw=g&hvrand=2104416645015870527&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=21457&hvtargid=pla-2199432981088&mcid=3b812148433235c5a8132f7822671f52&th=1'}>Amazon</Link></span>
                            </div>

                            <div className='py-6' id='2. Blanco Diamond Silva Single Bowl Quartz Composite Sink'>
                                <h2 className='py-4 font-bold text-lg text-[#00563B]'>2. Blanco Diamond Silva Single Bowl Quartz Composite Sink (Price: Around $540)</h2>
                                <div>
                                    <p><span className='font-bold'>Material:</span>
                                        Blancoquartz Composite (Quartz & Granite)</p>
                                    <p> <span className='font-bold'>Style:</span> Drop-In Single Bowl</p>
                                    <p className='py-4'>For those seeking a touch of elegance and unparalleled durability, the Blanco Diamond Silva is a top contender. Crafted from Blancoquartz, a proprietary blend of quartz and granite, this sink offers exceptional resistance to scratches, stains, and heat. Its single bowl design provides ample space for cleaning dishes and cookware, while the smooth, non-porous surface ensures easy cleaning.</p>

                                </div>
                                <span className='font-bold'>Want to buy this? <Link className='text-blue-500 underline' target={'_blank'} href={'https://www.amazon.com/BLANCO-440195-DIAMOND-SILGRANIT-Undermount/dp/B000TRXWSQ'}>Amazon</Link></span>
                            </div>
                            <div className='py-6' id='3. Kohler KHF-510-VS Farmhouse Cast Iron Sink'>
                                <h2 className='py-4 font-bold text-lg text-[#00563B]'>3. Kohler KHF-510-VS Farmhouse Cast Iron Sink (Price: Around $499)</h2>
                                <div>
                                    <p><span className='font-bold'>Material:</span>
                                        Enameled Cast Iron</p>
                                    <p> <span className='font-bold'>Style: </span>Farmhouse Single Bowl</p>
                                    <p className='py-4'>The Kohler KHF-510-VS exudes timeless charm and unparalleled sturdiness. Constructed from durable cast iron and coated with a chip-resistant enamel finish, this farmhouse sink is built to last a lifetime. Its deep, spacious basin effortlessly accommodates large pots and pans, while the classic apron front adds a touch of vintage elegance to any kitchen.</p>

                                </div>
                                <span className='font-bold'>Want to buy this? <Link target={'_blank'} className='text-blue-500 underline' href={'https://www.kohler.com/en/products/kitchen-sinks/shop-cast-iron-kitchen-sinks'}>official website</Link></span>
                            </div>

                            <div className='py-6' id='4. Ruvati 33 Inch Workstation Stainless Steel Sink'>
                                <h2 className='py-4 font-bold text-lg text-[#00563B]'>4. Ruvati 33 Inch Workstation Stainless Steel Sink (Price: Around $299)</h2>
                                <div>
                                    <p><span className='font-bold'>Material:</span>
                                        16 Gauge T-304 Grade Stainless Steel</p>
                                    <p> <span className='font-bold'>Style: </span>Workstation with Integrated Cutting Board and Grid</p>
                                    <p className='py-4'>Ruvati&apos;s Workstation sink offers incredible value for its price. This stainless steel option features a spacious basin with an integrated ledge that accommodates a cutting board and a roll-up drying rack (included). The included grid protects the sink bottom from scratches and provides additional functionality for rinsing dishes.</p>

                                </div>
                                <span className='font-bold'>Want to buy this? <Link target={'_blank'} className='text-blue-500 underline' href={'https://www.ruvati.com/products/rvh8222-33-inch-workstation-two-tiered-ledge-kitchen-sink-undermount-16-gauge/'}>official website</Link></span>
                            </div>

                            <div className='py-6' id='5. Elkay Crosstown Single Bowl Undermount Stainless Steel Sink'>
                                <h2 className='py-4 font-bold text-lg text-[#00563B]'>5. Elkay Crosstown Single Bowl Undermount Stainless Steel Sink (Price: Around $299)</h2>
                                <div>
                                    <p><span className='font-bold'>Material:</span>
                                        18 Gauge T-304 Grade Stainless Steel</p>
                                    <p> <span className='font-bold'>Style: </span>Undermount Single Bowl</p>
                                    <p className='py-4'>For a classic and budget-friendly option, the Elkay Crosstown sink is a reliable choice. This undermount stainless steel sink offers a clean and contemporary look, seamlessly integrating into various kitchen styles. Its single bowl design provides ample space for everyday tasks, and the 18 Gauge T-304 grade stainless steel ensures long-lasting durability.</p>

                                </div>
                                <span className='font-bold'>Want to buy this? <Link target={'_blank'} className='text-blue-500 underline' href={'https://www.elkay.com/products/category/sinks/collections/crosstown'}>official website</Link></span>
                            </div>

                            <div className='py-6' id='6. Fragranite Orion Single Bowl Composite Sink'>
                                <h2 className='py-4 font-bold text-lg text-[#00563B]'>6. Fragranite Orion Single Bowl Composite Sink (Price: Around $420)</h2>
                                <div>
                                    <p><span className='font-bold'>Material:</span>
                                        Fragranite (Quartz Granite)</p>
                                    <p> <span className='font-bold'>Style: </span>Drop-In Single Bowl</p>
                                    <p className='py-4'>The Fragranite Orion sink combines functionality with a touch of luxury. Crafted from Fragranite, a unique material composed of quartz granite, this sink boasts exceptional resistance to scratches, heat, and stains. Additionally, Fragranite offers a built-in antibacterial protection feature, promoting hygiene in your kitchen.</p>

                                </div>
                                <span className='font-bold'>Want to buy this? <Link target={'_blank'} className='text-blue-500 underline' href={'https://www.tapsuk.com/franke-urban-1-0-bowl-fragranite-orion-grey-kitchen-sink-ubg611-100og-p38942'}>official website</Link></span>
                            </div>


                            <div className='py-6' id='7. Sinkology Savona Farmhouse Fireclay Sink'>
                                <h2 className='py-4 font-bold text-lg text-[#00563B]'>7. Sinkology Savona Farmhouse Fireclay Sink (Price: Around $299)</h2>
                                <div>
                                    <p><span className='font-bold'>Material:</span>
                                        Fireclay</p>
                                    <p> <span className='font-bold'>Style: </span>Farmhouse Single Bowl</p>
                                    <p className='py-4'>For a touch of rustic charm, the Sinkology Savona farmhouse sink is a captivating choice. Made from fireclay, a natural and highly durable material, this sink offers a distinctive look and exceptional heat resistance. Its deep, spacious basin effortlessly accommodates large pots and pans, while the classic apron front adds a touch of farmhouse character to any kitchen.</p>

                                </div>
                                <span className='font-bold'>Want to buy this? <Link target={'_blank'} className='text-blue-500 underline' href={'https://www.sinkology.com/fireclay-farmhouse-kitchen-sinks/'}>official website</Link></span>
                            </div>

                            <div className='py-6' id='8. Moen Align Stainless Steel Double Bowl Sink'>
                                <h2 className='py-4 font-bold text-lg text-[#00563B]'>8. Moen Align Stainless Steel Double Bowl Sink (Price: Around $320)</h2>
                                <div>
                                    <p><span className='font-bold'>Material:</span>
                                        16 Gauge T-304 Grade Stainless Steel</p>
                                    <p> <span className='font-bold'>Style: </span>Drop-In Double Bowl</p>
                                    <p className='py-4'>For those who require the functionality of a double basin, the Moen Align sink is a versatile option. This stainless steel sink features two spacious bowls, perfect for multitasking in the kitchen. One bowl can be dedicated to washing dishes, while the other can be used for rinsing or prepping ingredients. The sleek, modern design complements various kitchen styles, while the durable stainless steel construction ensures long-lasting performance.</p>

                                </div>
                                <span className='font-bold'>Want to buy this? <Link target={'_blank'} className='text-blue-500 underline' href={'https://www.amazon.com/Moen-7565SRS-One-Handle-Technology-Stainless/dp/B00BSXOF18'}>Amazon</Link></span>
                            </div>
                            <div className='py-6' id='9. Franke Mythos Single Bowl Workstation Stainless Steel Sink'>
                                <h2 className='py-4 font-bold text-lg text-[#00563B]'>9. Franke Mythos Single Bowl Workstation Stainless Steel Sink (Price: Around $500)</h2>
                                <div>
                                    <p><span className='font-bold'>Material:</span>
                                        18 Gauge T-304 Grade Stainless Steel</p>
                                    <p> <span className='font-bold'>Style: </span>Workstation with Integrated Ledge and Cutting Board</p>
                                    <p className='py-4'>The Franke Mythos offers a premium workstation experience. This stainless steel sink boasts a deep, single basin with an integrated ledge that serves as a platform for a cutting board, colander, or drying rack (included). Additionally, the Franke Mythos features a unique soundproofing technology that minimizes noise during use, making it ideal for open-concept kitchens.</p>

                                </div>
                                <span className='font-bold'>Want to buy this? <Link target={'_blank'} className='text-blue-500 underline' href={'https://www.sinks.co.uk/franke-mythos-myx-251-86-one-and-half-bowl-kitchen-sink-with-tap-ledge-single-drainer/'}>official website</Link></span>
                            </div>
                            <div className='py-6' id='10. KOHLER Stages Undermount Single Bowl Cast Iron Sink with Self-Trimming Flange'>
                                <h2 className='py-4 font-bold text-lg text-[#00563B]'>10. KOHLER Stages Undermount Single Bowl Cast Iron Sink with Self-Trimming Flange (Price: Around $799)</h2>
                                <div>
                                    <p><span className='font-bold'>Material:</span>
                                        Enameled Cast Iron</p>
                                    <p> <span className='font-bold'>Style: </span>Undermount Single Bowl with Self-Trimming Flange</p>
                                    <p className='py-4'>For those seeking the ultimate in luxury and durability, the KOHLER Stages cast iron sink is a top choice. This undermount sink, crafted from high-quality cast iron and coated with a chip-resistant enamel finish, offers unparalleled strength and resilience. The spacious single basin effortlessly accommodates large pots and pans, while the self-trimming flange simplifies the undermount installation process.</p>

                                </div>
                                <span className='font-bold'>Want to buy this? <Link target={'_blank'} className='text-blue-500 underline' href={'https://www.amazon.com/K-5827-0-Whitehaven-Self-Trimming-Under-Mount-Single-Bowl/dp/B00FATBMWQ'}>Amazon</Link></span>
                            </div>
                        </article>
                    </div>
                </div>

                <div>
                <SimilarContent title="/best-kitchen-sink" />
                </div>

            </BlogContainer>
        </>
    )
}

export default BestKitchenSink