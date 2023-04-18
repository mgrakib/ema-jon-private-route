import React, { createContext, useEffect, useState } from 'react';
import { addToDB, getDataFromLocalSotre } from '../FakeData/CommonJs';


export const AuthContextAPI = createContext(null);
const AuthContext = ({ children }) => {

	
    // load products data 
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
	const [user, setUser] = useState('');
    useEffect(() => {
        const loadProducts = async () => {
            const res =await fetch("products.json");
            const data = await res.json();
            setProducts(data);
        }
        loadProducts();
    },[])


     useEffect(() => {
			const storedCart = getDataFromLocalSotre();
			const savedCart = [];
			// step 1: get id of the addedProduct
			for (const id in storedCart) {
				// step 2: get product from products state by using id
				const addedProduct = products.find(
					product => product.id === id
				);
				if (addedProduct) {
					// step 3: add quantity
					const quantity = storedCart[id];
					addedProduct.quantity = quantity;
					// step 4: add the added product to the saved cart
					savedCart.push(addedProduct);
				}
				
			}
			// step 5: set the cart
			setCart(savedCart);
     }, [products]);
    
    
    // add to cart data
    const handelAddToCart = (product) => {
		// cart.push(product); '
		let newCart = [];
		// const newCart = [...cart, product];
		// if product doesn't exist in the cart, then set quantity = 1
		// if exist update quantity by 1
		const exists = cart.find(pd => pd.id === product.id);
		if (!exists) {
			product.quantity = 1;
			newCart = [...cart, product];
		} else {
			exists.quantity = exists.quantity + 1;
			const remaining = cart.filter(pd => pd.id !== product.id);
			newCart = [...remaining, exists];
		}

		setCart(newCart);
		addToDB(product.id);
	}

	const handelClearCart = () => {
		setCart([]);
		localStorage.removeItem("product-id");
	}

	const handelDeleateProduct = (product) => {
		const remainingProduct = cart.filter(pd => pd.id !== product.id);
		setCart(remainingProduct);
	}

	

	const AuthInfo = {
		user,
		products,
		handelAddToCart,
		cart,
		handelClearCart,
		handelDeleateProduct,
	};
    return (
        <AuthContextAPI.Provider value={AuthInfo}>
            {children}
        </AuthContextAPI.Provider >
    );
};

export default AuthContext;