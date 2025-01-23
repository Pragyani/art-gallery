/**React Dependencies */
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

/**Internal Dependencies */
import { ThemeProvider } from './theme-context/theme-context';
import MainContent from './MainContent';
import './App.css';
import DesignDummyData from './utils';
import NavBAr from './NavigationBar/navBar';


function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    try {
      setProductData(DesignDummyData);
    } catch (error) {
      console.log('this data is not working', error);
    }
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavBAr />
        <MainContent productData={productData} /> {/* Pass productData to MainContent */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
