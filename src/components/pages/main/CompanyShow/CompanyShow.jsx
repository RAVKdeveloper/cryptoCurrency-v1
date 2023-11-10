
import style from './company.module.css';

import financeManegment from './../../../../img/mainPage/CompanyShow/FinanceMagnates.svg';
import tia from './../../../../img/mainPage/CompanyShow/TIA.svg';
import tet from './../../../../img/mainPage/CompanyShow/TET.svg';
import scm from './../../../../img/mainPage/CompanyShow/SCMP.svg';
import cointg from './../../../../img/mainPage/CompanyShow/CT.svg';
import coindesc from './../../../../img/mainPage/CompanyShow/Coindesk.svg';
import investing from './../../../../img/mainPage/CompanyShow/Investing.svg';
import btc from './../../../../img/mainPage/CompanyShow/Bitcoin.svg';
import cryptodaile from './../../../../img/mainPage/CompanyShow/CoinEdition.svg';
import kasobu from './../../../../img/mainPage/CompanyShow/Kasobu.svg';



function CompanyShow () {

    return(

      <marquee direction="left" className={style.company__show}>
        <img src={financeManegment} alt='financeManegment' className={style.img} />
        <img src={tia} alt='tia' className={style.img} />
        <img src={tet} alt='tet' className={style.img} />
        <img src={scm} alt='scm' className={style.img} />
        <img src={cointg} alt='cointg' className={style.img} />
        <img src={coindesc} alt='coindesk' className={style.img} />
        <img src={investing} alt='investing' className={style.img} />
        <img src={btc} alt='bitcoin' className={style.img} />
        <img src={cryptodaile} alt='cryptodaile' className={style.img} />
        <img src={kasobu} alt='kasobu' className={style.img} />
      </marquee>  
    )
}

export default CompanyShow;