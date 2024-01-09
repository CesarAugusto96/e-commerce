import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import React from 'react';
import Layout from '../../Layout';

const MyOrder = () => {
  const context = useContext(ShoppingCartContext) 

  return (
    <Layout>
      MyOrder
      <div className='flex flex-col w-80'>
            {
                context.order?.slice(-1)[0].products.map(product => (
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageURL={product.image}
                        price={product.price}
                        />
                ))
            }
            </div>
    </Layout>
  )
}

export default MyOrder