import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/post-util";
import Head from "next/head";

export default function AllPostPage(props) {
	const { posts } = props;
	return (
		<>
			<Head>
				<title>All posts</title>
				<meta
					name="description"
					content="A list of all programming related tutorials and posts "
				/>
			</Head>
			<AllPosts posts={posts} />
		</>
	);
}

export function getStaticProps() {
	const allPosts = getAllPosts();

	return {
		props: {
			posts: allPosts,
		},
	};
}
