import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            console.log(user.multiFactor.user.email);
            auth.signOut();
        }
    }

    return (<>
        <div className='header'>
            <Link to="/" className="Link">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="AmaZon.com"></img>
            </Link>


            <div className="header__search">
                <input className="header__searchInput" type="text"></input>
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <>{
                    user ? <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLine1">
                            {user.multiFactor.user.email.split("@")[0]}
                        </span>
                        
                        <span className="header__optionLine2">
                            Sign Out
                        </span>
                    </div>
                        :
                        <Link className="Link" to={!user && "/login"}>
                            <div className="header__option">
                                <span className="header__optionLine1">
                                    Hello Guest
                                </span>
                                <span className="header__optionLine2">
                                    Sign In
                                </span>
                            </div>
                        </Link>
                }
                </>

                <div className="header__option">
                    <span className="header__optionLine1">
                        Return
                    </span>
                    <span className="header__optionLine2">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLine1">
                        Your
                    </span>
                    <span className="header__optionLine2">
                        Prime
                    </span>
                </div>

                <Link to="/checkout" className="Link">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLine2 header__basketCount">
                            {basket?.length}
                        </span>
                        <span className="header__optionLine2 cart" >
                        Cart
                    </span>
                    </div>
                </Link>



            </div>
        </div>
    </>
    )
}

export default Header
