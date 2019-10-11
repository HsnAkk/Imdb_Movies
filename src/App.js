import React from 'react';
import Header from './components/Header';
import AllCategories from './components/AllCategories';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div>
        <div className="container">
            <Header />
            <AllCategories />
        </div>
        <Footer />
    </div>
    
  );
}

export default App;
