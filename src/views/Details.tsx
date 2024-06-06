import styles from "./Details.module.css";
import Navbar from "../components/Navbar";
import products from "../Assets/Products";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductsCard";

export default function Details() {
	const { id } = useParams();
	const product = products.find((each) => each.id === id);
	const onsale = products.filter((each) => each.onsale);

	if (product) {
		return (
			<>
				<Navbar></Navbar>

				<main>
					<div className={styles["details-container"]}>
						<div id="details" className={styles["columns-container"]}>
							<section className={styles["product-images-block"]}>
								<div className={styles["product-images"]}>
									{product.images.map((each) => (
										<img
											className={styles["mini-img"]}
											src={each}
											alt={product.title}
										/>
									))}
								</div>
								<img
									className={styles["big-img"]}
									id="big-img"
									src={product.images[0]}
									alt="MacBook Pro 13'4"
								/>
							</section>
							<div className={styles["product-description-block"]}>
								<h1 className={styles["product-title"]}>{product.title}</h1>
								<form className={styles["product-selector"]}>
									<fieldset className={styles["product-fieldset"]}>
										<label className={styles["product-label"]} htmlFor="color">
											Color
										</label>
										<select className={styles["product-select"]} id="color">
											{product.colors.map((each) => (
												<option value={each}>{each}</option>
											))}
										</select>
									</fieldset>
								</form>
								<div className={styles["product-description"]}>
									<span className={styles["product-label"]}>Descripción</span>
									<p>{product.description}</p>
								</div>
							</div>
							<div className={styles["product-checkout-block"]}>
								<div className={styles["checkout-container"]}>
									<span className={styles["checkout-total-label"]}>Total:</span>
									<h2 id="price" className={styles["checkout-total-price"]}>
										$750000
									</h2>
									<p className={styles["checkout-description"]}>
										Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
										50711 haciendo la solicitud en AFIP.
									</p>
									<ul className={styles["checkout-policy-list"]}>
										<li>
											<span className={styles["policy-icon"]}>
												<img src="/truck.png" alt="Truck" />
											</span>
											<span className={styles["policy-desc"]}>
												Agrega el producto al carrito para conocer los costos de
												envío
											</span>
										</li>
										<li>
											<span className={styles["policy-icon"]}>
												<img src="/plane.png" alt="Plane" />
											</span>
											<span className={styles["policy-desc"]}>
												Recibí aproximadamente entre 10 y 15 días hábiles,
												seleccionando envío normal
											</span>
										</li>
									</ul>
									<div className={styles["checkout-process"]}>
										<div className={styles["top"]}>
											<input type="number" min="1" defaultValue="1" />
											<button type="button" className={styles["cart-btn"]}>
												Añadir al Carrito
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles["sales-block"]}>
							<h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
							<div
								id="product-container"
								className={styles["product-container"]}
							>
								{onsale.map((each) => (
									<ProductCard
										id={each.id}
										key={each.id}
										title={each.title}
										colors={each.colors}
										price={each.price}
										images={each.images}
										onsale={each.onsale}
									/>
								))}
							</div>
						</div>
					</div>
				</main>
				<Footer></Footer>
			</>
		);
	}
}
