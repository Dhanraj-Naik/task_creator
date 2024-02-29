import React from 'react'

const Product = ({ product }) => {
    return (
        <div>
            <p> {product.id}</p>
            <p>Product {product.name}</p>
            <p>${product.price}</p>
            <p>INSTOCK {product.in_stock}</p>

        </div>
    )
}

export default Product