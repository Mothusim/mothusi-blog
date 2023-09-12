import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "@/lib/post-util";
import Head from "next/head";

export default function SinglePostDetailPage(props) {
	const { post } = props;
	
	return (
		<>
			<Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt}/>
      </Head>
			<PostContent post={post} />
		</>
	);
}

export function getStaticProps(context) {
	const { params } = context;

	const { slug } = params;

	const postData = getPostData(slug);

	return {
		props: {
			post: postData,
		},
		revalidate: 600,
	};
}

export function getStaticPaths() {
	const postFileName = getPostsFiles();
	const slugs = postFileName.map((fileName) => fileName.replace(/\.md$/, ""));

	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: false,
	};
}
