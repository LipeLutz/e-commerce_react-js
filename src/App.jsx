import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Products } from './Components/Products/Products';
import { CartPage } from './Components/Cart/CartComponents/CartPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ProductPage } from './Components/ProductPage/ProductPage';
import { ShopContextProvider } from './Components/Context/ShopContext';
import { Favorites } from './Components/Favorites/Favorites';

function App() {

  const [productsIDs, setProductsIDs] = useState([])
  const [modal, setModal] = useState(false)

  useEffect( () =>{
    const pegarLocalStorage = () => JSON.parse(localStorage.getItem('produtosCarrinho')) ?? []
    const dbCLient = pegarLocalStorage()
    //console.log(dbCLient)
    setProductsIDs(dbCLient)
  }, [])

  const modalOptions = () =>{
    setModal(!modal)

    if(modal === false){
      document.getElementById('modalOptions').style.display = 'block'
    } else{
      document.getElementById('modalOptions').style.display = 'none'
    }
  }
  
  return (

    <div className="App">
      <ShopContextProvider>
        
        <BrowserRouter>
          <div id='modalOptions'>
            <div id='modalOptionsBTNS'>
              <Link to='/'>
                <button>Menu</button>
              </Link>
              <hr /> 
              <Link to='/favorites'>
                <button>Favoritos</button>
              </Link>
              <hr /> 
              <Link to='/cart'>
                <button>Carrinho</button>
              </Link>
            </div>
          </div>
    
          <Header modalOptions={modalOptions}/>

          <Routes>
            <Route path='/e-commerce_react-js' element={<Products />}/>
            <Route path='/cart' element={<CartPage productsIDs={productsIDs}/>}/>
            <Route path='/products/:id' element={<ProductPage />} />
            <Route path='/favorites' element={<Favorites />}/>
          </Routes>
          
        </BrowserRouter>
        
      </ShopContextProvider>
  
    </div>
  );
}

export default App;