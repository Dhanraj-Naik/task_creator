import React, { useEffect, useState } from 'react'
import Product from '../../components/Product'

const ProductList = () => {
    const [posts, setPosts] = useState([]);
    console.log("NORMAL", posts)
    useEffect(() => {
        fetch("http://localhost:8000/posts")
            .then(response => response.json())
            .then(data => {
                console.log("RESPONSE:", data)
                setPosts(data)
            })
            .catch(err => console.log(err))
    }, []);


    return (
        <section>
            {posts.map(post => (
                <Product key={post.id} post={post} />
            ))}
        </section>
    )
}

export default ProductList