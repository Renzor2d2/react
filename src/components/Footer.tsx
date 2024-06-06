import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer>
			<div id="footer" className={styles["footer-container"]}>
				<ul className={styles["footer-ul"]}>
					<li className={styles["footer-main-item"]}>
						<a className={styles["footer-a"]} href="#">
							<p>Ofertas</p>
						</a>
					</li>
					<li className={styles["footer-li"]}>
						<a className={styles["footer-a"]} href="#">
							Garantias
						</a>
					</li>
					<li className={styles["footer-li"]}>
						<a className={styles["footer-a"]} href="#">
							Reclamos
						</a>
					</li>
					<li className={styles["footer-li"]}>
						<a className={styles["footer-a"]} href="#">
							Ofertas
						</a>
					</li>
				</ul>
				<ul className={styles["footer-ul"]}>
					<li className={styles["footer-main-item"]}>
						<a className={styles["footer-a"]} href="#">
							Ofertas
						</a>
					</li>
					<li className={styles["footer-li"]}>
						<a className={styles["footer-a"]} href="#">
							Ofertas
						</a>
					</li>
					<li className={styles["footer-li"]}>
						<a className={styles["footer-a"]} href="#">
							Ofertas
						</a>
					</li>
					<li className={styles["footer-li"]}>
						<a className={styles["footer-a"]} href="#">
							Ofertas
						</a>
					</li>
				</ul>
				<ul className={styles["footer-ul"]}>
					<li className={styles["footer-main-item"]}>
						<a className={styles["footer-a"]} href="#">
							Ofertas
						</a>
					</li>
					<li className={styles["footer-li"]}>
						<a className={styles["footer-a"]} href="#">
							Ofertas
						</a>
					</li>
					<li className={styles["footer-li"]}>
						<a className={styles["footer-a"]} href="#">
							Ofertas
						</a>
					</li>
				</ul>
				<ul className={styles["footer-ul"]}>
					<li className={styles["footer-main-item"]}>
						<a className={styles["footer-a"]} href="#">
							Ofertas
						</a>
					</li>
					<li className={styles["footer-li"]}>
						<a className={styles["footer-a"]} href="#">
							Ofertas
						</a>
					</li>
					<li className={styles["footer-li"]}>
						<a className={styles["footer-a"]} href="#">
							Ofertas
						</a>
					</li>
				</ul>
				<ul className={styles["footer-ul"]}>
					<li className={styles["footer-main-item"]}>
						<a className={styles["footer-a"]} href="#">
							Ofertas
						</a>
					</li>
				</ul>
			</div>
			<div className={styles["footer-copyright"]}>Curso de HTML + CSS 2023</div>
		</footer>
	);
}
