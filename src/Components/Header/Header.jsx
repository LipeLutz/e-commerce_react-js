import { Link } from 'react-router-dom'
import './Header.css'
import './Media-Query.css'

export const Header = ({ modalOptions }) =>{
    return(
        <div className='Header'>
            <h1 id='h1Logo'>
                <span>
                    <span className="material-symbols-outlined">
                    bolt
                    </span>
                    LTZ
                </span> 
                Store
            </h1>
            <nav>
                {/* <a href="#">Sobre</a>
                <a href="#">Fale conosco</a> */}
                <Link to="/">
                    <span className="material-symbols-outlined">
                        home
                    </span>
                </Link>
                <Link to="/favorites">
                    <span className="material-symbols-outlined" id='favorites'>
                        favorite
                    </span>
                </Link>
                <Link to="/cart">
                    <span className="material-symbols-outlined" id='cartButton'>
                        shopping_cart
                    </span>
                </Link>

                <span className="material-symbols-outlined" id='btnMenu' onClick={modalOptions}>
                    menu
                </span>

            </nav>
        </div>
    )
}