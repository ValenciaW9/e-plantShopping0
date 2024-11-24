import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './path/to/CartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeItem({ name: item.name }));
    };

    const handleQuantityChange = (newQuantity) => {
        dispatch(updateQuantity({ name: item.name, quantity: newQuantity }));
    };

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
 
  };

  const handleContinueShopping = (e) => {
   
  };



  const handleIncrement = (item) => {
  };

  const handleDecrement = (item) => {
   
  };

  const handleRemove = (item) => {
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, addItem } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleIncrement = (item) => {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        } else {
            dispatch(removeItem({ name: item.name }));
        }
    };

    const handleRemove = (item) => {
        dispatch(removeItem({ name: item.name }));
    };

    const handleContinueShopping = () => {
        onContinueShopping(); // Call the function passed from the parent component
    };

    return (
        <div className="cart-container">
            <h2>Total Cart Amount: ${cart.reduce((total, item) => total + (item.quantity * parseFloat(item.cost.replace('$', ''))), 0).toFixed(2)}</h2>
            {cart.map(item => (
                <div className="cart-item" key={item.name}>
                    <img src={item.image} alt={item.name} />
                    <div>{item.name}</div>
                    <div>{item.cost}</div>
                    <div>
                        <button onClick={() => handleDecrement(item)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleIncrement(item)}>+</button>
                    </div>
                    <button onClick={() => handleRemove(item)}>Remove</button>
                </div>
            ))}
            <button onClick={handleContinueShopping}>Continue Shopping</button>
        </div>
    );
};

export default CartItem;
