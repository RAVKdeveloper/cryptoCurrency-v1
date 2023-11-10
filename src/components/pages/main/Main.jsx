import CaruselMain from "./caruselMain/CaruselMain";
import RunString from "./runString/RunString";
import SloganPrewiew from "./sloganprewiew/SloganPrewiew";

import './main.css';
import TradingMainPrewiev from "./TradingMain/TradingMainPrewiev";
import DiscoverMore from "./DiscoverMore/DiscoverMore";
import NewProductCard from "./NewProductCards/NewProductCards";
import GuideDowloand from "./GuideDowloand/GuideDowland";
import StatisticMain from "./StatisticContent/Statistic";
import Comitet from "./Commitet/Comitet";
import NeedHelp from "./NeedHelp/NeedHelp";
import BigImg from "./BigImage/BigImage";
import CryptoJourney from "./CryptoJourney/CryptoJourney";
import CompanyShow from "./CompanyShow/CompanyShow";

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
<StatisticMain/>
<Comitet/>
<NeedHelp/>
<BigImg/>
</div>
<CryptoJourney/>
<CompanyShow/>
</main>

)

}

export default MainPage;