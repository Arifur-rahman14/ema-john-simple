import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {

    const handleAddProduct = () => {
        fetch('http://localhost:8800/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData[0])
        })
    }

    return (
        <div>
            <button onCLick={handleAddProduct}>Add Product</button>
        </div>
    );
};

export default Inventory;