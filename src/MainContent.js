/**React Dependencies */
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

/**Interna; Dependecies */
import Sidebar from './NavigationBar/NavigationSideBar/sideBar';
import Home from './pages/Home/home';
import About from './pages/About/About';
import AccountPage from './pages/semiPages/UserAcountPage/AccountPage';
import ProfilePage from './pages/semiPages/UserAcountPage/UserPage/UserPage';
import SavedPost from './pages/SavedPost/SavedPost';
import CartPage from './pages/CARTPAGE/CartPage';
import PopularPost from './pages/popularPostPage/PopularPost';

function MainContent({ productData }) {
  const location = useLocation();

  const showSidebar = location.pathname !== '/profilepage';

  return (
    <div className="main-content">
      {showSidebar && <Sidebar />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home data={productData} />} />
          <Route path="/about" element={<About />} />
          <Route path="/your-account" element={<AccountPage />} />
          <Route path="/profilepage" element={<ProfilePage data={productData} />} />
          <Route path="/saved-post" element={<SavedPost />} />
          <Route path="/add-to-cart" element={<CartPage />} />
          <Route path="/popular-page" element={<PopularPost />} />
        </Routes>
      </div>
    </div>
  );
}
export default MainContent;