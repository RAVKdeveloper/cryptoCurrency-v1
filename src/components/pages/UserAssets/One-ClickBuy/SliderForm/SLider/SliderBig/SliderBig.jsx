import style from './style.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  A11y, Autoplay } from 'swiper/modules';
import slideOne from './../../../../../../../img/OneClickBuy/SLider/SliderBig/slideOne.png';
import slideTwo from './../../../../../../../img/OneClickBuy/SLider/SliderBig/sliderTwo.png';
import slideThree from './../../../../../../../img/OneClickBuy/SLider/SliderBig/sliderThree.png';
import sliderFour from './../../../../../../../img/OneClickBuy/SLider/SliderBig/sliderFour.png';
import sliderFive from './../../../../../../../img/OneClickBuy/SLider/SliderBig/sliderFive.png';
import sliderSix from './../../../../../../../img/OneClickBuy/SLider/SliderBig/sliderSix.png';


function SliderBig () {

    return(

        <Swiper
        className={style.swiper}
        spaceBetween={50}
        slidesPerView={1}
        modules={[ Autoplay, A11y]}
        speed={600}
        autoplay={{
            delay: 7000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
        }}
        >
         <SwiperSlide>
            <img className={style.img} src={slideOne} alt="image" />
         </SwiperSlide>
         <SwiperSlide>        
            <img className={style.img} src={slideTwo} alt="image" />
         </SwiperSlide>
         <SwiperSlide>
            <img className={style.img} src={slideThree} alt="image" />
         </SwiperSlide>
         <SwiperSlide>
           <img className={style.img} src={sliderFour} alt="image" />
         </SwiperSlide>
         <SwiperSlide>
           <img className={style.img} src={sliderFive} alt="image" />
         </SwiperSlide>
         <SwiperSlide>
           <img className={style.img} src={sliderSix} alt="image" />
         </SwiperSlide>
        </Swiper>
    )
}

export default SliderBig;