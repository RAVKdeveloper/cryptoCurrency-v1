import Navigate from '../../../../uicomponents/OneClickComponents/Navigate/Navigate';
import Footer from '../../../footer/Footer';
import Header from '../../../header/Header';
import FormOneClickBuy from './SliderForm/Form/Form';
import Slider from './SliderForm/SLider/Slider';
import style from './style.module.css';



function OneClickBuy () {

    return(

       <section className={style.root}>
        <Header/>
         <div className={style.navigate}>
        <div className={style.containerNav}>
            <Navigate/>
        </div>
         </div>
        <div className={style.sliderForm}>
           <div className={style.conteinerForm}>
               <Slider/>
               <FormOneClickBuy/>
           </div>
        </div>
        <Footer/>
       </section>
    )
}

export default OneClickBuy;