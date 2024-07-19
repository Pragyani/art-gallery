import React, { useEffect, useState } from 'react';
import './App.css';
import DesignDummyData from './utils';
import NavBAr from './NavigationBar/navBar';
import ProductCardList from './ProductCard/productCardList';

function App() {

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductData()
  }, [])

  const getProductData = async () => {
    try {
      setProductData(DesignDummyData)
      // console.log('responseData', DesignDummyData)
    } catch (error) {
      console.log('this data is not working', error)
    }

  }

  return (
    <>
      <NavBAr />
      <ProductCardList data={productData} />
    </>
  );
}

export default App;
