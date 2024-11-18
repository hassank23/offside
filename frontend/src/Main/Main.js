import React from 'react';
import Card from 'react-bootstrap/Card';
import MyNavbar from '../Components/Navbar/Navbar';
import Header from "../Components/Header/Header"
import LanguageSwitcher from '../Components/Lang/LanguageSwitcher';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import NewsPage from '../Pages/NewsPage/NewsPage.js';
function Main() {
  return (
    
    <Card style={{ width: 'auto' }}>
      <Card.Body>
        <LanguageSwitcher/>
        <Header/>
        <MyNavbar/>
 
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />

        </Routes>

      </Card.Body>
    </Card>
  );
}

export default Main;