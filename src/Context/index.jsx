import { createContext, useContext, useState , useEffect } from "react";

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
    
    //Shopping Cart - Order
    const [ order, setOrder ] = useState([])

    //Get Products
    const [ items , setItems ] = useState(null)
    const [ filteredItems, setFilteredItems ] = useState(null)

    //Get Products by title
    const [ searchByTitle, setSearchByTitle ] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setItems(data))
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])

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
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

