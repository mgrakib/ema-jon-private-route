/** @format */

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main";
import AuthContext from "./components/AuthContext";
import Order from "./components/Order";
import OrderReview from "./components/OrderReview";
import Inventory from "./components/Inventory";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductCheckout from "./components/ProductCheckout";
import PrivatePage from "./components/PrivatePage/PrivatePage";
import ProductCheckPayment from "./components/ProductCheckPayment";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <p>Tis is error</p>,
		children: [
			{
				path: "/",
				element: <Order />,
			},
			{
				path: "/order-review",
				element: <OrderReview />,
			},
			{
				path: "/inventroy",
				element: <Inventory />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/singin",
				element: <Register />,
			},
			{
				path: "/product-checkout",
				element: (
					<PrivatePage>
						<ProductCheckPayment></ProductCheckPayment>
					</PrivatePage>
				),
			},
		],
	},
]);



ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthContext>
			<RouterProvider router={router} />
		</AuthContext>
	</React.StrictMode>
);
