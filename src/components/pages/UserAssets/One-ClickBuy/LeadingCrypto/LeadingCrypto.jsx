import style from './style.module.css'
import coinsImg from './../../../../../img/OneClickBuy/LeadingCrypto/coins.png'
import iconOneImg from './../../../../../img/OneClickBuy/LeadingCrypto/icon1.png'
import iconTwoImg from './../../../../../img/OneClickBuy/LeadingCrypto/icon2.png'


function LeadingCrypto () {

    return (

        <section className={style.root}>
            <h5 className={style.title}>Leading Crypto Trading Platform</h5>
            <div className={style.cardsRow}>
                <article className={style.cardOne}>
                    <div className={style.cardOneLeft}>
                        <span className={style.titlecardOne}>More than</span>
                        <div className={style.cardOnekeywords}>
                            <p className={style.cardOneKeyword}>50+ fiat currencies</p>
                            <p className={style.cardOneKeyword}>20+ cryptocurrencies</p>
                        </div>
                        <p className={style.cardOneCoins}>EUR、USD 、GBP 、BRL 、JPY、 TRY 、BTC 、ETH 、 USDT、USDC 、XRP、SOL...</p>
                    </div>
                    <img src={coinsImg} alt="icon" className={style.cardOneRight  } />
                </article>
                <article className={style.cardTwo}>
                    <div className={style.cardTwoText}>Millions of registered users and billions of US dollars in daily trading volume</div>
                    <div className={style.columnsRow}>
                        <article className={style.column}>
                            <img src={iconOneImg} alt="icon" className={style.cardTwoIcon} />
                            <div className={style.contentColumn}>
                                <p className={style.titleColumn}>16 Millions+</p>
                                <p className={style.subtitleColumn}>Registered Users</p>
                            </div>
                        </article>
                        <article className={style.column}>
                            <img src={iconTwoImg} alt="icon" className={style.cardTwoIcon} />
                            <div className={style.contentColumn}>
                                <p className={style.titleColumn}>7 Billions+</p>
                                <p className={style.subtitleColumn}>Daily Trading Volume (USD)</p>
                            </div>
                        </article>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default LeadingCrypto;