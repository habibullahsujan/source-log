import ContentTable from '@/app/(components)/contentTable'
import { Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image1 from '@/public/assets/seafood-cuisine-feature.jpeg'
import japaneseCuisine from '@/public/assets/japanese-cuisine.jpeg';
import mediterraneanCuisine from '@/public/assets/mediterranean-cuisine.jpeg'
import southEastAsianCuisine from '@/public/assets/south-east-asian-cuisine.jpeg';
import peruSeafoodCuisine from '@/public/assets/peru-sea-food-cuisine.jpeg';
import italySeafoodCuisine from '@/public/assets/italy-seafood-cuisine.jpeg'
import BlogContainer from '../blogContainer'
import { Metadata } from 'next'
import SimilarContent from '@/app/(components)/similarContent'


export const metadata: Metadata = {
    title: "Safood cuisine: a global flavor adventure",
    description: "Discover the world's delicious seafood! Discover signature dishes, regional specialties and tips for cooking at home."
};
const SeafoodCuisine = () => {

    const tableContents = [
        { title: 'Japan: Symphony of Freshness' },
        { title: 'Mediterranean: a mixture of flavours' },
        { title: 'Southeast Asia: The Spice Explosion' },
        { title: 'Peru: a blend of tradition and innovation' },
        { title: 'Italy: A celebration of simplicity' },
        { title: 'Beyond the dish: the cultural significance of seafood cuisine' },
        { title: 'Embark on your culinary journey' },
    ]
    return (

        <BlogContainer className='mx-2 md:mx-16 py-32'>
            <div className='flex items-center gap-x-4 py-7'>
                <Link href={'/'}><Home className='h-4 w-4' /></Link> / <Link href={'/seafood-cuisine'}>Seafood Cuisine</Link>
            </div>
            <div className='grid grid-cols-12 gap-x-5'>
                <div className="col-span-12  lg:col-span-4 lg:mr-6 mr-0">
                    <details
                        className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-16 max-h-[80vh] overflow-hidden overflow-y-auto"
                        open
                    >
                        <summary className="text-lg font-semibold capitalize cursor-pointer">
                            Table of Contents
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
                    <h1 className='font-bold text-4xl text-[#00563B]'>How to prepare the best seafood in the world.</h1>
                    <div className=' my-10' >
                        <div className='flex justify-end'>
                            <Image className='w-full h-[400px] object-fill' src={image1} alt='seafood-cuisine' />
                        </div>
                        <span className='cursor-pointer text-sky-400'>source: <Link href={'https://pexels.com'} >pexel.com</Link></span>
                    </div>
                    <article>
                        <div>
                            <p className='text-lg'>
                                The ocean&apos;s bounty offers a treasure trove of delicacies, and cultures around the world have developed unique and delicious ways to showcase <span className='font-bold'>the best seafood </span>. From the delicate artistry of Japanese sushi to the bold spices of Moroccan tagines, seafood takes center stage in countless culinary traditions, exciting the sense of taste and enriching cultural experiences.
                            </p>
                            <p className='text-lg'>
                                This comprehensive guide delves deep into the world&apos;s best seafood And reveal its unique characteristics, distinctive dishes, and the wonderful stories behind them. So, get ready to embark on a delicious journey around the world!
                            </p>
                        </div>
                        <div id='Japan: Symphony of Freshness' className='py-4'>

                            <h2 className='text-xl font-bold pt-14 pb-2 text-[#00563B]'>1. Japan: Symphony of Freshness</h2>
                            <div className='flex justify-end'>
                                <Image className='w-full h-[400px] object-fill' src={japaneseCuisine} alt='seafood-cuisine' />
                            </div>
                            <p className='text-lg py-6'>
                                Japanese cuisine is known for its emphasis on freshness, seasonality, and careful presentation. Seafood plays a central role, with dishes like sushi and sashimi showcasing the inherent flavor and beauty of the ocean&apos;s bounty. Delicately sliced raw fish, with vinegared rice and other toppings, create a symphony of textures and tastes in every bite.
                            </p>
                            <h3 className='text-lg font-semibold py-2 text-[#00563B]'>Featured dishes: </h3>
                            <ul className='list-disc'>
                                <li className="">
                                    <span className='font-bold'>Sushi: </span>
                                    Thin slices of raw fish served over vinegared rice, garnished with different toppings such as seaweed, wasabi and pickled ginger.
                                </li>
                                <li className=''><span className='font-bold'>Sashimi: </span>Thin slices of raw fish are often served with soy sauce and wasabi, highlighting the natural sweetness and texture of the seafood.</li>
                                <li className=''><span className='font-bold'>Tempura: </span>Seafood and vegetables, stir-fried and deep-fried, offer a delightful contrast in texture.</li>
                                <li className=''><span className='font-bold'>Miso Soup: </span>A comforting broth flavored with miso paste, often containing seafood such as tofu or clams.</li>
                            </ul>
                        </div>
                        <div id='Mediterranean: a mixture of flavours'>
                            <h2 className='text-xl font-bold pt-14 pb-2 text-[#00563B]'>2. Mediterranean: a mixture of flavours</h2>
                            <div className='flex justify-end'>
                                <Image className='w-full h-[400px] object-cover' src={mediterraneanCuisine} alt='mediterranean-cuisine' />
                            </div>
                            <p className='text-lg py-4'>The vibrant cultures of the Mediterranean have generated a culinary tapestry rich with vibrant flavors and fresh ingredients. <span className='font-bold'>Seafood </span> is a staple, and appears prominently in dishes that combine <span className='font-bold'>
                                Aromatic herbs, citrus fruits and intense spices </span>From seafood dishes in Greece to paella in Spain, the Mediterranean offers a kaleidoscope of taste sensations for seafood lovers.</p>
                            <h3 className="text-lg font-semibold py-2 text-[#00563B]">
                                Featured dishes:
                            </h3>
                            <ul className='list-disc'>
                                <li className="py-1">
                                    <span className='font-bold'>Paella: </span>A Spanish rice dish featuring seafood such as shrimp, mussels and calamari, flavored with saffron, paprika and other spices.
                                </li>
                                <li className="py-1">
                                    <span className='font-bold'>Soup: </span>
                                    A French fish stew originating from Provence, filled with a variety of seafood and cooked in a flavorful broth.
                                </li>
                                <li className="py-1">
                                    <span className='font-bold'>Aqua Pizza: </span>
                                    An Italian fish stew with a light tomato broth seasoned with herbs and garlic, highlighting the delicious flavors of seafood.
                                </li>
                                <li className="py-1">
                                    <span className='font-bold'>Cioppino: </span>
                                    A San Francisco specialty inspired by Italian fish stew, it features an abundance of seafood in a rich, tomato-based broth.
                                </li>
                            </ul>
                        </div>
                        <div id="Southeast Asia: The Spice Explosion" className='py-12'>
                            <h2 className='font-bold text-lg py-8 text-[#00563B]'>3. Southeast Asia: The Spice Explosion</h2>
                            <div className='flex justify-end'>
                                <Image className='w-full h-[400px] object-fill' src={southEastAsianCuisine} alt='south-east-asian-cuisine' />
                            </div>
                            <p className='text-lg py-4'>The<span className='font-bold'>Bold, vibrant flavors </span>of Southeast Asian cuisine are a feast for the senses. <span className='font-bold'>Seafood</span>
                                It takes center stage, and is often cooked
                                <span className='font-bold' > Aromatic curries, stir-fried with tangy sauces, or grilled over charcoal. </span>From the aromatic curries of Thailand to the spicy stir-fries of Vietnam, Southeast Asia&apos;s culinary traditions offer a unique and delicious symphony for seafood lovers. </p>
                            <h3 className='text-lg font-semibold pt-4 text-[#00563B]'>Featured dishes:</h3>
                            <ul className='list-disc'>
                                <li className="py-1 ">
                                    <span className='font-bold'>Tom Yum Gong: </span>
                                    An aromatic and spicy Thai soup with shrimp, lemongrass, kaffir lime leaves and galangal, offering a complex interplay of flavors and textures.
                                </li>
                                <li className="py-1 ">
                                    <span className='font-bold'>Ceviche: </span>
                                    A dish that originated in Peru, it features raw fish marinated in citrus juices and seasoned with chili peppers, onions and coriander, creating a refreshing and delicious experience.
                                </li>
                                <li className="py-1">
                                    <span className='font-bold'>Thai Pillow: </span>
                                    A popular Thai dish featuring rice noodles, vegetables, eggs, and often, seafood such as shrimp or squid, marinated in a unique tamarind sauce.
                                </li>
                            </ul>
                        </div>
                        <div id="Peru: a blend of tradition and innovation">
                            <h2 className='font-bold text-lg py-8 text-[#00563B]'>4. Peru: a mix of tradition and innovation</h2>
                            <div className='flex justify-end'>
                                <Image className='w-full h-[400px] object-fill' src={peruSeafoodCuisine} alt='peru-seafood-cuisine' />
                            </div>
                            <p className='pt-4'>Peruvian cuisine has emerged as a global culinary star, famous for its exquisite <span className='font-bold'>innovative and delicious dishes. Seafood </span>plays a central role, inspired by ancient traditions and incorporating modern technologies. Peruvian chefs use unique ingredients such as <span className='font-bold'>aji amarillo chili peppers, lucuma fruit, and quinoa </span>to create dishes that are both familiar and unexpected.</p>
                            <h3 className='text-lg font-semibold pt-4 text-[#00563B]'>Featured dishes:</h3>
                            <ul className='list-disc'>
                                <li className="py-1">
                                    <span className='font-bold'>Ceviche: </span>
                                    A national dish of Peru, it features raw fish marinated in citrus juices, aji amarillo chiles, and many other ingredients, resulting in a vibrant and delicious experience.
                                </li>
                                <li className="py-1">
                                    <span className='font-bold'>Lomo Saltado: </span>
                                    A stir-fried beef dish with vegetables and often seafood such as shrimp, marinated in soy sauce, vinegar and spices, reflecting a mixture of Peruvian and Chinese influences.
                                </li>
                                <li className="py-1">
                                    <span className='font-bold'>Agi di Gallina: </span>
                                    A creamy chicken stew flavored with aj amarillo chiles, and sometimes featuring seafood such as scallops or mussels, showcasing the diversity of Peruvian cuisine.
                                </li>
                            </ul>
                        </div>
                        <div id="Italy: A celebration of simplicity">
                            <h2 className='font-bold text-xl py-8 text-[#00563B]'>5. Italy: A celebration of simplicity</h2>
                            <div className='flex justify-end'>
                                <Image className='w-full h-[400px] object-cover' src={italySeafoodCuisine} alt='mediterranean-cuisine' />
                            </div>
                            <p className='pt-4' >Italian cuisine is known for its emphasis on <span className='font-bold'>fresh, high-quality ingredients </span>and<span className='font-bold'>simple but delicious preparations. Seafood </span>It features prominently in coastal areas, and is often cooked with garlic, olive oil, lemon, and fresh herbs. Dishes like frutti di mare and pasta alle vongole showcase the inherent flavors of the sea, highlighting the Italian philosophy of &quot;less is more&quot;.</p>
                            <h3 className='text-lg font-semibold pt-4 text-[#00563B]'>Featured dishes:</h3>
                            <ul className='list-disc'>
                                <li className="py-1">
                                    <span className='font-bold'>Frutti di Mare: </span>
                                    A seafood dish featuring different types of shellfish, often cooked in a light tomato sauce or simply grilled with garlic and herbs.
                                </li>
                                <li className="py-1">
                                    <span className='font-bold'>Spaghetti alle Vongole: </span>
                                    Pasta with clams, cooked in a simple sauce of olive oil, garlic, white wine and fresh parsley, allowing the natural flavors of the clams to shine.
                                </li>
                                <li className="py-1">
                                    <span className='font-bold'>Aqua Pazza (Italian version): </span>
                                    Similar to the Mediterranean version, this dish features white fish cooked in a light tomato broth with garlic, herbs and sometimes olives, providing a comforting and delicious experience.
                                </li>
                            </ul>
                        </div>
                        <div id='Beyond the dish: the cultural significance of seafood cuisine'>
                            <h2 className='text-lg font-bold text-[#00563B]'>Beyond the dish: the cultural significance of seafood cuisine</h2>
                            <p><span className='font-bold'>Seafood </span>Goes beyond just culinary delights; It is woven into the cultural fabric of countless societies around the world. From the traditional fishing practices of coastal communities to celebratory feasts featuring seafood, these culinary traditions reflect a deep connection to the sea and its bounties.</p>
                        </div>
                        <div className='py-6'>
                            <h2 className='text-lg font-bold text-[#00563B]' >Sustainable practices: ensuring the future of seafood</h2>
                            <p>As we celebrate <span className='font-bold'>the best seafood, </span>it is crucial to acknowledge the importance of <span className='font-bold'>sustainable fishing practices </span>and constitutes overfishing and degradation. Environmental threats to marine ecosystems. By making conscious choices about the seafood we consume and supporting sustainable fishing practices, we can ensure that future generations can continue to enjoy the ocean&apos;s bounty for years to come.</p>
                        </div>
                        <div id='Embark on your culinary journey' className='py-6'>
                            <h2 className='text-lg font-bold text-[#00563B]'>Embark on your own culinary journey:</h2>
                            <p>This exploration of the world <span className='font-bold'>Best Seafood </span>is just a starting point. Each region offers a plethora of unique dishes and culinary experiences waiting to be discovered. So, enjoy the adventure, explore local seafood markets, try new recipes, and create delicious memories with the bounty of the sea!</p>
                        </div>
                    </article>
                </div>
            </div>
            {
                        <SimilarContent title='/seafood-cuisine'/>
                    }
        </BlogContainer>
    )
}

export default SeafoodCuisine