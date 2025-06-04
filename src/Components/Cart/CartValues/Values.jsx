import './Values.css'
import '../Media-Query.css'
import { useContext } from "react"
import { ShopContext } from "../../Context/ShopContext"
import { Link } from "react-router-dom"

export const Values = ( { CEP, cupom, frete } ) =>{

    const { priceProducts } = useContext(ShopContext) 

    const funcaoAleatoria = () =>{

        let percentual = 0.10;
        let desconto = priceProducts * percentual;
        let novoPreco = priceProducts - desconto;

        if(cupom.toUpperCase() === 'LUTZ10'){
            return priceProducts - parseInt(novoPreco) 
        } 
          
        return 0
    }

    const cupomDeDesconto = funcaoAleatoria()

    const valorTotal = priceProducts - cupomDeDesconto + frete

    const valorComDesconto = valorTotal * 0.10
    const valorTotalComDesconto = valorTotal - valorComDesconto


    return(
        <div id='resumo'>
            <div id='boxResumoDoPedido'>

                <p id='resumoDoPedido'>Resumo do Pedido</p>

                <hr />
                <div id='subTotal'>
                    <p>Subtotal</p>
                    <p>R$: {priceProducts.toFixed(2)}</p>
                </div>
                <hr />

                <div id='entrega'>
                    <p>Entrega</p>
                    <p>R$: {frete}</p>
                </div>
                <hr />

                <div id='cupom'>
                    <p>Cupom de desconto</p>
                    <p>-R$: {cupomDeDesconto}</p>
                </div>
                <hr />

                <div id='total'>
                    <div id='valorTotal'>
                        <p>Total</p>
                        <p>R$: {valorTotal.toFixed(2)}</p>
                    </div>
                    
                    <div id="descontos">
                        <p id="valorOriginal">R$: {priceProducts.toFixed(2) + frete}</p>
                        <p id='valorComDesconto'>R$: {valorTotalComDesconto.toFixed(2)}</p>
                    </div>
                    <p id='spanValorComDesconto'>Valor com <span>10% de desconto</span> no Boleto ou PIX</p>

                </div>
            </div>

            <div id='btnsResumoPedido'>
                <Link to="/e-commerce_react-js">
                    <button id='adicionarMaisProdutos'>Adicionar mais produtos</button>
                </Link>
                
                <button id='fecharPedido'>Fechar pedido</button>
            </div>

        </div>
    )
}