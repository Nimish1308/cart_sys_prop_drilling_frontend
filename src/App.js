import logo from './logo.svg';
import './App.css';
import 'mdb-ui-kit/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';

import Navigation from './pages/Navigation';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import CartPage from './pages/CartPage';

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        toast.warn(`Product Already Existed! Just Inc Quantity`)
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )

      }
      toast.success('Product Added To Cart')
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const increaseQty = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
    toast.success('Quantity Increase')
  }

  const decreaseQty = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0)

    )
    toast.error('Quantity Decrease')
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    toast.error('Product Removed From Cart')
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
      <Navigation cart={cart} />
      <Routes>
        <Route path='/' element={<Home addToCart={addToCart} />} />
        <Route path='/cartpage' element={<CartPage cart={cart} increaseQty={increaseQty} decreaseQty={decreaseQty} removeFromCart={removeFromCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
