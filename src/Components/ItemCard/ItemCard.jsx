import { Link } from 'react-router-dom'
import './ItemCard.css'
import './Media-Query.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'


export const ItemCard = ( { category, id, thumbnail, title, brand, price, rating } ) =>{
    const { addToCart, addToFavs } = useContext(ShopContext)

    return(
        <div className='ItemCard'>
                <div className='box-itemCard'>
                    <Link id='Link' to={`/products/${id}`}>
                        <p id='category'>{category}</p>
                        <div>
                            <div>
                                <img src={thumbnail} alt="" id='img'/>
                            </div>
                            <div id='product-infos'>
                                <p id='title'>{title}</p>
                                <span>{brand}</span>
                                <p id='price'>R$: {price},00</p>
                                <p>Avaliação: {rating}</p>
                            </div>
                        </div>
                        </Link>
                    <footer id='btns'>
                        <button id='btn-addFav' onClick={ () => addToFavs(id)}>Adicionar aos favoritos</button>
                        <button id='btn-addCart' onClick={() => addToCart(id)}>Adicionar ao Carrinho</button>
                    </footer>
                </div>
        </div>
    )
}