import './Favorites.css'
import './Media-Query.css'

import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useFetch } from '../../Utils/useFetch'
import { Link } from 'react-router-dom'

export const Favorites = () =>{

    const { products } = useFetch()
    const { addToCart, removeFromFavs, favItems } = useContext(ShopContext)
    console.log(favItems)

    const { setPriceProducts } = useContext(ShopContext)
    
    setPriceProducts(0)

    return(
        <div>
            {products.map( (product) =>{
                if(favItems[product.id] > 0){
                    return (
                        <div id="mainFavorites" key={product.key}>
                            <Link id='Link' to={`/products/${product.id}`}>
                                <div id="divFavoriteIMG">
                                    <img src={product.thumbnail} alt="" id="favoriteIMG"/>
                                </div>
                            </Link>
                            
                            <div id="FavoriteItemDescription">
                                <Link id='Link' to={`/products/${product.id}`}>
                                    <div>
                                        <h1 id='favotiriteItemTitle'>{product.title}</h1>
                                        <p id='favotiriteItemPrice'>R$: {product.price},00</p>
                                        <p id='favotiriteItemSubdivision'>{parseInt(product.price / 6)}</p>
                                        <p id='favotiriteItemRating'>{product.rating}</p>
                                    </div>
                                </Link>
                                <div id='favoritePageBTNS'>
                                    <button id='favoriteButtonBuyNow'>Comprar Agora</button>
                                    <button id='favoriteButtonAddCart' onClick={() => addToCart(product.id)}>Adicionar ao Carrinho</button>
                                    
                                    <button id='btnLixeiraFav' onClick={() => removeFromFavs(product.id)} >
                                        <span className="material-symbols-outlined" id='lixeiraFav'>
                                            delete
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        
                        
                    )}
                    
                    return null
                
                })}

                    {Object.values(favItems).every(quantity => quantity === 0) && (
                        <h1 id='NAFavoriteProduct'>Nenhum produto adicionado aos favoritos :(</h1>
            )}

        </div>
    )
}