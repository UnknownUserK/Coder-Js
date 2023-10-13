import './App.css';
import Header from './Components/Header.js';
import ProductList from './Components/ProductList';
import CartList from './Components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://image.invaluable.com/housePhotos/artcurial/30/726930/H1118-L294256429_original.jpg',
      name: 'Ferrari 348 TS',
      category: 'Manual',
      seller: 'Ferrari',
      price: 80000
    },
    {
      url: 'https://hips.hearstapps.com/hmg-prod/images/20my-sti-s-w1-1573508899.jpg?crop=0.537xw:0.498xh;0.406xw,0.139xh&resize=1200:*',
      name: 'Subaru WRX STI',
      category: 'Manual',
      seller: 'Subaru',
      price: 38000
    },
    {
      url: 'https://www.carsflow.com/wp-content/uploads/2021/11/w-motors-lykan-hypersport.gif',
      name: 'W Motors Lykan Hypersport',
      category: 'Manual',
      seller: 'W Motors',
      price: 34000000
    },
    {
      url: 'https://th.bing.com/th/id/OIP.lGLuTtJX6EkAQy-MzROALwHaEK?pid=ImgDet&rs=1',
      name: 'Nissan GTR 2014',
      category: 'Automatico',
      seller: 'Nissan',
      price: 70000
    },
    {
      url: 'https://th.bing.com/th/id/R.737b5463ad7720d062a396e1f13002c0?rik=zMA5bbZcSxF1bg&pid=ImgRaw&r=0',
      name: 'BMW i8',
      category: 'Automatico',
      seller: 'BMW',
      price: 70000
    },
    {
      url: 'https://media.autoexpress.co.uk/image/private/s--tpoDXjeg--/f_auto,t_content-image-full-desktop@1/v1668529068/autoexpress/2022/11/BMW%203%20Series%20UK%202022.jpg',
      name: 'BMW 3 Series',
      category: 'Automatico',
      seller: 'BMW',
      price: 45000
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;