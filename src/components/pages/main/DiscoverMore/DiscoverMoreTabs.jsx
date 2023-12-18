import Style from './tabs.module.css'

import copyTrade from './../../../../img/mainPage/Descover/tabs/tabs1.svg';
import earnImg from './../../../../img/mainPage/Descover/tabs/tabs2.svg';
import botImg from './../../../../img/mainPage/Descover/tabs/tabs3.svg';
import starterImg from './../../../../img/mainPage/Descover/tabs/tabs4.svg';
import { AiOutlineArrowRight } from 'react-icons/ai';

function DiscoverTabs ({ tabsClick, active }) {

   const arr = [
    {
      id: 1,
      img: copyTrade,
      title: 'Copy Trading',
      text: 'Let top traders work for you',
    },
    {
      id: 2,
      img: earnImg,
      title: 'Earn',
      text: 'Grow your crypto holdings the smart way',
    },
    {
      id: 3,
      img: botImg,
      title: 'Trading Bot',
      text: 'Effortlessly navigate the crypto world on autopilot',
    },
    {
      id: 4,
      img: starterImg,
      title: 'ByStarter',
      text: `Get early access to tomorrow's top tokens today`,
    },
   ] 

    return (

     <div className={Style.wrapper}>
      {
         arr.map(({ id, img, title, text }) => (
          <article key={id} onClick={() => tabsClick(id)} className={ active === id ? `${Style.card} ${Style.active}` : Style.card}>
            <div className={Style.title__row}>
                <img src={img} alt={title} className={Style.image__card} />
                <p className={Style.title}>{title}</p>
            </div>
            <p className={Style.desc}>{text}</p>
            <div className={ active === id ?`${Style.btn__arrow} ${Style.active__arrow}` : Style.btn__arrow}><AiOutlineArrowRight/></div>
          </article>
         ))
      }
     </div>
    )
}

export default DiscoverTabs;