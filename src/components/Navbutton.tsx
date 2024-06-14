import styles from "./Navbutton.module.css";
import { Link } from "react-router-dom";
interface NavButton {
	title: string;
	linkTo: string;
}

export const NavList: NavButton[] = [
	{ title: "Ofertas de la semana", linkTo: "/details" },
	{ title: "Mis favoritos", linkTo: "/Favorites" },
	{ title: "Marcas", linkTo: "/Taxs" },
	{ title: "Contactos", linkTo: "/Contacts" },
	{ title: "Garantia", linkTo: "/Warranty" },
];

export default function NavbarButton({ title, link }) {
	return (
		<>
			<li className="w-[20%] flex justify-around">
				<Link className={styles["nav-a"]} to={link}>
					{title}
				</Link>
			</li>
		</>
	);
}
