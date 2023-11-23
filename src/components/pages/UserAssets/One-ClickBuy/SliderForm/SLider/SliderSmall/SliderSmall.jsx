import style from './style.module.css';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import iconOne from './../../../../../../../img/OneClickBuy/SLider/SliderSmall/icon1.png';
import iconTwo from './../../../../../../../img/OneClickBuy/SLider/SliderSmall/icon2.png';
import iconThree from './../../../../../../../img/OneClickBuy/SLider/SliderSmall/icon3.png';
import iconFour from './../../../../../../../img/OneClickBuy/SLider/SliderSmall/iconFour.png';
import iconFive from './../../../../../../../img/OneClickBuy/SLider/SliderSmall/iconFive.png';
import iconSix from './../../../../../../../img/OneClickBuy/SLider/SliderSmall/iconSix.png';
import iconSeven from './../../../../../../../img/OneClickBuy/SLider/SliderSmall/icon7.png';


function SliderSmall () {

    return(

    <section className={style.root}>
        <Swiper
        className={style.swiper}
        modules={[ Navigation, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        speed={600}
        autoplay={{
            delay: 15000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
        }}
        >
          <SwiperSlide className={style.row}>
            <div className={style.card}>
              <img src={iconOne} alt="image" className={style.img} />
            </div>
            <div className={style.card}>
              <img src={iconTwo} alt="image" className={style.img} />
            </div>
            <div className={style.card}>
              <img src={iconThree} alt="image" className={style.img} />
            </div>
            </SwiperSlide> 
         <SwiperSlide className={style.row}>
         <div className={style.card}>
              <img src={iconFour} alt="image" className={style.img} />
            </div>
            <div className={style.card}>
              <img src={iconFive} alt="image" className={style.img} />
            </div>
            <div className={style.card}>
              <img src={iconSix} alt="image" className={style.img} />
            </div>
         </SwiperSlide>
         <SwiperSlide className={style.row}>
         <div className={style.card}>
              <img src={iconSeven} alt="image" className={style.img} />
            </div>
            <div className={style.cardText}>
              <p className={style.text}>How Can You Buy Coin Instantly?</p>
            </div>
         </SwiperSlide>
        </Swiper>
    </section> 
    )
}

export default SliderSmall;