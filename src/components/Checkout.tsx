import styles from "./Checkout.module.css";
import { useState, useRef } from "react";

export default function Checkout({ props }) {
	const [quantity, setQuantity] = useState(1);
	const [button, setButton] = useState(false);
	const units = useRef(1);
	type Object = {
		id: string;
	};

	let productsOnCar: Object[] = [{ id: "hola" }];

	const manageCart = () => {
		const cart = localStorage.getItem("cart");
		if (cart) {
			productsOnCar = JSON.parse(cart);
		}

		const one = productsOnCar.some((item) => item.id === props.id);

		if (!one) {
			productsOnCar.push(props);
			setButton(true);
		} else {
			productsOnCar = productsOnCar.filter((each) => each.id !== props.id);

			setButton(false);
		}
		localStorage.setItem("cart", JSON.stringify(productsOnCar));
	};
	// !one
	// 	? productsInStorage.push(props) && setButton(true)
	// 	: (productsInStorage = productsInStorage.filter(
	// 			(each) => each.id !== props.id
	// 	  ));

	return (
		<>
			<div className="w-[100%]">
				<div className={styles["checkout-container"]}>
					<span className={styles["checkout-total-label"]}>Total:</span>
					<h2 id="price" className={styles["checkout-total-price"]}>
						{props.price * quantity}
					</h2>
					<p className={styles["checkout-description"]}>
						Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711
						haciendo la solicitud en AFIP.
					</p>
					<ul className={styles["checkout-policy-list"]}>
						<li>
							<span className={styles["policy-icon"]}>
								<img src="/truck.png" alt="Truck" />
							</span>
							<span className={styles["policy-desc"]}>
								Agrega el producto al carrito para conocer los costos de envío
							</span>
						</li>
						<li>
							<span className={styles["policy-icon"]}>
								<img src="/plane.png" alt="Plane" />
							</span>
							<span className={styles["policy-desc"]}>
								Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando
								envío normal
							</span>
						</li>
					</ul>
					<div className={styles["checkout-process"]}>
						<div className={styles["top"]}>
							<input
								type="number"
								min="1"
								ref={units}
								defaultValue={quantity}
								onChange={() => setQuantity(Number(units.current.value))}
							/>
							<button
								type="button"
								className={button ? styles["remove-cart"] : styles["cart-btn"]}
								onClick={manageCart}
							>
								{button ? "Remove from cart" : "Add to Cart"}
							</button>
						</div>
					</div>
				</div>
			</div>
			;
		</>
	);
}
