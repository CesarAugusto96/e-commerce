import { useState, useEffect } from 'react';
import Layout from '../../Layout';
import ProductCard from '../../Components/ProductCard';
import ProductDetails from '../../Components/ProductDetails';


function Home() {
  const [items , setItems] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(data=>setItems(data))
  }, [])

  return (
    <Layout>
      Home
      <div className='grid gap-8 grid-cols-4 w-full max-w-screen-lg'>
      {
        items?.map(item => (
          <ProductCard key={item.id} data={item} />
        ))
      }
      </div>
      <ProductDetails/>
    </Layout>
  )
}

export default Home