import { useState, useEffect } from "react"

export const useFetch = (url) =>{
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    useEffect( () =>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => setProducts(json.products))
        setLoading(false)
    }, [])

    return { products }  
}