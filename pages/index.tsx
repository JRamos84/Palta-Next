import Header from '@components/Header/Header'
import ProductList from '@components/ProductList/ProductList'
import React, { useEffect, useState } from 'react'



const HomePage = () => {
  const [productList , setProductList] = useState([])
  useEffect(()=>{
    window
      .fetch('/api/avo')
      .then((response)=> response.json())
      .then(({data,length})=>{setProductList(data)})
  },[])

  return (
    <div>
  <Header/>
  <ProductList products={productList}/>

    </div>
  )
}

export default HomePage
