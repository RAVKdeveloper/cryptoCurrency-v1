
import arrayCryptoMain from '../../../../db/dbCryptoMain';
import './tradingmain.css';


function TradingMainPrewiev () {

console.log(arrayCryptoMain)


return (

<section className="home__trading__prewiev">
    <div className="title__btn__home__trading__prewiev__row">
        <h3 className="title__home__trading__prewiev">Catch Your Next Trading Opportunity</h3>
        <div className="btn__home__trading__prewiev">See More <img src="https://www.bybit.com/common-static/fhs/bybit-home-new/arrow.svg" alt="arrow" /></div>
    </div>
    <div className="home__trading__prewiev__wrapper__card">
        <div className="wrapper__hot__derivates__trading__prewiev">
            <div className="tabs__hotderivateves__trading__prewiev__body">
                <span className="tab__trading__prewiew__hotderivateves">Favorites</span>
                <span className="tab__trading__prewiew__hotderivateves tab__active">Hot Derivatives</span>
                <span className="tab__trading__prewiew__hotderivateves">Hot Coins</span>
            </div>
            <div className="cryptolist__home__trading__prewiev__body">
            <span className="cryptolist__span__trading__prewiev trading__praic__span">Trading Pairs</span>
            <span className="cryptolist__span__trading__prewiev last__trade__price__span">Last Traded Price</span>
            <span className="cryptolist__span__trading__prewiev change__span__trading__home">24H Change</span>
            <span className="cryptolist__span__trading__prewiev charts__span__home__trading">Charts</span>
            <span className="cryptolist__span__trading__prewiev">Trade</span>
        </div>
        </div>
        <div className="wrapper__top__gainers__trading__prewiev">

        </div>
    </div>
</section>

)

}

export default TradingMainPrewiev;