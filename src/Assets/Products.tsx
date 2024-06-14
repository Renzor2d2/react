interface ProductCard {
	id: string | number;
	title: string;
	description: string;
	price: number;
	stock: number;
	images: string[];
	colors: string[];
	onsale: boolean;
}
let prod1: ProductCard = {
	id: "Mark93",
	title: "07",
	description:
		"Immerse yourself in the world of music with the Sony WH-1000XM4 wireless headphones. These over-ear headphones feature industry-leading noise cancellation technology, ensuring a premium listening experience in any environment. The sleek black color adds a touch of elegance. With multiple touch controls, you can easily manage your music playback and calls. The headphones are equipped with a powerful battery that provides hours of listening on a single charge. Whether you're commuting, traveling, or simply enjoying your favorite tunes at home, the Sony WH-1000XM4 delivers unparalleled sound quality and comfort.",
	price: 250000,
	stock: 1,
	images: [
		"https://i.postimg.cc/pVsHPznM/sony1.jpg",
		"https://i.postimg.cc/L58Fz6wW/sony1.webp",
		"https://i.postimg.cc/7ht8XryZ/sony2.jpg",
	],
	colors: ["Black", "Silver"],
	onsale: true,
};
let prod2: ProductCard = {
	id: "Mark94",
	title: "Sony WH-1000XM4",
	description:
		"Immerse yourself in the world of music with the Sony WH-1000XM4 wireless headphones. These over-ear headphones feature industry-leading noise cancellation technology, ensuring a premium listening experience in any environment. The sleek black color adds a touch of elegance. With multiple touch controls, you can easily manage your music playback and calls. The headphones are equipped with a powerful battery that provides hours of listening on a single charge. Whether you're commuting, traveling, or simply enjoying your favorite tunes at home, the Sony WH-1000XM4 delivers unparalleled sound quality and comfort.",
	price: 250000,
	stock: 1,
	images: [
		"https://i.postimg.cc/HxGQcrcp/mock1.jpg",
		"https://i.postimg.cc/Y91Q1tYQ/mock2.jpg",
	],
	colors: ["Black", "Silver"],
	onsale: false,
};
let prod3: ProductCard = {
	id: "Mark95",
	title: "07",
	description:
		"Immerse yourself in the world of music with the Sony WH-1000XM4 wireless headphones. These over-ear headphones feature industry-leading noise cancellation technology, ensuring a premium listening experience in any environment. The sleek black color adds a touch of elegance. With multiple touch controls, you can easily manage your music playback and calls. The headphones are equipped with a powerful battery that provides hours of listening on a single charge. Whether you're commuting, traveling, or simply enjoying your favorite tunes at home, the Sony WH-1000XM4 delivers unparalleled sound quality and comfort.",
	price: 250000,
	stock: 1,
	images: [
		"https://i.postimg.cc/3N278cM8/watch1.jpg",
		"https://i.postimg.cc/VstzWdJx/watch.jpg",
	],
	colors: ["Black", "Silver"],
	onsale: true,
};
let prod4: ProductCard = {
	id: "Mark96",
	title: "07",
	description:
		"Immerse yourself in the world of music with the Sony WH-1000XM4 wireless headphones. These over-ear headphones feature industry-leading noise cancellation technology, ensuring a premium listening experience in any environment. The sleek black color adds a touch of elegance. With multiple touch controls, you can easily manage your music playback and calls. The headphones are equipped with a powerful battery that provides hours of listening on a single charge. Whether you're commuting, traveling, or simply enjoying your favorite tunes at home, the Sony WH-1000XM4 delivers unparalleled sound quality and comfort.",
	price: 250000,
	stock: 1,
	images: [
		"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
		"https://i.postimg.cc/hvQWC348/galaxy2.jpg",
		"https://i.postimg.cc/j55rfSGF/galaxy3.jpg",
	],
	colors: ["Black", "Silver"],
	onsale: false,
};
let prod5: ProductCard = {
	id: "Mark97",
	title: "07",
	description:
		"Immerse yourself in the world of music with the Sony WH-1000XM4 wireless headphones. These over-ear headphones feature industry-leading noise cancellation technology, ensuring a premium listening experience in any environment. The sleek black color adds a touch of elegance. With multiple touch controls, you can easily manage your music playback and calls. The headphones are equipped with a powerful battery that provides hours of listening on a single charge. Whether you're commuting, traveling, or simply enjoying your favorite tunes at home, the Sony WH-1000XM4 delivers unparalleled sound quality and comfort.",
	price: 250000,
	stock: 1,
	images: [
		"https://i.postimg.cc/QM5P5rz3/bose1.jpg",
		"https://i.postimg.cc/JnLF52wB/bose2.jpg",
		"https://i.postimg.cc/wvQGfQH4/bose3.jpg",
	],
	colors: ["Black", "Silver"],
	onsale: true,
};
let prod6: ProductCard = {
	id: "Mark98",
	title: "07",
	description:
		"Immerse yourself in the world of music with the Sony WH-1000XM4 wireless headphones. These over-ear headphones feature industry-leading noise cancellation technology, ensuring a premium listening experience in any environment. The sleek black color adds a touch of elegance. With multiple touch controls, you can easily manage your music playback and calls. The headphones are equipped with a powerful battery that provides hours of listening on a single charge. Whether you're commuting, traveling, or simply enjoying your favorite tunes at home, the Sony WH-1000XM4 delivers unparalleled sound quality and comfort.",
	price: 250000,
	stock: 1,
	images: [
		"https://i.postimg.cc/Y91Q1tYQ/mock2.jpg",
		"https://i.postimg.cc/HxGQcrcp/mock1.jpg",
	],
	colors: ["Black", "Silver"],
	onsale: false,
};
let products = [prod1, prod2, prod4, prod3, prod5, prod6];
export default products;
console.log(products);
