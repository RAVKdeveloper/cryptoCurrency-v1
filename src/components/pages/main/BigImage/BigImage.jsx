
import style from './bigImg.module.css';

import bannerImg from './../../../../img/mainPage/BigImg/Banner.jpg';

function BigImg () {

    return(
        
        <section className={style.bigImg}>
            <img src={bannerImg} alt="banner" className={style.banner} />
        </section>
    )
}

export default BigImg;