import React, { useState } from 'react';

const Product = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Air Jordan 4 "Bred"', price: 249.99, description: " Red/Black ", image: "https://cdn.flightclub.com/TEMPLATE/139813/1.jpg" }, 
    { id: 2, name: 'Yeezy 350 "Onyx"', price: 410.99, description: " Black ", image: "https://cdn.flightclub.com/TEMPLATE/296515/2.jpg" },
    { id: 3, name: 'Off White SB "University Red"', price: 121.99, description: " Red ", image: "https://images.stockx.com/images/Nike-Dunk-Low-Off-White-University-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606321824"},
    { id: 4, name: 'Kobe 6 "Pronto"', price: 221.99, description: " Red/Green ", image: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/dd0b8724-bb50-4cd7-917b-9527e9a6677a/kobe-6-protro-reverse-launch-details.jpg" },
    { id: 5, name: 'Adidas Samba', price: 109.99, description: " Black/White ", image: "https://images.stockx.com/images/adidas-Samba-Vegan-White-Gum-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1658152455&q=60" },
    { id: 6, name: 'Yeezy 350 "Zebra"', price: 221.99, description: " White/Red/Black ", image: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/089/144/518/original/1213726_01.jpg.jpeg?action=crop&width=750" },
     { id: 7, name: 'Air Force One "Supreme x CDG"', price: 99.99, description: " Black/White ", image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWEhgVFRUZGBgZHBgYGhgaHBkZHRoYGhgZHRoYHBgcIS4lHR4rHxgYJzgmLS8xNTU1GiU7Qjs1Py43NTEBDAwMBgYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwYCBAUBBwj/xAA8EAACAgEDAgMGAgkEAQUBAAABAgARAwQSITFBBVFhBhMicYGRofAHFDJCUmKxwdEVI3Lh8TNzgpK0JP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7NERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREgzZwvHU+X+TAkdgBZmGHOrXR5HBHQj6TULM3X7DoJHl01kOp2uP3h3HkfMQOrE1tLmLAg8MOv9jNmAiIgIiaebV0aXmupgbkSDTZw62PMg/MSeAiIgIiICIiAkWXMF6/aSzm6sWx/PQQJTr1vp+M2cWQMLBsSleK64pkAnU8J1rcMOQeo84FliRYsoYWD9O4+clgJrZ89cDr5zzJnvgfn1mhh1yPkyIu4tjKhztIW2XcFDdCQKuuliBINQ6td2O4P9vKbmHVBvT89D5Gabrci2UD6wO1E53h+r3CmBBBIBNci+On950YCIiAiJ4TA9nhM1curAB2mz0+v/ma7qzD4jfnxx8q8oEup1RDBV73Z9BV195CE5+czPFfCSSasVx6n0mLuQwtuKPwgWSbFEVzxzxXeBqeM6VsuDJixZDjd1pcgv4TY+IV36xi17frD4ShKoiPvvqXLgrXpsHPrM9a7bASdg34hXchsqKQT0Fgn79ptLjUXx1/x59/+4HP12pZMuNlP7W4MOzAVV/nvOtg1oYc/CfXp958b1ntdlTVv74qcZfMEo8oqHbsHHJO1ePM3cunhXjKOisrAqQCD6QLwHB6ETF8qjqR/WcL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A42s8GLm01GXGR0AKsoPPJDC26jgnt85F/pOR8TYs7JlDBkJClNyFaAZbYbqPJBA7gDpO9ED5F4d+jrUY3LgbChOxkzbt4+IfFeMbf3SCATZ6dxYcmh8SRUVMl0CG3r70ktR/b+Cq55N9ukvkQPk+twanJmxafLkVwbBOx0DGjuBpCUbaTySBbCiZfsGnRXd1HL7N1Gwdq0tDtxxxO1IziU9VH2EDQuJuHTL6j5GRNpPI/cfLygQQfWSHTN5D6H19R5TE42H7p/A9/T0gY3+bM93ep/CYMa68devHQ+vb1jd/f8ACBmGPmfw/wATGz5n58f4i/T81PN3pAEn+I/h/ieH5n7/AOJ4T6ef4TwmB4QPzz/WR5XkWp12NP23Rf8AkwH4H6/ac5/F1bjEmTMf5Eav/s1D7XA3MhPynOfON9A8jy7GZjw3W5/2guBPIG3r1bt9AJ2fDPZ3Hiok7m9eB9oEnhZcqCZ1wJ4qgdJlAREQEREBERAREQEREBERAREQEREBERAREQEREBERASM4weoB+gkkQIP1dP4V7dh26faY/qafwDpX0Jsj7zZiBqfqOO7282Wuz1Iq+vWuPlMP9LwUB7pCBwAVBA+QPAm9EDXxaPGv7GNF/wCKqP6CbERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/9k=" },
    { id: 8, name: 'Nike Goadome', price: 460.99, description: " Red ", image: "https://www.supremecommunity.com/u/season/add/202101146f24f0ae85b04aa4b8d23195b72191e9.jpg" },
    { id: 9, name: 'Air Jordan 8 "Bugs Bunny"', price: 340.99, description: " White/Red ", image: "https://image.goat.com/attachments/product_template_additional_pictures/images/081/568/215/medium/34202_03.jpg.jpeg?1669910874" },
    { id: 10, name: 'OG Vans "Comme Des Garcons"', price: 296.99, description: " Black/White ", image: "https://i.pinimg.com/736x/fd/5d/c4/fd5dc4028ba33b2928509c3b44bd1984.jpg"},
  ];
    // Add more product data as needed
  
  const handleSearch = () => {
    const [minPrice, maxPrice] = searchQuery.split('-').map(parseFloat);
    const filtered = products.filter(product => {
      return product.price >= minPrice && product.price <= maxPrice;
    });
    setFilteredProducts(filtered);
  };

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="product">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter price range"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {filteredProducts.length > 0 ? (
        
          console.log(filteredProducts),
  
        filteredProducts.map(product =>
          
          (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p> {product.description}</p>
            <img src={product.image}/>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))
      ) : (
     products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p> {product.description}</p>
            <img src={product.image}/>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))
      )}
      <h2 className = "carttext">Cart</h2>
      {cart.length > 0 ? (
        <div>
          {cart.map(item => (
            <div className= "testcarting" key={item.id}>
              <h3 className="testcart">{item.name}</h3>
              <p> {item.description}</p>
              <p className = "testcart1">Quantity: {item.quantity}</p>
              <image src={item.image} />
              <p className = "testcart2">Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No items in cart</p>
      )}
    </div>
  );
};

export default Product;