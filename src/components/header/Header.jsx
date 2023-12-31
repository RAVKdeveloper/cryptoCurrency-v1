import './header.css';

// Import images

import logoHeader from './../../img/logoheader.svg';
import avatarImg from './../../img/header/avatar.png';
import bellImg from './../../img/header/icons8-bell-45.png';
import dowloandImg from './../../img/header/icons8-download-45.png';

// Import Components

import BuyCrypto from '../../navheadercomponents/navigationLi/BuyCrypto/BuyCrypto';
import Web3LiHEader from '../../navheadercomponents/navigationLi/Trade/Web3Li';
import AccountHover from '../../navheadercomponents/accountSection/accountHover/AccountHover';
import BellHover from '../../navheadercomponents/accountSection/bellHover/BellHover';
import DowloandHover from '../../navheadercomponents/accountSection/dowloandHover/DowloandHover';
import { useContext, useEffect, useState } from 'react';
import { AccountContext, UserContext } from '../../App';
import { NavLink } from 'react-router-dom';
import { URL } from '../pages/dashbord/AccountInfo/AccountInfo';


function Header () {

    const { btnRow, setBtnROw } = useContext(UserContext)
    const { userId, setUserId } = useContext(AccountContext)
    const [click, setClick] = useState(false);

    const assetsLink = 'http://localhost:3002'

    useEffect(() => {
        if(click === true) {
            fetch(URL, {
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
               },
               method: 'PUT',                                                              
                body: JSON.stringify( { "active": "1" } ) 
            })
            .then((res) => {
              console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }, [click])

return (

<header className="header">
    <section className="logo__nav__header__row">
        <NavLink to="/">
        <img src={logoHeader} alt="logo" className="logo__header" />
        </NavLink>
        <nav className="navigation__header">
            <ul className='navigation__header__ul__list'>
                <li onClick={() => setClick(true)} className='header__main__li buy__crupto__li'>Buy Crypto
                <BuyCrypto/>
                </li>
                <li className='header__main__li'>Markets</li>
                <li className='header__main__li'>Trade</li>
                <li className='header__main__li'>Derivatives</li>
                <li className='header__main__li'>Tools</li>
                <li className='header__main__li'>Finance</li>
                <li className='header__main__li web3__li__header'>Web3
                 <Web3LiHEader/>
                </li>
            </ul>
        </nav>
    </section>

    {
        btnRow === true ? 
        <section className="btn__reg__log__row">
            <NavLink to={"/user/login"}>
        <div className="button__log">Log In</div>
            </NavLink>
        <NavLink to={"/user/registration"}>
        <div className="btn__reg">Sign Up</div>
        </NavLink>
    </section> 
    :
    <section className="account__header__row">
    <div className="btn__deposit__header">Deposit</div>
    <a href={assetsLink} className="assets__link">Assets</a>
    <div className="avatar__image__hover__wrap">
    <NavLink to="/dashbord">
    <img src={avatarImg} alt="avatar" className="avatar__icon__header" />
    </NavLink>
    <AccountHover/>
    </div>
    <div className="bell__image__hover__wrap">
    <img src={bellImg} alt="bell" className="bell__icon__header" />
    <BellHover/>
    </div>
    <div className="dowloand__image__hover__wrap">
    <img className='dowloand__icon__header' src={dowloandImg} alt="dowloand" />
     <DowloandHover/>
    </div>
</section>
    }

</header>

)

}

export default Header;