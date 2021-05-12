import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImg from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlace, setOrderPlace] = useState(false);

    const handlePlaceOrder = () => {
        console.log("jjjjj");
        setCart([]);
        setOrderPlace(true);
        processOrder();
    }

    const handleRemoveProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        // console.log(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
        
        
    }, []);

    let thankYou;
    if (orderPlace) {
        thankYou = <img src={happyImg} alt="" />;
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        cart.map(pd => <ReviewItem
                            key={pd.key}
                            handleRemoveProduct={handleRemoveProduct}
                            product={pd}></ReviewItem>)
                    }
                    
                        {thankYou}
                                
            </div> 
                <div className='cart-container'>
                    <Cart cart={cart}>
                        <button className="main-button" onClick={handlePlaceOrder}>Place Order</button>
                    </Cart>
                </div>
        </div>
    );
};

export default Review;