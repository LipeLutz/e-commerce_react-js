import { createContext, useState } from "react"
import { useFetch } from "../../Utils/useFetch"

export const ShopContext = createContext(null)

export const ShopContextProvider = (props) =>{
    const { products } = useFetch()

    const getDefaultCart = () =>{

        let cart = {}
    
        for( let i = 1; i < products.length + 1; i++){
            cart[i] = 1
        }

        //console.log(cart)
    
        return cart
    }

    const [cartItems, setCartItems] = useState(getDefaultCart())
    const [favItems, setFavItems] = useState(getDefaultCart())
    const [priceProducts, setPriceProducts] = useState(0)

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: itemId}));
    };

    const removeFromCart = (itemId, productPrice) =>{
        setCartItems(
            (prev) => ({...prev, [itemId]: itemId - itemId})
        )
        
        if(priceProducts === 0){
            setPriceProducts(0)
        } else{
            setPriceProducts(priceProducts - productPrice)
        }
    }

    const addToFavs = (itemId) => {
        setFavItems((prev) => ({ ...prev, [itemId]: itemId}));
    };

    const removeFromFavs = (itemId) =>{
        setFavItems(
            (prev) => ({...prev, [itemId]: itemId - itemId})
        )
        
    }

    const checkedOrNot = (e, productPrice) =>{
        if(e.target.checked){
            setPriceProducts(productPrice + priceProducts)
        } else{
            setPriceProducts(priceProducts - productPrice)
        }
    }

    const contextValue = { 
        cartItems, 
        addToCart, 
        removeFromCart, 
        checkedOrNot, 
        priceProducts, 
        setPriceProducts,
        favItems, 
        addToFavs, 
        removeFromFavs
    }

    /*
    useEffect( () =>{
        const guardarLocalStorage = (id) => localStorage.setItem(`produtosCarrinho`, JSON.stringify(id))
        const pegarLocalStorage = () => JSON.parse(localStorage.getItem('produtosCarrinho')) ?? []
       
        const dbCLient = pegarLocalStorage()
        dbCLient.push(cartItems)
        guardarLocalStorage(cartItems)
    }, [cartItems])
    */


    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}