import React from 'react'
import Image from 'next/image'
import { blogData } from '../(blog-content)/blogContent'
import Link from 'next/link'

type TSimilarContentProps = {
	title: string
}
const SimilarContent = ({ title }: TSimilarContentProps) => {

	const moreBlog = blogData.filter((blog, i) => blog.href !== title);

	return (
		<section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
			<div className="container p-6 mx-auto space-y-8">
				<div className="space-y-2 text-center">
					<h2 className="text-3xl font-bold">More Posts</h2>
					<hr />
				</div>
				<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

					{moreBlog.map((blg, i) => (
						<article key={i} className="border flex flex-col dark:bg-gray-900 rounded-lg hover:bg-blue-100/20 duration-300  hover:shadow-lg transition-shadow">

							<Image width={400} height={400} alt={blg.alt} className="object-cover w-full h-52 dark:bg-gray-500" src={blg.image} />

							<div className="flex flex-col flex-1 p-1">


								<h3 className="flex-1 py-2 text-base font-semibold leading-snug">{blg.title}</h3>
								<Link href={blg.href} className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Read More...</Link>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default SimilarContent