import React, { useState } from 'react';
import backgroundImage from 'C:/Users/Personal/Downloads/app/public/background.jpg';
import applogo from 'C:/Users/Personal/Downloads/app/public/kfc4.jpeg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };


  const menu = [
    { id: 1, name: 'DRUMSTICKS', price: 18000, image: 'public/drumsticks.jpg' },
    { id: 2, name: 'BURGER', price: 16000, image: 'public/burger.jpg'},
    { id: 3, name: 'WINGS', price: 22000, image: 'public/wings.jpg' },
    { id: 4, name: 'FRIES', price: 7000, image:'public/fries.jpg' },
    { id: 5, name: 'Bucket', price: 55000, image: 'public/bucket.jpg'},
    { id: 6, name: 'Juice', price: 8000, image: 'public/juice.jpg'},
    { id: 7, name: 'SPECIAL', price: 18000, image: 'public/LT3.jpg' },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart=(item)=>{
    const newItems=cart.filter((it)=>it.id!==item.id);
    setCart(newItems);
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" />
        <img src= {applogo} className="app logo" alt=" logo app" />
      </div>
      <h1>TUKUWE YO KI DEAR</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          ORDER NUMBER
        </button>
        <p>TOTAL ORDERS {count}</p>

        {/* Display the menu items */}
        <ul>
          {menu.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              {item.name} - ${item.price}
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Display the shopping cart */}
      <div className="cart">
        <h2>BAG</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - SHS{item.price}
              <button onClick={() => removeFromBag(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: SHS{cart.reduce((total, item) => total + item.price, 0)}</p>
        {/* 
          Note: Do not use <Link> here, as it's not intended for external navigation.
          If you need to navigate to another route within your app, use <NavLink> or <Redirect> components.
        */}
        <span>View Bag</span>
      </div>

      <p className="read-the-docs">MADE BY LIAM </p>
    </>
  );
}

export default App;
