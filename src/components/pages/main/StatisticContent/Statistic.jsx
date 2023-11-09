
import Style from './statistic.module.css';

import { AiOutlineArrowRight } from 'react-icons/ai';

function StatisticMain () {

return(

  <section className={Style.statistic}>
     <div className={Style.info__row}>
        <article className={Style.column}>
            <p className={Style.value}>14,909,442,443</p>
            <p className={Style.name}>24H Trading Volume (USD)</p>
        </article>
        <article className={Style.column}>
            <p className={Style.value}>908</p>
            <p className={Style.name}>Cryptocurrencies Listed</p>
        </article>
        <article className={Style.column}>
            <p className={Style.value}>19,397,880</p>
            <p className={Style.name}>Registered Users</p>
        </article>
        <article className={Style.column}>
            <p className={Style.value}>160</p>
            <p className={Style.name}>Supported Countries</p>
        </article>
     </div>
     <div className={Style.btn}>
        Sign Up Now <span><AiOutlineArrowRight/></span>
     </div>
  </section>
)

}

export default StatisticMain;