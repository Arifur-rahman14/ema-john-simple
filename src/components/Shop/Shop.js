import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0,20);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] =useState([]);
     useEffect(() => {
         const savedCart = getDatabaseCart();
         const productKeys = Object.keys(savedCart);
         const previousCart = productKeys.map( eixstingKey => {
           const product = fakeData.find( pd => pd.key === eixstingKey);
           product.quantity = savedCart[eixstingKey];
           return product; 
         })
         setCart(previousCart);
     },[])

    const handleAddProduct = (product) => {
        const ToBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === ToBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            const count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== ToBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="shop-container">
            <div className="product-container"> 
                {
                    products.map(pd => <Product
                        key={pd.key} 
                        showAddToCard={true}
                        handleAddProduct = {handleAddProduct} 
                        product={pd}>
                            
                        </Product>)
                }
               
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/review'>
                        <button className='main-button'>Review Order</button>
                    </Link>
                </Cart>
            </div>
            
            
        </div>
    );
};

export default Shop;