import style from './style.module.css';
import fiatIcon from './../../../../../img/DepositPage/DepositForm/DepositFaq/btnIconHeader.png';
import buyNow from './../../../../../img/DepositPage/DepositForm/DepositFaq/buyNow.png';
import { FaArrowRight } from "react-icons/fa";


function FaqDeposit () {


    return(

        <section className={style.faq}>
            <div className={style.btn__row}>
                <div className={style.btn}>
                    <img src={fiatIcon} alt="icon" className={style.icon} />
                    Fiat Deposit
                </div>
            </div>
            <div className={style.content}>
                <h3 className={style.title}>FAQ</h3>
                <ul className={style.list}>
                    <li className={style.list__item}>How to Make a Deposit</li>
                    <li className={style.list__item}>Unsupported Deposit Recovery Procedure Rules</li>
                    <li className={style.list__item}>FAQ — Crypto Deposit</li>
                    <li className={style.list__item}>How to Recover a Deposit with Wrong or Missing Tag/Memo</li>
                    <li className={`${style.list__item} ${style.top}`}>Deposits yet to be credited? Self service</li>
                    <li className={style.list__item}>Deposit/Withdrawal Status of All CoinsFind Out</li>
                </ul>
                <div className={style.card}>
                    <div className={style.content__card}>
                       <img src={buyNow} alt="icon" className={style.icon__card} />
                       <div className={style.text__card}>
                        <p className={style.title__card}>Buy with RUB NOW!</p>
                        <p className={style.subtitle__card}>Buy Crypto with your Fiat Balance</p>
                       </div>
                    </div>
                    <div className={style.btn__card}>
                        <FaArrowRight className={style.arrow}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqDeposit;