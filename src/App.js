import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Packages from './pages/Packages';


function App() {
  return (
    <div className='app'>
    <Header />
    <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/about' Component={AboutUs} />
      <Route path='/packages' Component={Packages} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;