import React, { useEffect, useState } from 'react';
import './App.css';
import DesignDummyData from './utils';
import NavBAr from './NavigationBar/navBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About/About';
import AccountPage from './pages/semiPages/UserAcountPage/AccountPage';
import ProfilePage from './pages/semiPages/UserAcountPage/UserPage/UserPage';

function App() {

  const [productData, setProductData] = useState([]);

  // console.log('poroductItem',productData) //working console
  useEffect(() => {
    getProductData()
  }, [])

  const getProductData = async () => {
    try {
      setProductData(DesignDummyData);
    } catch (error) {
      console.log('this data is not working', error)
    }
  }

  return (
    <>
      <BrowserRouter>
        <NavBAr />
        <Routes>
          <Route path='/' element={<Home data={productData} />} />
          <Route path='/about' element={<About />} />
          <Route path='/your-account' element={<AccountPage />} />
          <Route path='/profilepage' element={<ProfilePage data={productData}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;