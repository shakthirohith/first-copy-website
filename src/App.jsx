import React, { useState } from 'react';
import './App.css';
import LoginPage from './LoginPage'; // Import LoginPage component

// Import the images with lowercase "p"
import Product1Image from './assets/product 1.jpg';
import Product2Image from './assets/product 2.jpg';
import Product3Image from './assets/product 3.jpg';
import Product4Image from './assets/product 4.jpg';
import Product5Image from './assets/product 5.jpg';
import Product6Image from './assets/product 6.jpg';
import Product7Image from './assets/product 7.jpg';
import Product8Image from './assets/product 8.jpg';
import Product9Image from './assets/product 9.jpg';
import Product10Image from './assets/product 10.jpg';
import Product11Image from './assets/product 11.jpg';
import Product12Image from './assets/product 12.jpg';
import Product13Image from './assets/product 13.jpg';
import Product14Image from './assets/product 14.jpg';
import Product15Image from './assets/product 15.jpg';

function App() {
  const [count, setCount] = useState(0);
  const [showLoginPage, setShowLoginPage] = useState(false); // State to control login page visibility

  // Sample product data (name, price, image, description)
  const products = [
    { name: 'Smart tv', price: '$20', image: Product1Image, description: 'Description of Product 1.' },
    { name: 'iPhone-14', price: '$25', image: Product2Image, description: 'Description of Product 2.' },
    { name: 'Washing Machine', price: '$30', image: Product3Image, description: 'Description of Product 3.' },
    { name: 'Rolex', price: '$35', image: Product4Image, description: 'Description of Product 4.' },
    { name: 'Suit', price: '$40', image: Product5Image, description: 'Description of Product 5.' },
    { name: 'MakeUp Kit', price: '$45', image: Product6Image, description: 'Description of Product 6.' },
    { name: 'Shoes', price: '$50', image: Product7Image, description: 'Description of Product 7.' },
    { name: 'Volley Ball', price: '$55', image: Product8Image, description: 'Description of Product 8.' },
    { name: 'Basket Ball', price: '$60', image: Product9Image, description: 'Description of Product 9.' },
    { name: 'Foot Ball', price: '$65', image: Product10Image, description: 'Description of Product 10.' },
    { name: 'KeyBoard', price: '$70', image: Product11Image, description: 'Description of Product 11.' },
    { name: 'Hoddie', price: '$75', image: Product12Image, description: 'Description of Product 12.' },
    { name: 'Laptop', price: '$80', image: Product13Image, description: 'Description of Product 13.' },
    { name: 'Samsung', price: '$85', image: Product14Image, description: 'Description of Product 14.' },
    { name: 'Smart Watch', price: '$90', image: Product15Image, description: 'Description of Product 15.' },
  ];

  // Function to toggle login page visibility
  const toggleLoginPage = () => {
    setShowLoginPage(!showLoginPage);
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><button onClick={toggleLoginPage}>Login</button></li> {/* Button to toggle login page */}
            <li><a href="#signup">Signup</a></li>
            <li><a href="#search">Search</a></li>
          </ul>
        </nav>
      </header>
      <main>
        {showLoginPage ? <LoginPage /> : (
          <>
            <section id="about">
              <div className="about-section">
                <h1>Welcome to our First Copy Products Store</h1>
                <p>Discover high-quality first copy products at affordable prices.</p>
              </div>
            </section>
            <section id="products">
              <div className="product-grid">
                {products.map((product, index) => (
                  <div className="product-card" key={index}>
                    <img src={product.image} alt={product.name} style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
                    <div className="product-info">
                      <h2>{product.name}</h2>
                      <p>{product.price}</p>
                      <p>{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
      <footer>
        <p>&copy; 2024 First Copy Store. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
