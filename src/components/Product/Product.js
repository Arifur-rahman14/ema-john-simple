import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import "../Shop/Shop";
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {img, name, seller, price, stock, key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                {/* <Router>
                    <Switch>
                        <Route to='/productDetails'> */}
                            <h4 className="product-name">
                                <Link to={"/product/"+key}>{name}</Link>
                            </h4>
                        {/* </Route>
                    </Switch>
                </Router> */}
                
                <br/>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p>Only {stock} left in stock - Order soon</p>
            { props.showAddToCard && <button 
            className="main-button" 
                onClick={() => props.handleAddProduct(props.product)}
            ><FontAwesomeIcon icon={faShoppingCart} />Add to Card</button>}
            </div>
        </div>
    );
};

export default Product;