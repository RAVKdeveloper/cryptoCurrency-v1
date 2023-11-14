import style from './style.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai'
import eyeImg from './../../img/DashboardPage/Revards/eye.svg';
import eyeNoActiveImg from './../../img/DashboardPage/Revards/eyeNoactive.svg';
import { useEffect, useState } from 'react';
import buyCrypto from './../../img/DashboardPage/MyAssets/buy-crypto.svg';
import depositCrypto from './../../img/DashboardPage/MyAssets/deposit-crypto.svg';
import tutorialImg from './../../img/DashboardPage/MyAssets/tutorial.svg';
import faqImg from './../../img/DashboardPage/MyAssets/deposit-faq.svg';


function MyAssets () {

    const [eyeActive, setEyeActive] = useState(false);

    const addEye = eyeActive ? eyeNoActiveImg : eyeImg

    return(

       <section className={style.myAssets}>
        <div className={style.titles__row}>
           <p className={style.title}>My Assets <img onClick={() => setEyeActive(!eyeActive)} src={addEye} alt="eye" className={style.eye} /></p>
           <p className={style.link}>Assets Details <AiOutlineArrowRight className={style.arrow__links}/></p>
        </div>
        <div className={style.balance}>
            <p className={style.title__balance}>Total Assets</p>
            <p className={style.value__balance}>{eyeActive ? '****' + '0.00'.substring(4) : '0.00'} USD</p>
            <p className={style.value__btc}>= {eyeActive ? '**********' + '0.000000000'.substring(11) : '0.000000000'} BTC</p>
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
                <div className={style.right__row}>
                    Buy
                </div>
            </div>
            <div className={style.card}>
                <div className={style.left__row}>
                    <img src={depositCrypto} alt="icon" className={style.icon__card} />
                    <article className={style.column}>
                        <p className={style.title__column}>Deposit Crypto</p>
                        <p className={style.subtitle__column}>Already own crypto? Deposit instantly to your account!</p>
                    </article>
                </div>
                <div className={style.right__row}>
                    Deposit
                </div>
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