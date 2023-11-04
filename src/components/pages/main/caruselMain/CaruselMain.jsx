
import './carusel.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import images

import image1 from './../../../../img/mainPage/slider/image1.webp';
import image2 from './../../../../img/mainPage/slider/image2.webp';
import image3 from './../../../../img/mainPage/slider/image3.webp';
import image4 from './../../../../img/mainPage/slider/image4.webp';
import image5 from './../../../../img/mainPage/slider/image5.webp';
import image6 from './../../../../img/mainPage/slider/image6.webp';
import image7 from './../../../../img/mainPage/slider/image7.webp';
import image8 from './../../../../img/mainPage/slider/image8.webp';
import image9 from './../../../../img/mainPage/slider/image9.webp';
import image10 from './../../../../img/mainPage/slider/image10.webp';
import image11 from './../../../../img/mainPage/slider/image11.webp';
import image12 from './../../../../img/mainPage/slider/image12.webp';




function CaruselMain () {

return (

 <Swiper 
      modules={[Navigation, Autoplay  ]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      speed={400}
      autoplay={{
        delay: 6000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
    }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

      <SwiperSlide> 
        <div className="container__slider__main">
             <article className="card__slider__main">
                 <img src={image1} alt="" className="card__image__slider__main" />
                 <div className="info__card__slider__main__body">
                    <h6 className="title__card__slider__main">Up to 500USDT to Referal</h6>
                    <p className="desc__card__slider__main">Season</p>
                 </div>
             </article>
             <article className="card__slider__main">
                 <img src={image2} alt="" className="card__image__slider__main" />
                 <div className="info__card__slider__main__body">
                    <h6 className="title__card__slider__main">Protect Your 1st Copy Trade</h6>
                    <p className="desc__card__slider__main"></p>
                 </div>
             </article>
             <article className="card__slider__main">
                 <img src={image3} alt="" className="card__image__slider__main" />
                 <div className="info__card__slider__main__body">
                    <h6 className="title__card__slider__main">November Fiat x P2P Referal</h6>
                    <p className="desc__card__slider__main">Frenzy</p>
                 </div>
             </article>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="container__slider__main">
             <article className="card__slider__main">
                 <img src={image4} alt="" className="card__image__slider__main" />
                 <div className="info__card__slider__main__body">
                    <h6 className="title__card__slider__main">New Spot Listing:</h6>
                    <p className="desc__card__slider__main">Memecoin(MEME)</p>
                 </div>
             </article>
             <article className="card__slider__main">
                 <img src={image5} alt="" className="card__image__slider__main" />
                 <div className="info__card__slider__main__body">
                    <h6 className="title__card__slider__main">UTA Upgrade Event</h6>
                    <p className="desc__card__slider__main">Ultimite Prize</p>
                 </div>
             </article>
             <article className="card__slider__main">
                 <img src={image6} alt="" className="card__image__slider__main" />
                 <div className="info__card__slider__main__body">
                    <h6 className="title__card__slider__main">RAVK Web3 USDC Odyssey</h6>
                    <p className="desc__card__slider__main"></p>
                 </div>
             </article>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="container__slider__main">
             <article className="card__slider__main">
                 <img src={image7} alt="" className="card__image__slider__main" />
                 <div className="info__card__slider__main__body">
                    <h6 className="title__card__slider__main">Exclusive Offer for New Users</h6>
                    <p className="desc__card__slider__main">Earn 30% APE for USDC</p>
                 </div>
             </article>
             <article className="card__slider__main">
                 <img src={image8} alt="" className="card__image__slider__main" />
                 <div className="info__card__slider__main__body">
                    <h6 className="title__card__slider__main">Refer a Friend, Climb</h6>
                    <p className="desc__card__slider__main">Leaderboards, and Share...</p>
                 </div>
             </article>
             <article className="card__slider__main">
                 <img src={image9} alt="" className="card__image__slider__main" />
                 <div className="info__card__slider__main__body">
                    <h6 className="title__card__slider__main">Grab your share of the 80,000</h6>
                    <p className="desc__card__slider__main">POL prize pool</p>
                 </div>
             </article>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="container__slider__main">
             <article className="card__slider__main">
                 <img src={image10} alt="" className="card__image__slider__main" />
                 <div className="info__card__slider__main__body">
                    <h6 className="title__card__slider__main">Polygon 2.0 (POL) on</h6>
                    <p className="desc__card__slider__main">Launchpool</p>
                 </div>
             </article>
             <article className="card__slider__main">
                 <img src={image11} alt="" className="card__image__slider__main" />
                 <div className="info__card__slider__main__body">
                    <h6 className="title__card__slider__main">ETH Ease Options Trading Event</h6>
                    <p className="desc__card__slider__main"></p>
                 </div>
             </article>
             <article className="card__slider__main">
                 <img src={image12} alt="" className="card__image__slider__main" />
                 <div className="info__card__slider__main__body">
                    <h6 className="title__card__slider__main">Up to 1 ETH per Mystery Box</h6>
                    <p className="desc__card__slider__main"></p>
                 </div>
             </article>
        </div>
      </SwiperSlide>
    </Swiper> 

)

}

export default CaruselMain;