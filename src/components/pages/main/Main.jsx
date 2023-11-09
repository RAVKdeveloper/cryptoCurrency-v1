import CaruselMain from "./caruselMain/CaruselMain";
import RunString from "./runString/RunString";
import SloganPrewiew from "./sloganprewiew/SloganPrewiew";

import './main.css';
import TradingMainPrewiev from "./TradingMain/TradingMainPrewiev";
import DiscoverMore from "./DiscoverMore/DiscoverMore";
import NewProductCard from "./NewProductCards/NewProductCards";
import GuideDowloand from "./GuideDowloand/GuideDowland";

function MainPage () {

return (

<main className="main__main">
<SloganPrewiew/>
<RunString/>
<div className="main__container">
<CaruselMain/>
<TradingMainPrewiev/>
<DiscoverMore/>
<NewProductCard/>
<GuideDowloand/>
</div>
</main>

)

}

export default MainPage;