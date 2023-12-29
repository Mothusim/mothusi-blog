import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src="/images/site/m2c.png"
					alt="Mothusi's image"
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi I'm Mothusi Mathuloe</h1>
			<p>
				I blog about anything tech related
			</p>
		</section>
	);
}

export default Hero;
