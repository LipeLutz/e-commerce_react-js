//import './Media-Query.css'

import { useContext, useState } from 'react'
import { useFetch } from '../../../Utils/useFetch'
import { ShopContext } from '../../Context/ShopContext'
import { CartProduct } from './CartProduct'
import { Values } from '../CartValues/Values'

export const CartPage = ( ) =>{  

    const { products } = useFetch()
    const { cartItems } = useContext(ShopContext)
    
    const [CEP, setCEP] = useState(0)
    const [cupom, setCupom] = useState('')
    const [frete, setFrete] = useState(0)

    const checkEconomico = document.getElementById('freteEconomico')
    const checkExpresso = document.getElementById('freteExpresso')

    const handleRadio = () =>{
        
        if(checkExpresso.checked !== false){
            setFrete(30)
        }
        else{
            setFrete(20)
        }
        
    }

    const handleSubmitEntrega = (e) =>{
        e.preventDefault()
        const divFrete = document.getElementById('divFrete')

        if(CEP.length === 8){
            if(divFrete !== null){
                divFrete.style.display = 'flex'
            }
        }

        return CEP
    }
    
    return(

        <div id='main-cart'>
            
            <p>Meu Carrinho</p>
            <hr />

            <div id='cart-item-finish'>

                <div id='product'>
                
                    {products.map( (product) =>{
                        if(cartItems[product.id] > 0){
                            return <CartProduct key={product.id} product={product}/>
                        }
                        return null
                    })}

                    {Object.values(cartItems).every(quantity => quantity === 0) && (
                        <h1 id='NAProduct'>Nenhum produto adicionado ao carrinho :(</h1>
                    )}
                </div>

                <Values CEP={CEP} cupom={cupom} frete={frete}/>

            </div>

            <div id='cupom-entrega'>
                <div id='frete'>
                    <div id='input-btnFrete'>
                        <h3 id='h3Entrega'>Entrega </h3>

                        <form onSubmit={handleSubmitEntrega}>
                            <input type="number" id='inputEntrega' required onChange={(e) => setCEP(e.target.value)}/>
                            <input type='submit' id='buttonEntrega' value="Calcular" /*onClick={handleSubmitEntrega}*//>
                        </form>

                    </div>

                    <div id='divFrete'>
                        
                        <div className='escolherFrete'>
                            <input type="radio" name='frete' id='freteEconomico' onChange={handleRadio}/>
                            <hr />

                            <label htmlFor='freteEconomico'>
                                <p>ECONÔMICO: R$:20,00</p>
                                <p>Prazo mínimo: 6 dias úteis</p>
                                <p>Prazo Máximo: 13 dias úteis</p>
                            </label>
                        </div>

                        <div className='escolherFrete'>
                            <input type="radio" name='frete' id='freteExpresso' onChange={handleRadio}/>
                            <hr />
                            
                            <label htmlFor='freteExpresso'>
                                <p>EXPRESSO: R$:30,00</p>
                                <p>Prazo mínimo: 4 dias úteis</p>
                                <p>Prazo Máximo: 9 dias úteis</p>
                            </label>
                        </div>
                    </div>
                </div>

                <div id='cupomDeDesconto'>
                    <h3 id='h3Cupom'>Cupom de desconto </h3>
                    <input type="text" id='inputCupom' onChange={(e) => setCupom(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

