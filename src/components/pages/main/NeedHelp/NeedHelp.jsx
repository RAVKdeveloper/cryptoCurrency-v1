
import style from './help.module.css';

import callImg from './../../../../img/mainPage/NeedHelp/call.svg';
import faqImg from './../../../../img/mainPage/NeedHelp/helpCenter.svg';
import learnImg from './../../../../img/mainPage/NeedHelp/Learn.svg';

function NeedHelp () {

    return(

     <section className={style.need__help}>
         <h3 className={style.title}>Need Help?</h3>
         <div className={style.wrapper__card}>
            <article className={style.card}>
                <img src={callImg} alt="call" className={style.img__card} />
                <p className={style.title__card}>24/7 Customer Support</p>
                <p className={style.card__desc}>Get 24/7 support from our friendly Customer Support agents.</p>
                <a href="" className={style.link__card}>Chat Now</a>
            </article>
            <article className={style.card}>
                <img src={faqImg} alt="faq" className={style.img__card} />
                <p className={style.title__card}>FAQs</p>
                <p className={style.card__desc}>Explore FAQs for detailed instructions on specific features.</p>
                <a href="" className={style.link__card}>Learn More</a>
            </article>
            <article className={style.card}>
                <img src={learnImg} alt="learn" className={style.img__card} />
                <p className={style.title__card}>Learn</p>
                <p className={style.card__desc}>Discover a range of trading guides tailored for beginners and advanced traders alike.</p>
                <a href="" className={style.link__card}>Learn More</a>
            </article>
         </div>
     </section>
    )
}

export default NeedHelp;