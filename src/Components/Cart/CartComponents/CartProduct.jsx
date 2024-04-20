import { useContext, useState } from 'react'

import './Cart.css'
import '../Media-Query.css'

import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom'

export const CartProduct = ( { product } ) =>{

    const { removeFromCart, checkedOrNot } = useContext(ShopContext)

    /*
    const aumentaQuantidade = () =>{
        setQuantidade(quantidade + 1)
    }

    const dimunirQuantidade = () =>{
        if(quantidade >= 0){
            setQuantidade(quantidade - 1)
        } else{
            setQuantidade(0)
        }
    }*/

    return(
        <div id='product-cart' key={product.id}>
                <div id='aaa'>
                    <input type="checkbox" id="input-check" onChange={(e) => checkedOrNot(e, product.price)} />

                    <Link id='Link' to={`/products/${product.id}`}>
                        <div>
                            <img src={product.thumbnail} alt="" id='product-cart-img'/>
                        </div>
                    </Link>

                    <div>
                        <p id='cart-pdtTitle'>{product.title}</p>

                        {/*Quantidade: <button id='minus'>-</button>
                        <input type="number" id="qtProducts" value={quantidade}/>
    <button id='plus' >+</button>*/} 
                    </div>
                </div>

            <div id='price-delete'>
                <p>R$:{product.price},00</p>
                <button onClick={() => removeFromCart(product.id, product.price)}>
                    <span className="material-symbols-outlined" id='lixeira'>
                        delete
                    </span>
                </button>
            </div>
        </div>
    )
}


