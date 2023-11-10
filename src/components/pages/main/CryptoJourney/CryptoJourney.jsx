
import style from './crypto.module.css';

import { AiOutlineArrowRight } from 'react-icons/ai';

function CryptoJourney () {

    return(

        <section className={style.crypto__journey}>
            <h5 className={style.title}>Embark on Your Crypto Journey Today!</h5>
            <div className={style.btn}>Deposit or Buy Crypto <AiOutlineArrowRight/></div>
        </section>
    )
}

export default CryptoJourney;