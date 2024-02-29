import React, { useCallback, useEffect, useState } from 'react'
import Product from '../../components/Product'
import './productList.css'
import useFetch from '../../hooks/useFetch';

const ProductList = () => {
    const [counter, setCounter] = useState(0);
    // const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("http://localhost:8000/products")
    const { data: products, loading, error } = useFetch(url,  {body: 'success'})
    // console.log("NORMAL", products)

    // useEffect(() => {
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log("RESPONSE:", data)
    //             setProducts(data)
    //         })
    //         .catch(err => console.log(err))
    // }, [url]);


    /**
     * when function is outside, use useCallback to avoid unnecessary call
     * otherwise if we use api call in useEffect itself, then its not needed. 
     * but usually we keep useEffect clean
     */
    // const productFetch = useCallback(async () => {
    //     const API = await fetch(url);
    //     const response = await API.json();
    //     setProducts(response)
    // }, [url])


    // useEffect(() => {
    //     productFetch()
    // }, [productFetch]);

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
                    setUrl("http://localhost:8000/productsa?in_stock=true")
                    setCounter(counter + 1)
                }
                }>IN STOCK</span>
            </p>
            <div>
                {loading && <h1>Loading...</h1>}
                {products && products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
                {error && <h1>ERROR : {error}</h1>}
            </div>
        </section>
    )
}

export default ProductList