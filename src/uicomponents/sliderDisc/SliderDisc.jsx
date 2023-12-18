import { Swiper, SwiperSlide } from 'swiper/react';

import Style from './slider.module.css'

import { AiOutlineArrowRight } from 'react-icons/ai';
import { arrSlider } from '../../db/dbSlider';

function SliderDisc ({ activeTab }) {

    const active = activeTab - 1

    return (

        <Swiper
        className={Style.slider} 
        spaceBetween={20}
        slidesPerView={2}
        speed={400}
      >
        {
            activeTab === 4 ? arrSlider[active].map((obj) => (              
             <SwiperSlide key={obj.id} className={`${Style.slider__slide} ${Style.big}`}>
                <div className={Style.big__row__img}>
                    <img src={obj.img} alt={obj.nick} className={Style.img__big} />
                    <span className={Style.nick__big}>{obj.nick}</span>
                    <div className={Style.sticker__nick}>Ended</div>
                </div>
                <div className={Style.price__sup__column}>
                    <div className={Style.column__row}>
                        <article className={Style.column__big}>
                            <span className={Style.title__big}>Price</span>
                            <span className={Style.value__big}>{obj.price}</span>
                        </article>
                        <article className={Style.column__big}>
                            <span className={Style.title__big}>Lockup Terms</span>
                            <span className={Style.value__big}>{obj.lockterms}</span>
                        </article>
                    </div>
                    <div className={Style.column__row__two}>
                    <article className={Style.column__big}>
                            <span className={Style.title__big}>Supported Tokens</span>
                            <span className={Style.value__big}>{obj.suptoken}</span>
                        </article>
                        <article className={Style.column__big}>
                            <span className={Style.title__big}>Supply</span>
                            <span className={Style.value__big}>{obj.supply}</span>
                        </article>
                    </div>
                </div>
                <div className={`${Style.copy__slide__row} ${Style.big__link}`}>
               <a href="#" className={Style.link}>{obj.link}</a>
               <AiOutlineArrowRight className={Style.arrow__link}/>
            </div>
              </SwiperSlide>
            )) 
            : 
            arrSlider[active].map((obj) => (
                <SwiperSlide key={obj.id} className={Style.slider__slide}>
                <div className={Style.user__info__body}>
                    {
                       activeTab !== 3 && <img src={obj.img} alt="avatar" className={Style.image__avatar} />
                    }
                   <div className={Style.user__info__column}>
                       <p className={Style.nick}>{obj.nick}</p>
                       <p className={Style.followers}>{obj.follow}</p>
                   </div>
                </div>
                <p className={Style.titles__slide}>{obj.nameone}</p>
                <p className={Style.value__slide}>{obj.valueone}</p>
                <p className={Style.titles__slide__two}>{obj.nametwo}</p>
                <p className={Style.value__slide}>{obj.valuetwo}</p>
                <div className={Style.copy__slide__row}>
                   <a href="#" className={Style.link}>Copy</a>
                   <AiOutlineArrowRight className={Style.arrow__link}/>
                </div>
           </SwiperSlide>
            ))
        }
      </Swiper>

    )
}

export default SliderDisc;