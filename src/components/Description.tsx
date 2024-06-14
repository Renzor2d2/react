import styles from "./Description.module.css";
export default function Description({ props }) {
	return (
		<>
			<div className="w-[100%]">
				<h1 className={styles["product-title"]}>{props.title}</h1>
				<form className={styles["product-selector"]}>
					<fieldset className={styles["product-fieldset"]}>
						<label className={styles["product-label"]} htmlFor="color">
							Color
						</label>
						<select className={styles["product-select"]} id="color">
							{props.colors.map((each) => (
								<option key={each} value={each}>
									{each}
								</option>
							))}
						</select>
					</fieldset>
				</form>
				<div className={styles["product-description"]}>
					<span className={styles["product-label"]}>Descripción</span>
					<p>{props.description}</p>
				</div>
			</div>
		</>
	);
}
