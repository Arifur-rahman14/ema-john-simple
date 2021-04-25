import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    // othoba
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price;
    }

    let shipping = 12.9;
    if (totalPrice > 2500) {
        shipping = 0;
    }
    else if(totalPrice > 100){
        shipping = 4.99;
    }
    if (cart == 0) {
        shipping = 0;
        totalPrice = 0;
    }

    const tax = (totalPrice / 10).toFixed(2);
    
    
    const grandTotalPrice = (totalPrice + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className='cart-main-container'>
            <h3>Order Summary</h3>
            <p>Orderd Items: {cart.length}</p>
            <p>Product Price: {formatNumber(totalPrice)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Government Tax: {tax}</small></p>
            <p>Total Price: {grandTotalPrice}</p>
        </div>
    );
};

export default Cart;