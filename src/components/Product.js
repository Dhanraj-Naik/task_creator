import React from 'react'

const Product = ({ product }) => {
    return (
        <div>
            <p> {product.id}</p>
            <p>Product {product.name}</p>
            <p>${product.price}</p>
            <p style={{ color : product.in_stock ? "green" : "red"}}>{product.in_stock ? "INSTOCK" : "OUT OF STOCK"}</p>

        </div>
    )
}

export default Product