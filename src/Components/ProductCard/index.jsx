import { useContext } from 'react';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from "../../Context";

const ProductCard = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetails) => {
        context.openProductDetails()
        context.setProductToShow(productDetails)
    }
    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetails()
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;
        
        if (isInCart) {
            return (
                <button 
                    className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
                    <CheckIcon className="h-6 w-6 text-white"/>
                </button>
            )
        } else {
            return (
                <button 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={(event) => addProductsToCart(event, data.data)}>
                    <PlusIcon className="h-6 w-6 text-black"/>
                </button>
            )
        }
    }

    return (
        <div 
            className="bg-white cursor-pointer w-56 h-60 "
            onClick={() => showProduct(data.data)}>
            <figure className="relative mb-2 w-full h-4/5 ">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    {data.data.category}
                </span>
                <img  className="w-full h-full object-cover rounded-lg"
                    src={data.data.image} 
                    alt={data.data.title} />
                    {renderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between items-center">
                <span className="text-sm font-light">
                    {data.data.title}
                </span>
                <span className="text-sm font-medium">
                    ${data.data.price}
                </span>
            </p>
        </div>
    );
}

export default ProductCard