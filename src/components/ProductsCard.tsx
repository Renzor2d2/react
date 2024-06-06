import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import products from "../Assets/Products.tsx";
console.log(products);
export default function ProductCard(props) {
	const { id, title, price, images, colors, onsale } = props;
	return (
		<>
			<Link className={styles["product-card"]} to={"/details/" + id}>
				<img className={styles["product-img"]} src={images} alt={title} />
				<div className={styles["product-info"]}>
					<span className={styles["product-title"]}>{title}</span>
					<span className={styles["product-description"]}>{colors}</span>
					<div className={styles["product-price-block"]}>
						<span className={styles["product-price"]}>{price}</span>
						<span className={styles["product-discount"]}>
							{onsale ? "Con descuento" : "No hay nada!!!!"}
						</span>
					</div>
					<div className={styles["product-tax-policy"]}>
						Incluye impuesto País y percepción AFIP
					</div>
				</div>
			</Link>
		</>
	);
}
