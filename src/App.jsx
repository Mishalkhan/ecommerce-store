import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ShoppingCart from './pages/ShoppingCart'
import Shop from './pages/Shop'
import Phones from './pages/Phones'
import Watches from './pages/Watches'
import Cases from './pages/Cases'
import ProductDetail from './pages/ProductDetail'
import ScrollToTop from './components/ScrollToTop'


const App = () => {
  return (
      <div>
      <ScrollToTop/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/phones' element={<Phones/>}></Route>
      <Route path='/cases' element={<Cases/>}></Route>
      <Route path='/watches' element={<Watches/>}></Route>
      <Route path='/cart' element={<ShoppingCart/>}></Route>
      <Route path='/product/:id' element={<ProductDetail/>}></Route>
      </Routes>
      </div>
  )
}

export default App
