import { useContext } from 'react';
import Layout from '../../Layout';
import ProductCard from '../../Components/ProductCard';
import ProductDetails from '../../Components/ProductDetails';
import { ShoppingCartContext } from '../../Context';


function Home() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'> All Products </h1>
      </div>
      <input 
        type='text' 
        placeholder='Search a product'
        className='rounded-lg border-black w-80 p-4 mb-4 focus:outline-none'
        onChange= {(event) =>context.setSearchByTitle(event.target.value)} />
      <div className='grid gap-4 cols-4 w-full max-w-screen-lg'>
      {
        context.items?.map(item => (
          <ProductCard key={item.id} data={item} />
        ))
      }
      </div>
      <ProductDetails/>
    </Layout>
  )
}

export default Home