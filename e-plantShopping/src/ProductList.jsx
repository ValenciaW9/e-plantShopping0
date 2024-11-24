import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const ProductList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const plantsArray = [
        // Your plant data here
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    const getQuantity = (name) => {
        const item = cartItems.find(item => item.name === name);
        return item ? item.quantity : 0;
    };

    return (
        <div>
            {plantsArray.map((category, index) => (
                <div key={index}>
                    <h1>{category.category}</h1>
                    <div className="product-list">
                        {category.plants.map((plant, plantIndex) => (
                            <div className="product-card" key={plantIndex}>
                                <img className="product-image" src={plant.image} alt={plant.name} />
                                <div className="product-title">{plant.name}</div>
                                <div className="product-quantity">In Cart: {getQuantity(plant.name)}</div>
                                <button className="product-button" onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
