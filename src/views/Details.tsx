import styles from "./Details.module.css";
import Navbar from "../components/Navbar";
import products from "../Assets/Products";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductsCard";
import Thumbs from "../components/Thumbs.tsx";
import Description from "../components/Description.tsx";
import Checkout from "../components/Checkout.tsx";
export default function Details() {
	const { id } = useParams();
	const product = products.find((each) => each.id === id);
	const onsale = products.filter((each) => each.onsale);

	if (product) {
		return (
			<>
				<Navbar></Navbar>
				<main>
					<div className="w-[100%] ">
						<div id="details" className=" sm:grid grid-cols-3">
							<Thumbs props={product} />
							<Description props={product} />
							<Checkout props={product} />
						</div>
						<div
							className="w-[100%] 
            sm:flex flex-col items-center"
						>
							<h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
							<div id="product-container" className="sm:grid grid-cols-3 ">
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
