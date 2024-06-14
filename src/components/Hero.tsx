// import styles from "./Hero.module.css";

export default function Hero({ first, second }) {
	return (
		<section
			className=" hidden h-[200px] bg-[url('./public/hero.png')] bg-cover bg-top-center  justify-center
    sm:flex"
		>
			<article className="w-[100%] flex flex-col items-start justify-center px-2">
				<span className=" w-[100%]text-xl text-white font-bold">{first}</span>
				<span className="w-[100%] text-5xl leading-9 text-white font-bold">
					{second}
				</span>
			</article>
		</section>
	);
}
