import { createContext, useContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    //Shopping Cart Increment quantity
    const [count, setCount] = useState(0);

    //Product Detail Open/Close
    const [ isProductDetailsOpen, setIsProductDetailsOpen ] = useState(false)
    const openProductDetails = () => setIsProductDetailsOpen(true)
    const closeProductDetails = () => setIsProductDetailsOpen(false)
    
    //Checkout Side Menu
    const [ isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen ] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //Product Detail Show Product
    const [productToShow, setProductToShow ] = useState({title: "",
    price: "",
    description: "",
    image: [],
});

    //Shopping Cart Add Products to cart
    const [ cartProducts, setCartProducts ] = useState([])
    
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetails,
            closeProductDetails,
            isProductDetailsOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

