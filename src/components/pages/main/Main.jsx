import CaruselMain from "./caruselMain/CaruselMain";
import RunString from "./runString/RunString";
import SloganPrewiew from "./sloganprewiew/SloganPrewiew";

import './main.css';
import TradingMainPrewiev from "./TradingMain/TradingMainPrewiev";

function MainPage () {

return (

<main className="main__main">
<SloganPrewiew/>
<RunString/>
<div className="main__container">
<CaruselMain/>
<TradingMainPrewiev/>
</div>
</main>

)

}

export default MainPage;