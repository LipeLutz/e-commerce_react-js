import './ProductPage.css'
import './Media-Query.css'

import { useParams } from 'react-router-dom'
import { useFetch } from '../../Utils/useFetch'
import { useEffect, useState } from 'react'
import { Loading } from '../Loading/Loading'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

export const ProductPage = () =>{

    const { setPriceProducts } = useContext(ShopContext)

    const { id } = useParams()
    const { products } = useFetch()
    const [product, setProducts] = useState()

    const { addToCart } = useContext(ShopContext)

    useEffect( () =>{
        setProducts(products[id - 1])
        setPriceProducts(0)
    }, [id, products])

    let items = document.querySelectorAll('.pdtImage')
    let containerItems = document.getElementById('container-items')

    const handlePrevious = () =>{
        containerItems.appendChild(items[0])
        items = document.querySelectorAll('.pdtImage')
    }

    const handleNext = () =>{
        const lastItem = items[items.length - 1]   
        containerItems.insertBefore(lastItem, items[0])
        items = document.querySelectorAll('.pdtImage')
    }

    return(
        <div id='main-productPage'>

            <div id='container-slide'>
                <div className='action-button' id='previous' onClick={handlePrevious}>
                    <p className="material-symbols-outlined">
                        arrow_back_ios
                    </p>
                </div>
                
                
                <div id='container-items'>
                    {product !== undefined ? product.images.map((img) =>{
                        console.log(product.price)
                        return (
                            <div className='pdtImage' key={id}>
                                <img src={img} alt="" id='imgSize'/>
                            </div>
                        )}) : <Loading />}
                </div>

                <div className='action-button' id='next' onClick={handleNext}>
                    <p className="material-symbols-outlined">
                        arrow_forward_ios
                    </p>
                </div>
            </div>

            <div id='container-info-products'>
                <h1 id='productPageTitle'>{product && product.title}</h1>
                <p id='productPagePrice'>R$: {product && product.price}</p>
                <p id='productPageSubdivision'>Em até 6x de {product && parseInt(product.price / 6)}</p>
                <p id='productPageRating'>Avaliação: {product && product.rating}</p>
                <button id='productPage-BuyNow'>Comprar agora</button>
                <button id='productPage-addToCart' onClick={() => addToCart(id)}>
                    <span className="material-symbols-outlined" id='productPageCart'>
                        add_shopping_cart
                    </span> Adicionar ao Carrinho
                </button>
                    
            </div>

        </div>
    )
}