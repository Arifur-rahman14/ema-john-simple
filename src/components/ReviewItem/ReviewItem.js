import React from 'react';

const ReviewItem = (props) => {
    
    const {name, quantity, key, price} = props.product;
    const reviewItemClass = { 
        borderBottom: '1px solid lightgray', 
        marginBottom: '5px', 
        paddingBottom: '10px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemClass} className="review-item">
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <small>${price}</small>
            <br/>
            <button 
            className='main-button' 
            onClick={() => props.handleRemoveProduct(key)}>
                Remove
                </button>
        </div>
    );
};

export default ReviewItem;