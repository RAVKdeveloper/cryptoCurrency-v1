import style from './style.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai'
import eyeImg from './../../img/DashboardPage/Revards/eye.svg';
import eyeNoActiveImg from './../../img/DashboardPage/Revards/eyeNoactive.svg';
import { useEffect, useState } from 'react';
import buyCrypto from './../../img/DashboardPage/MyAssets/buy-crypto.svg';
import depositCrypto from './../../img/DashboardPage/MyAssets/deposit-crypto.svg';
import tutorialImg from './../../img/DashboardPage/MyAssets/tutorial.svg';
import faqImg from './../../img/DashboardPage/MyAssets/deposit-faq.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setBalanceBtc } from './../../redux/Slices/userInfo'
import { NavLink } from 'react-router-dom';


function MyAssets () { 

    const [eyeActive, setEyeActive] = useState(false);
    const userBalance = useSelector((state) => state.userInfo.item)
    const userBtc = useSelector((state) => state.userInfo.btcBalance)
    const { balance } = userBalance
    const dispatch = useDispatch();

    const addEye = eyeActive ? eyeNoActiveImg : eyeImg

    let btcTrue = balance === '0.00' ? userBtc : JSON.stringify(Number(balance) / 36000);
 
    if(balance !== undefined && balance !== null) {
        dispatch(setBalanceBtc(btcTrue))
     } 
    
    return(

       <section className={style.myAssets}>
        <div className={style.titles__row}>
           <p className={style.title}>My Assets <img onClick={() => setEyeActive(!eyeActive)} src={addEye} alt="eye" className={style.eye} /></p>
           <p className={style.link}>Assets Details <AiOutlineArrowRight className={style.arrow__links}/></p>
        </div>
        <div className={style.balance}>
            <p className={style.title__balance}>Total Assets</p>
            <p className={style.value__balance}>{eyeActive ? '***': balance} USD</p>
            <p className={style.value__btc}>= {eyeActive ? '***': userBtc} BTC</p>
        </div>
        <div className={style.assetsEmpty}>
            <p className={style.title__empty}>Your hassle-free gateway to buying and depositing Crypto</p>
            <div className={style.card}>
                <div className={style.left__row}>
                    <img src={buyCrypto} alt="icon" className={style.icon__card} />
                    <article className={style.column}>
                        <p className={style.title__column}>Buy Crypto</p>
                        <p className={style.subtitle__column}>New to Crypto? Purchase within seconds!</p>
                    </article>
                </div>
                <NavLink to={"/user/assets/oneClickBuy"} className={style.right__row}>
                    Buy
                </NavLink>
            </div>
            <div className={style.card}>
                <div className={style.left__row}>
                    <img src={depositCrypto} alt="icon" className={style.icon__card} />
                    <article className={style.column}>
                        <div className={style.title__column}>
                            Deposit Crypto
                        </div>
                        <p className={style.subtitle__column}>Already own crypto? Deposit instantly to your account!</p>
                    </article>
                </div>
                <NavLink to={"/user/assets/deposit"} className={style.right__row}>
                    Deposit
                </NavLink>
            </div>
            <div className={style.guide__to__deposit}>
            <p className={style.text}>How to deposit?</p>
            <div className={style.guide__links}>
                <p className={style.guide__link}><img src={tutorialImg} alt="videoIcon" className={style.guide__icon} /> Video Tutorial</p>
                <p className={style.guide__link}><img src={faqImg} alt="bookIcon" className={style.guide__icon} /> User Guide</p>
            </div>
        </div>
        </div>
       </section>
    )
}

export default MyAssets;