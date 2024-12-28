import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowerRouter, Routes, Route, BrowserRouter} from 'react-router-dom';
import Shop from './pages/Shop';
import Category from './pages/Category';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png';
 
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Category banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<Category banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Category banner={kid_banner} category="kid"/>}/>
        <Route path="product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
