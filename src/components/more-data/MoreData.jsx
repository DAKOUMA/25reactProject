import React, { useEffect, useRef, useState } from 'react'

const MoreData = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)

    const fetchProducts = async () => {
        try {
            setLoading(true)

            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            const result = await response.json()

            if (result && result.products && result.products.length) {
                setProducts(prev => [...prev, ...result.products])
                console.log(result);
                setLoading(false)
            }

        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count])

    if (loading) {
        return <div>Loading Data</div>
    }
    return (
        <div className='moreData-container'>
            <div className='products-container'>
                {
                    products && products.length ?
                        products.map((item, index) => (
                            <div
                                className='products'
                                key={index}
                            >
                                <img src={item.thumbnail} alt="" />
                                <h1>{item.title}</h1>
                            </div>
                        ))
                        : null
                }
            </div>
            {
                products.length >= 100 ?
                    <button>You Have reached 100 products</button> : <button onClick={() => setCount(prev => prev + 1)}>Load more products</button>
            }
        </div>
    )
}

export default MoreData