import { NavLink } from 'react-router-dom';
import './buycrypto.css';


function BuyCrypto () {

return (

    <div className="buycrypto__menu__header">
        <ul className="nav__buycryto__card__header">
            <NavLink className="link__buycrypto" to={"/user/assets/oneClickBuy"}>
                <li>
                <h3 className="title__buycrypto__card">One-Click Buy</h3>
                <p className="desc__buycrypto__card">Buy crypto Within seconds</p>
                </li>
            </NavLink>
            <li>
            <h3 className="title__buycrypto__card">P2P Trading(0 Fees)</h3>
            <p className="desc__buycrypto__card">50+ FIat Currenciys</p>
            </li>
            <NavLink className="link__buycrypto" to={"/user/assets/deposit"}>
            <li>
            <h3 className="title__buycrypto__card">Crypto Deposit</h3>
            <p className="desc__buycrypto__card">Instant Crypto Deposit to You Account</p>
            </li>
            </NavLink>
        </ul>
    </div>

)

}

export default BuyCrypto;

