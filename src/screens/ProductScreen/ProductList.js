import React, { useCallback, useEffect, useState } from 'react'
import Product from '../../components/Product'
import './productList.css'

const ProductList = () => {
    const [counter, setCounter] = useState(0);
    const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("http://localhost:8000/products")
    console.log("NORMAL", products)

    // useEffect(() => {
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log("RESPONSE:", data)
    //             setProducts(data)
    //         })
    //         .catch(err => console.log(err))
    // }, [url]);



    const productFetch = useCallback(async () => {
        const API = await fetch(url);
        const response = await API.json();
        setProducts(response)
    }, [url])


    useEffect(() => {
        productFetch()
    }, [productFetch]);

    // useEffect(() => {
    //     console.log("counter : ", counter)
    // }, [counter]);


    return (
        <section>

            <p>
                <span className='counter' onClick={() => {
                    setCounter(counter + 1)
                }}>Click Me COUNT :{counter}</span>
                <span className='all' onClick={() => {
                    setUrl("http://localhost:8000/products")
                    setCounter(counter + 1)
                }}>ALL</span>
                <span className='inStock' onClick={() => {
                    setUrl("http://localhost:8000/products?in_stock=true")
                    setCounter(counter + 1)
                }
                }>IN STOCK</span>
            </p>
            <div>
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}

export default ProductList