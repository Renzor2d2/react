interface FooterList {
	opts: string[];
	opts2: string[];
	opts3: string[];
	opts4: string[];
	opts5: string[];
}

export let elementsFooter: FooterList = {
	opts: ["Ofertas", "Laptops", "Audio", "Auticulares"],
	opts2: ["Como comprar", "Formas de pago", "Envios", "Devoluciones"],
	opts3: ["Costos y Tarifas", "Impuestos", "Facturacion"],
	opts4: ["Mis pedidos", "Pedir nuevamente", "Lista de deseos"],
	opts5: ["Garantias"],
};

// export const settings: FooterList[] = [
// 	{ mainText: "Ofertas", opts: ["Laptops", "Audio", "Auticulares"] },
// 	{
// 		mainText: "Como comprar",
// 		opts: ["Formas de pago", "Envios", "Devoluciones"],
// 	},
// 	{ mainText: "Costos y tarifas", opts: ["Impuestos", "Facturacion"] },
// 	{ mainText: "Mis pedidos", opts: ["Pedir nuevamente", "Lista de deseos"] },
// 	{ mainText: "Garantias", opts: [] },
// ];

export default function FooterButton({ opts }) {
	return (
		<>
			<li className="font-bold pb-1.5">
				<a className="text-white decoration-none" href="#">
					<p>{opts}</p>
				</a>
			</li>
			;
		</>
	);
}

// export default function FooterButton({ opts }) {
// 	return (
// 		<>
// 			<li className="font-bold pb-1.5">
// 				<a className="text-white decoration-none" href="#">
// 					<p>{opts}</p>
// 				</a>
// 			</li>
// 			;
// 		</>
// 	);
// }
