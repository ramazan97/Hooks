import React, { createContext, useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, ListGroup } from "react-bootstrap";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(newCartItems);
  };

  const total = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

function Cart() {
  const { cartItems, removeFromCart, total } = useContext(CartContext);

  return (
    <Container>
      <h2>Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty</p>}
      <ListGroup>
        {cartItems.map((item) => (
          <ListGroup.Item key={item.id}>
            <div className="d-flex justify-content-between">
              <div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
              <Button variant="danger" onClick={() => removeFromCart(item)}>
                Remove
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <p>Total: {total}</p>
    </Container>
  );
}

function ProductList() {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  return (
    <Container>
      <h2>Products</h2>
      {products.map((product) => (
        <div className="d-flex justify-content-between" key={product.id}>
          <div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
          <Button variant="success" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </div>
      ))}
    </Container>
  );
}

function Checkout() {
  const { cartItems, total } = useContext(CartContext);

  return (
    <Container>
      <h2>Checkout</h2>
      <ListGroup>
        {cartItems.map((item) => (
          <ListGroup.Item key={item.id}>
            <div className="d-flex justify-content-between">
              <div>{item.name}</div>
              <div>{item.price}</div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <p>Total: {total}</p>
      <Button variant="primary">Pay Now</Button>
    </Container>
  );
}

function App() {
  return (
    <CartProvider>
      <Cart />
      <ProductList />
      <Checkout />
    </CartProvider>
  );
}

export default App

// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   const removeFromCart = (item) => {
//     const newCartItems = cartItems.filter(
//       (cartItem) => cartItem.id !== item.id
//     );
//     setCartItems(newCartItems);
//   };

//   const total = cartItems.reduce((total, item) => total + item.price, 0);

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, total }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// function Cart() {
//   const { cartItems, removeFromCart, total } = useContext(CartContext);

//   return (
//     <div>
//       <h2>Cart</h2>
//       {cartItems.length === 0 && <p>Your cart is empty</p>}
//       {cartItems.map((item) => (
//         <div key={item.id}>
//           <h3>{item.name}</h3>
//           <p>{item.price}</p>
//           <button onClick={() => removeFromCart(item)}>Remove</button>
//         </div>
//       ))}
//       <p>Total: {total}</p>
//     </div>
//   );
// }

// function ProductList() {
//   const { addToCart } = useContext(CartContext);

//   const products = [
//     { id: 1, name: "Product 1", price: 10 },
//     { id: 2, name: "Product 2", price: 20 },
//     { id: 3, name: "Product 3", price: 30 },
//   ];

//   return (
//     <div>
//       <h2>Products</h2>
//       {products.map((product) => (
//         <div key={product.id}>
//           <h3>{product.name}</h3>
//           <p>{product.price}</p>
//           <button onClick={() => addToCart(product)}>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// function Checkout() {
//   const { cartItems, total } = useContext(CartContext);

//   return (
//     <div>
//       <h2>Checkout</h2>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id}>
//             {item.name}: {item.price}
//           </li>
//         ))}
//       </ul>
//       <p>Total: {total}</p>
//       <button>Pay Now</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <CartProvider>
//       <Cart />
//       <ProductList />
//       <Checkout />
//     </CartProvider>
//   );
// }

// export default App;
