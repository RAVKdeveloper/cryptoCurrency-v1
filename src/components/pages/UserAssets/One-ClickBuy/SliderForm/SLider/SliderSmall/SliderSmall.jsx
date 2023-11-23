import style from './style.module.css';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function SliderSmall () {

    return(

    <section className={style.root}>
        <Swiper
        className={style.swiper}
        modules={[ Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        >
          <SwiperSlide className={style.row}>
            <div className={style.card}>hello</div>
            </SwiperSlide> 
          <SwiperSlide className={style.row}>el2</SwiperSlide>
         <SwiperSlide className={style.row}>el3</SwiperSlide>
         <SwiperSlide className={style.row}>el4</SwiperSlide>
        </Swiper>
    </section> 
    )
}

export default SliderSmall;