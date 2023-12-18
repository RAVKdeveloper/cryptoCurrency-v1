import Style from './discover.module.css';
import arrow from './../../../../img/mainPage/sloganPrew/icons8-arrow-30 (1).png';
import DiscoverTabs from './DiscoverMoreTabs';
import { useState } from 'react';
import { arrTitleCopy } from '../../../../db/dbSlider';
import SliderDisc from '../../../../uicomponents/sliderDisc/SliderDisc';


function DiscoverMore () {
  
    const [tab, setTab] = useState(1);

    return(
       
        <section className={Style.discovermore}>
             <h3 className={Style.title__discover}>Discover More Products</h3>
                  
            <div className={Style.wrapper__discover}>
             <div className={Style.wrapper__container__info}>
                  <div className={Style.info__discover}>
                    {
                       arrTitleCopy.filter((arr) => arr.id === tab).map((obj) => (
                            <>
                            <h6 key={obj.id} className={Style.title__info}>{obj.title}</h6>
                            <p className={Style.subtitle__info}>{obj.subtitle}</p>
                            <div className={Style.info__value__row}>
                                <article className={Style.info__value__column}>
                                    <p className={Style.value__column}>{obj.valueone}</p>
                                    <p className={Style.value__text}>{obj.nameone}</p>
                                </article>
                                <article className={Style.info__value__column}>
                                    <p className={Style.value__column}>{obj.valuetwo}</p>
                                    <p className={Style.value__text}>{obj.nametwo}</p>
                                </article>
                            </div> 
                             </>
                        )
                        )
                    }
                    <div className={Style.btn__seemore}>See More <img src={arrow} alt="" /></div>
                  </div>
                 <SliderDisc activeTab={tab}/>
             </div>
              <DiscoverTabs tabsClick={setTab} active={tab}/>
             </div>
        </section>
    )

}

export default DiscoverMore;