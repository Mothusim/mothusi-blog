import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";
import { Fragment } from "react";
import { getFeaturedPosts } from "@/lib/post-util";
import Head from "next/head";

export default function HomePage(props) {
	const { posts } = props;
	return (
		<Fragment>
			<Head>
				<title>#Nelson's Blog</title>
				<meta
					name="description"
					content="I post about programming and web development"
				/>
			</Head>
			<Hero />
			<FeaturedPosts posts={posts} />
		</Fragment>
	);
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
	};
}
