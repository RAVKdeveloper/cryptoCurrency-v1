
import Style from'./new.module.css';

import cardImg from './../../../../img/mainPage/NewProductCard/RavkCard1.png';
import utaImg from './../../../../img/mainPage/NewProductCard/UTA2.png';
import web3Img from './../../../../img/mainPage/NewProductCard/Web3.png';
import arrow from './../../../../img/mainPage/NewProductCard/arrow.svg';

function NewProductCard () {

return(

<section className={Style.new__product}> 
    <article className={Style.card}>
        <div className={Style.card__content}>
        <h6 className={Style.card__title}>Ravk Card</h6>
        <p className={Style.card__desc}>Seamlessly convert and pay with crypto worldwide</p>
        <div className={Style.btn__card}><span className={Style.btn__text}>Chek</span><img src={arrow} alt='arrow' className={Style.arrow} /></div>
        </div>
        <img src={cardImg} alt="cardImage" className={Style.card__img} />
    </article>
    <article className={Style.card}>
        <div className={Style.card__content}>
        <h6 className={Style.card__title}>Unified Trading Account</h6>
        <p className={Style.card__desc}>Trade Spot, Derivatives and Options from one account</p>
        <div className={Style.btn__card}><span className={Style.btn__text}>Chek</span><img src={arrow} alt='arrow' className={Style.arrow} /></div>
        </div>
        <img src={utaImg} alt="cardImage" className={Style.card__img} />
    </article>
    <article className={Style.card}>
        <div className={Style.card__content}>
        <h6 className={Style.card__title}>Ravk Web3</h6>
        <p className={Style.card__desc}>Next-level reliability, innovation, and opportunities in Web3.</p>
        <div className={Style.btn__card}><span className={Style.btn__text}>Chek</span><img src={arrow} alt='arrow' className={Style.arrow} /></div>
        </div>
        <img src={web3Img} alt="cardImage" className={Style.card__img} />
    </article>
</section>
)

}

export default NewProductCard;