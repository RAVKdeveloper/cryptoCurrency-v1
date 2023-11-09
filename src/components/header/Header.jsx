import './header.css';

// Import images

import logoHeader from './../../img/logoheader.svg';
import avatarImg from './../../img/header/avatar icon.jpeg';
import bellImg from './../../img/header/icons8-bell-45.png';
import dowloandImg from './../../img/header/icons8-download-45.png';

// Import Components

import BuyCrypto from '../../navheadercomponents/navigationLi/BuyCrypto/BuyCrypto';
import Web3LiHEader from '../../navheadercomponents/navigationLi/Trade/Web3Li';
import AccountHover from '../../navheadercomponents/accountSection/accountHover/AccountHover';
import BellHover from '../../navheadercomponents/accountSection/bellHover/BellHover';
import DowloandHover from '../../navheadercomponents/accountSection/dowloandHover/DowloandHover';
import { useState } from 'react';

function Header () {

const [btnRow, setBtnROw] = useState(true);

return (

<header className="header">
    <section className="logo__nav__header__row">
        <img src={logoHeader} alt="logo" className="logo__header" />
        <nav className="navigation__header">
            <ul className='navigation__header__ul__list'>
                <li onClick={() => setBtnROw(false)} className='header__main__li buy__crupto__li'>Buy Crypto
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
        <div className="button__log">Log In</div>
        <div className="btn__reg">Sign Up</div>
    </section> 
    :
    <section className="account__header__row">
    <div className="btn__deposit__header">Deposit</div>
    <div className="avatar__image__hover__wrap">
    <img src={avatarImg} alt="avatar" className="avatar__icon__header" />
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