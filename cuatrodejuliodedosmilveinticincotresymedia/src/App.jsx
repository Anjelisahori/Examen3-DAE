import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CardList from './components/CardList';
import ItemList from './components/ItemList';
import ContactForm from './components/ContactForm';
import OfferCarousel from './components/OfferCarousel';  
import './App.css';  

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <OfferCarousel />  
            <CardList />    
          </>
        } />
        <Route path="/items" element={<ItemList />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;
