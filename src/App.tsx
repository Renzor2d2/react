// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import styles from "./App.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home.tsx";
import Details from "./views/Details.tsx";
import Cart from "./views/Cart.tsx";
import NotFound from "./views/NotFound.tsx";

function App() {
	const browserRouter = createBrowserRouter([
		{ path: "/", element: <Home /> },
		{ path: "/cart", element: <Cart /> },
		{ path: "/details/:id", element: <Details /> },
		{ path: "/*", element: <NotFound /> },
	]);
	return (
		<>
			<RouterProvider router={browserRouter} />
		</>
	);
}

export default App;
