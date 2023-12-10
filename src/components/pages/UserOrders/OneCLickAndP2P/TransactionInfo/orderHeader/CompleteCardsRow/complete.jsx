import style from './style.module.css'
import iconOne from '../../../../../../../img/orderP2POneClick/icon1.png'
import iconTwo from '../../../../../../../img/orderP2POneClick/icon2.png'
import { FaArrowRightLong } from "react-icons/fa6";



function CompleteCardsHeader () {

    return (

        <section className={style.root}>
            <article className={style.card}>
                <img src={iconOne} alt="icon" className={style.icon} />
                <div className={style.content}>
                   <span className={style.title}>Ravk Lending</span>
                   <p className={style.text}>Buy Crypto on P2P and Lend to Earn a Competitive Floating APR Every Hour!</p>
                </div>
                <div className={style.arrow}>
                    <FaArrowRightLong className={style.arrowIcon} />
                </div>
            </article>
            <article className={style.card}>
                <img src={iconTwo} alt="icon" className={style.icon} />
                <div className={style.content}>
                   <span className={style.title}>Derivatives</span>
                   <p className={style.text}>Upgrade your trades with USDT Perpetual, Inverse Futures, and more.</p>
                </div>
                <div className={style.arrow}>
                    <FaArrowRightLong className={style.arrowIcon} />
                </div>
            </article>
        </section>
    )
}

export default CompleteCardsHeader;