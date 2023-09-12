import classes from "./all-post.module.css";
import PostsGrid from "./post-grid";

function AllPosts(props) {

    const { posts } = props
	return (
		<section className={classes.posts}>
			<h1>All Posts</h1>
			<PostsGrid posts={posts}/>
		</section>
	);
}

export default AllPosts;
