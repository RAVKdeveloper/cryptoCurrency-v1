
import './runstr.css';

import unionImg from './../../../../img/mainPage/runString/union.png';
import arrowImg from './../../../../img/mainPage/sloganPrew/icons8-arrow-30 (1).png';

function RunString () {

return (

<section className="run__string__main">
    <img src={unionImg} alt="union" className="union__run__str__image" />
          <marquee behavior="scroll" scrollamount="10" scrolldelay="0" className="marquee__run__str" width="100%" direction="right">
            <span>Adjustment of Contract Risk Limit for BTCUSD Perpetual, BTCUSDC Perpetual (Nov 3, 2023)</span> 
             <span>Calling All Crypto Enthusiasts: Win a Trip to Dubai and Meet Your Favorite Celebrities!🏖</span>
            <span>Delisting of MCUSDT Perpetual Contract</span>
            <span>Coming Soon: MEMEUSDT and CAKEUSDT Perpetual Contracts</span>
          </marquee>
    <img src={arrowImg} alt="arrow" className="arrow__run__str__image" />
</section>

)

}

export default RunString;  