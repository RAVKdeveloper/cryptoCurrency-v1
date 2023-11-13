import style from './revards.module.css';

import revardsImg1 from './../../../../img/DashboardPage/Revards/revards1.png';
import revardsImg2 from './../../../../img/DashboardPage/Revards/revards2.png';
import arrow from './../../../../img/DashboardPage/Revards/right-arrow.svg';
import arrowGrey from './../../../../img/DashboardPage/Revards/down-arrow-gray.svg';
import { useState } from 'react';

function RevardsExlusive () {

    const [spoiler, setSpoiler] = useState(false);

    return(
      
     <section className={style.revards}>
        <h5 className={style.title}>Unlock Your Exclusive Rewards!</h5>
        <div className={style.card__row}>
        <div className={style.card}>
            <img src={revardsImg1} alt="image1" className={style.icon__card} />
            <div className={style.content}>
                <p className={style.title__card}>Referral Program Reloaded</p>
                <p className={style.subtitle__card}>Earn Up to 1,025 USDT and 30% Commission Per Referral!</p>
            </div>
            <div className={style.body__arrow}>
                <img src={arrow} alt="arrow" className={style.arrow} />
            </div>
        </div>
        <div className={style.card}>
            <img src={revardsImg2} alt="image1" className={style.icon__card} />
            <div className={style.content}>
                <p className={style.title__card}>Spot Trading Titans</p>
                <p className={style.subtitle__card}>Win a share of the 100,000 USDT prize pool!</p>
            </div>
            <div className={style.body__arrow}>
                <img src={arrow} alt="arrow" className={style.arrow} />
            </div>
        </div>
        </div>
        {spoiler && 
        <div className={style.spoiler__card}>
            <p className={style.text__spoiler}>Eager to learn more about the thrilling events happening at Ravk?</p>
            <div className={style.links__spoiler}>
                <a href="#" className={style.link}>Explore Rewards Hub</a>
                <a href="#" className={style.link}>View More Events</a>
            </div>
        </div>
        }
        <div className={style.spoiler__body}>
            <span onClick={() => setSpoiler(!spoiler)}
             className={style.more}>{spoiler ? 'Show Less' : 'More'} 
             <img src={arrowGrey} alt="arrow" className={spoiler ?  `${style.arrow__grey} ${style.active}` : style.arrow__grey} />
             </span>
        </div>
     </section>
    )
}

export default RevardsExlusive;