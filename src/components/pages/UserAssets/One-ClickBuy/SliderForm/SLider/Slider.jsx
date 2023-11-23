import SliderBig from './SliderBig/SliderBig';
import SliderSmall from './SliderSmall/SliderSmall';
import style from './style.module.css';


function Slider () {

    return(

        <section className={style.root}>
            <SliderBig/>
            <SliderSmall/>
        </section>
    )
}

export default Slider;