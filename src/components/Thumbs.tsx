import styles from "./Thumbs.module.css";
export default function Thumbs({ props }) {
	return (
		<>
			<section className="w-[100] flex justify-around">
				<div className={styles["product-images"]}>
					{props.images.map((each) => (
						<img
							className={styles["mini-img"]}
							key={each}
							src={each}
							alt={props.title}
						/>
					))}
				</div>
				<img
					className={styles["big-img"]}
					id="big-img"
					src={props.images[0]}
					alt="MacBook Pro 13'4"
				/>
			</section>
		</>
	);
}
