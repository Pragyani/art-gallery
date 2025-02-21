/**React Dependencies */
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

/**Internal Dependencies */
import { ThemeProvider } from './theme-context/theme-context';
import MainContent from './MainContent';
import './App.css';
import NavBAr from './NavigationBar/navBar';
import { useSelector } from 'react-redux';


function App() {

  const productData = useSelector(state => state.productDetailsSlice.productList);
  console.log('app data', productData);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavBAr />
        <MainContent productData={productData} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
