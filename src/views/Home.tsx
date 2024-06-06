import styles from "./Home.module.css";
import Navbar from "../components/Navbar.tsx";
import Hero from "../components/Hero.tsx";
import Footer from "../components/Footer.tsx";
import products from "../Assets/Products.tsx";
import ProductCard from "../components/ProductsCard.tsx";
console.log(products);
export default function Home() {
	return (
		<>
			<Navbar />
			<Hero first={"Tecnologia"} second={"Renovada"} />
			<main>
				<div className={styles["product-container"]} id="products">
					{products.map((item) => (
						<ProductCard
							id={item.id}
							key={item.id}
							title={item.title}
							colors={item.colors}
							price={item.price}
							images={item.images}
							onsale={item.onsale}
						/>
					))}
				</div>
			</main>
			<Footer></Footer>
		</>
	);
}
