import Style from './tabs.module.css'

import copyTrade from './../../../../img/mainPage/Descover/tabs/tabs1.svg';
import earnImg from './../../../../img/mainPage/Descover/tabs/tabs2.svg';
import botImg from './../../../../img/mainPage/Descover/tabs/tabs3.svg';
import starterImg from './../../../../img/mainPage/Descover/tabs/tabs4.svg';
import { AiOutlineArrowRight } from 'react-icons/ai';

function DiscoverTabs ({ tabsClick, active }) {

    return (

     <div className={Style.wrapper}>
          <article onClick={() => tabsClick(1)} className={ active === 1 ? `${Style.card} ${Style.active}` : Style.card}>
            <div className={Style.title__row}>
                <img src={copyTrade} alt="copy trading" className={Style.image__card} />
                <p className={Style.title}>Copy Trading</p>
            </div>
            <p className={Style.desc}>Let top traders work for you</p>
            <div className={ active === 1 ?`${Style.btn__arrow} ${Style.active__arrow}` : Style.btn__arrow}><AiOutlineArrowRight/></div>
          </article>
          <article onClick={() => tabsClick(2)} className={ active === 2 ? `${Style.card} ${Style.active}` : Style.card}>
            <div className={Style.title__row}>
                <img src={earnImg} alt="copy trading" className={Style.image__card} />
                <p className={Style.title}>Earn</p>
            </div>
            <p className={Style.desc}>Grow your crypto holdings the smart way</p>
            <div className={ active === 2 ?`${Style.btn__arrow} ${Style.active__arrow}` : Style.btn__arrow}><AiOutlineArrowRight/></div>
          </article>
          <article onClick={() => tabsClick(3)} className={active === 3 ? `${Style.card} ${Style.active}` : Style.card}>
            <div className={Style.title__row}>
                <img src={botImg} alt="copy trading" className={Style.image__card} />
                <p className={Style.title}>Trading Bot</p>
            </div>
            <p className={Style.desc}>Effortlessly navigate the crypto world on autopilot</p>
            <div className={ active === 3 ?`${Style.btn__arrow} ${Style.active__arrow}` : Style.btn__arrow}><AiOutlineArrowRight/></div>
          </article>
          <article onClick={() => tabsClick(4)} className={active === 4 ? `${Style.card} ${Style.active} ${Style.nobottom}` : `${Style.card} ${Style.nobottom}`}>
            <div className={Style.title__row}>
                <img src={starterImg} alt="copy trading" className={Style.image__card} />
                <p className={Style.title}>ByStarter</p>
            </div>
            <p className={Style.desc}>Get early access to tomorrow's top tokens today</p>
            <div className={ active === 4 ?`${Style.btn__arrow} ${Style.active__arrow}` : Style.btn__arrow}><AiOutlineArrowRight/></div>
          </article>
     </div>
    )
}

export default DiscoverTabs;