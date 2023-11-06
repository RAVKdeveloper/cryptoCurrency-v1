
import arrayCryptoMain, { arrHotCoin, arrayTopGainersMain, arrFavarites } from '../../../../db/dbCryptoMain';
import { arrayNewListingMain } from '../../../../db/dbCryptoMain';
import './tradingmain.css';

import arrow from './../../../../img/mainPage/sloganPrew/icons8-arrow-30 (1).png';
import chartsImg from './../../../../img/tradingPrewiev/charts.png';
import { useState } from 'react';

function TradingMainPrewiev () {

const [arr, setCard] = useState(arrayCryptoMain);
const [arrTopG, setArrTopG] = useState(arrayTopGainersMain)
const [arrListing, setArrListing] = useState(arrayNewListingMain)
const [tabs, setTabs] = useState(2)
const [arrHot, setArrHot] = useState(arrHotCoin)
const [arrFavarit, setArrFavorit] = useState(arrFavarites)

return (

<section className="home__trading__prewiev">
    <div className="title__btn__home__trading__prewiev__row">
        <h3 className="title__home__trading__prewiev">Catch Your Next Trading Opportunity</h3>
        <div className="btn__home__trading__prewiev">See More <img src="https://www.bybit.com/common-static/fhs/bybit-home-new/arrow.svg" alt="arrow" /></div>
    </div>
    <div className="home__trading__prewiev__wrapper__card">
        <div className="wrapper__hot__derivates__trading__prewiev">
            <div className="tabs__hotderivateves__trading__prewiev__body">
                <span  className={tabs === 1 ? 'tab__trading__prewiew__hotderivateves tab__active' : 'tab__trading__prewiew__hotderivateves'} onClick={() => setTabs(1)}>Favorites</span>
                <span className={tabs === 2 ? 'tab__trading__prewiew__hotderivateves tab__active' : 'tab__trading__prewiew__hotderivateves'} onClick={() => setTabs(2)}>Hot Derivatives</span>
                <span className={tabs === 3 ? 'tab__trading__prewiew__hotderivateves tab__active' : 'tab__trading__prewiew__hotderivateves'} onClick={() => setTabs(3)}>Hot Coins</span>
            </div>
            <div className="cryptolist__home__trading__prewiev__body">
            <span className="cryptolist__span__trading__prewiev trading__praic__span">Trading Pairs</span>
            <span className="cryptolist__span__trading__prewiev last__trade__price__span">Last Traded Price</span>
            <span className="cryptolist__span__trading__prewiev change__span__trading__home">24H Change</span>
            <span className="cryptolist__span__trading__prewiev charts__span__home__trading">Charts</span>
            <span className="cryptolist__span__trading__prewiev">Trade</span>
        </div>
        <div className="cards__hotderivateves__row">
            {
                tabs === 1 ? 
                arrFavarit.map((favorit, id) => (
                    <div id={favorit.id} key={id} className="card__hotderivateves__home__trading__prewiev">
                    <div className="image__name__card__hotderivateves__body">
                        <img src={favorit.img} alt={favorit.tradingpar} />
                        <span>{favorit.tradingpar}</span>
                    </div>
                    <div className="card__info__hotderivateves__body">
                        <p className="price__num__card__hotderivateves">{favorit.price}</p>
                        <p className="price__procent__card__hotderivateves">{favorit.procentprice}</p>
                        <img src={chartsImg} alt='charts' className="charts__card__hotderivateves" />
                        <p className="btn__trade__card__hotderivateves">Trade</p>
                    </div>
                </div> 
                ))
                : null
            }
            {
                tabs === 2 ? 
                arr.map((obj, id) => {
                    return (
                    <div id={obj.id} key={id} className="card__hotderivateves__home__trading__prewiev">
                    <div className="image__name__card__hotderivateves__body">
                        <img src={obj.img} alt={obj.tradingpar} />
                        <span>{obj.tradingpar}</span>
                    </div>
                    <div className="card__info__hotderivateves__body">
                        <p className="price__num__card__hotderivateves">{obj.price}</p>
                        <p className="price__procent__card__hotderivateves">{obj.procentprice}</p>
                        <img src={chartsImg} alt='charts' className="charts__card__hotderivateves" />
                        <p className="btn__trade__card__hotderivateves">Trade</p>
                    </div>
                </div> 
                )
                }) 
                : null
            }
            {
                tabs === 3 ?
                arrHot.map((card, id) => (
                    <div id={card.id} key={id} className="card__hotderivateves__home__trading__prewiev">
                    <div className="image__name__card__hotderivateves__body">
                        <img src={card.img} alt={card.tradingpar} />
                        <span>{card.tradingpar}</span>
                    </div>
                    <div className="card__info__hotderivateves__body">
                        <p className="price__num__card__hotderivateves">{card.price}</p>
                        <p className="price__procent__card__hotderivateves">{card.procentprice}</p>
                        <img src={chartsImg} alt='charts' className="charts__card__hotderivateves" />
                        <p className="btn__trade__card__hotderivateves">Trade</p>
                    </div>
                </div> 
                ))
                : null
            } 
        </div>
        </div>
        <div className="wrapper__top__gainers__trading__prewiev">
              <div className="title__top__gainers__trading__prewiev">Top Gainers</div>
              <div className="cards_top__gainers__row">

                  {
                    arrTopG.map((card, id) => {
                          
                        return (
                        <div key={id} className="card__top__gainers__body">
                          <div className="image__name__card__top__gainers__row">
                        <img src={card.img} alt="" />
                        <span>{card.tradingpar}</span>
                    </div>
                    <div className="info__card__top__gainers__row">
                        <span className="price__info__top__gainers__card">{card.price}</span>
                        <span className="priceprocent__info__top__gainers__card">{card.procentprice}</span>
                    </div>
                  </div>
                        )
                    })
                  }
              </div>
              <div className="title__top__gainers__trading__prewiev title__new__listing__trading__prewiev">New Listings</div>
              <div className="cards_top__gainers__row">

                {
                    arrListing.map((object) => {

                        return (
                        <div key={object.id} className="card__top__gainers__body">
                        <div className="image__name__card__top__gainers__row">
                      <img src={object.img} alt={object.tradingpar} />
                      <span>{object.tradingpar}</span>
                  </div>
                  <div className="info__card__top__gainers__row">
                      <span className="price__info__top__gainers__card">{object.price}</span>
                      <span className="priceprocent__info__top__gainers__card">{object.procentprice}</span>
                  </div>
                </div>
                )
                })
                }
              </div>
        </div>
    </div>
    <div className="btn__deposit__home__trading__prewiev">
        Deposit or Buy Crypto <img src={arrow} alt="arrow" />
    </div>
</section>

)

}

export default TradingMainPrewiev;