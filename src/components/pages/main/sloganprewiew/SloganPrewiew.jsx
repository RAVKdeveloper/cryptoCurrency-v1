
import './slogan.css';

import arrowImg from './../../../../img/mainPage/sloganPrew/icons8-arrow-30 (1).png';


function SloganPrewiew () {

    return (
     
        <section className="slogan__prewiv">
            <h3 className="prize__pool__title__slogan">1,000,000 USDT Prize Pool</h3>
            <p className="sprint__prize__pool__slogan__prew">Sprint to the Annual Finals and Year-end Gala!</p>
            <button className="btn__slogan__prewiev">Participate Now <img src={arrowImg} alt="arrow" /></button>
        </section>

    )

}

export default SloganPrewiew;