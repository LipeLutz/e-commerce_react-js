import './Products.css'
import './Media-Query.css'
import { ItemCard } from '../ItemCard/ItemCard'
import { useContext, useEffect, useState } from 'react'
import { useFetch } from '../../Utils/useFetch'
import { ShopContext } from '../Context/ShopContext'

export const Products = ({ }) => {
    const [query, setQuery] = useState()

    const { products } = useFetch()

    const { setPriceProducts } = useContext(ShopContext)

    useEffect(() =>{
        setPriceProducts(0) 
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const filteredProducts = products.filter((product) => {
        const searchQuery = query?.toLowerCase() || ''
        const titleMatch = product.title?.toLowerCase().includes(searchQuery);
        const brandMatch = product.brand?.toLowerCase().includes(searchQuery);
        return titleMatch || brandMatch;
    })

    return (
        <div className='main'>
            <div id='form'>
                <form onSubmit={handleSubmit}>
                    <input type="text" required onChange={(e) => setQuery(e.target.value.toLowerCase())} id='input-txt' />
                    <input type="submit" value="Buscar" id='input-sbmt' />
                </form>
            </div>

            <div id='products'>
                {filteredProducts.length === 0 ? products.map(product => (
                    <ItemCard
                        key={product.id}
                        category={product.category}
                        id={product.id}
                        thumbnail={product.thumbnail}
                        title={product.title}
                        brand={product.brand}
                        price={product.price}
                        rating={product.rating}
                    />
                )) : filteredProducts.map(ftProduct => (
                    <ItemCard
                        key={ftProduct.id}
                        category={ftProduct.category}
                        id={ftProduct.id}
                        thumbnail={ftProduct.thumbnail}
                        title={ftProduct.title}
                        brand={ftProduct.brand}
                        price={ftProduct.price}
                        rating={ftProduct.rating}
                    />
                ))}
            </div>
        </div>
    )
}
