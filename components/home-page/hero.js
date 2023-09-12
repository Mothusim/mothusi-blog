import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src="/images/site/Nelson-Malgas.jpeg"
					alt="Image showing Nelson"
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi I'm Nelson</h1>
			<p>
				I blog about web development - especially Frontend frameworks like React
			</p>
		</section>
	);
}

export default Hero;
