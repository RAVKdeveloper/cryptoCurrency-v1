
import style from './comitet.module.css';

import img1 from './../../../../img/mainPage/Commitet/img1.svg';
import img2 from './../../../../img/mainPage/Commitet/image2.svg';
import img3 from './../../../../img/mainPage/Commitet/image3.svg';
import img4 from './../../../../img/mainPage/Commitet/image4.svg';
import img5 from './../../../../img/mainPage/Commitet/image5.svg';

import { AiOutlineArrowRight } from 'react-icons/ai';

function Comitet () {

    return(

    <section className={style.comitet}>
      <h3 className={style.title}>Our Commitment to Compliance and Your Protection</h3>
      <div className={style.wrapper__card}>
        <div className={style.card}>
            <div className={style.title__img__row}>
                <p className={style.title__card}>Triple-Layer Asset Protection</p>
                <img src={img1} alt="" className={style.img__card} />
            </div>
            <p className={style.text__card}>User funds are securely stored offline in cold wallets.
Experience Triple Fund Protection with our cold wallet storage, ensuring strong security for user assets through comprehensive protection, for a safe and reliable experience.</p>
        </div>
        <div className={style.card}>
            <div className={style.title__img__row}>
                <p className={style.title__card}>Privacy Protection</p>
                <img src={img2} alt="" className={style.img__card} />
            </div>
            <p className={style.text__card}>We integrate a privacy-first approach in all our products and services.
We are transparent about the data we gather from you, clearly stating how we utilize and share it.</p>
        </div>
        <div className={style.card}>
            <div className={style.title__img__row}>
                <p className={style.title__card}>Advanced Data Protection</p>
                <img src={img3} alt="" className={style.img__card} />
            </div>
            <p className={style.text__card}>Data is encrypted during storage and while in transit. Strict authorization controls are in place to ensure that only you can access your personal and private information.</p>
        </div>
        <div className={style.card}>
            <div className={style.title__img__row}>
                <p className={style.title__card}>Real-Time Monitoring</p>
                <img src={img4} alt="" className={style.img__card} />
            </div>
            <p className={style.text__card}>Ravk's risk controls actively monitor and analyze user behavior in real-time. Upon detecting suspicious activity, withdrawals undergo enhanced authentication measures for added security.</p>
        </div>
        <div className={style.card}>
            <div className={style.title__img__row}>
                <p className={style.title__card}>Security by Design</p>
                <img src={img5} alt="" className={style.img__card} />
            </div>
            <p className={style.text__card}>Our system prioritizes security, featuring a secure development life cycle, thorough security testing, and continuous bug bounty programs.</p>
        </div>
        <div className={style.card__psevdo}>        
                <p className={style.title__psevdo}>Your Trusted Crypto Exchange</p>
                <div className={style.btn}>Sign Up Now <AiOutlineArrowRight/></div>
        </div>
      </div>
    </section>
    )
}

export default Comitet;