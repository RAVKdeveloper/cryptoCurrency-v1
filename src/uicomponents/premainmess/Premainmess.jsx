
import './premain.css';

import linkImg from './../../img/premain/arrow.svg';
import closeImg from './../../img/premain/close icon.png';
import { useState } from 'react';

function PremainMess () {

    const [active, setActive] = useState(true);

   return (

    <section className={active ? "premain__wrap active" : "premain__wrap"}>
        <div className="text__premain__row">
            <p className="text__premain">Upgrade to Unified Trading Account now to enjoy enhanced capital efficiency</p>
            <p className="link__premain__body">
                <span>Upgrade Now</span>
                <img src={linkImg} alt="arrow" />
            </p>
        </div>
        <img onClick={() => setActive(false)} src={closeImg} alt="close" className="close__premain" />
    </section>

   )

}

export default PremainMess;