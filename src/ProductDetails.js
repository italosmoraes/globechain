import React from 'react'

const ProductDetails = (props) => (
        
    <div className="product-details">
        <p className="_name">
            {props.details.name}
        </p>
        <p className="_price">
            {props.details.price}
        </p>
        <p className="_description">
            {props.details.description}
        </p>
    </div>
);

export default ProductDetails
