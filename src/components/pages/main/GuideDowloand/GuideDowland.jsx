
import Style from './guide.module.css';

import backImg from './../../../../img/mainPage/Guide/guidedDownload.webp';
import qrImg from './../../../../img/mainPage/Guide/qrCode.png';
import appStore from './../../../../img/mainPage/Guide/appstore.svg';
import androidImg from './../../../../img/mainPage/Guide/googlestore.svg';
import playMarket from './../../../../img/mainPage/Guide/playstore.svg';
import apiImg from './../../../../img/mainPage/Guide/api.svg';
 
function GuideDowloand () {

    return(

    <section className={Style.guide}>
       <div className={Style.content}>
        <h3 className={Style.title}>Trade Anytime, Anywhere.</h3>
        <p className={Style.subtitle}>Open new positions instantly, whether it's on Bybit App or Web.</p>
        <div className={Style.qr__row}>
            <img className={Style.qr} src={qrImg} alt="qr" />
            <div className={Style.info__qr__column}>
                <span className={Style.title__qr}>Scan Now to Download</span>
                <span className={Style.os__qr}>iOS & Android</span>
            </div>
        </div>
        <div className={Style.btn__row}>
            <div className={Style.card}>
                <img className={Style.card__img} src={appStore} alt="apple" />
                <p className={Style.name__card}>App Store</p>
            </div>
            <div className={Style.card}>
                <img className={Style.card__img} src={androidImg} alt="androidapk" />
                <p className={Style.name__card}>Android APK</p>
            </div>
            <div className={Style.card}>
                <img className={Style.card__img} src={playMarket} alt="googleplay" />
                <p className={Style.name__card}>Google Play</p>
            </div>
            <div className={Style.card}>
                <img className={Style.card__img} src={apiImg} alt="api" />
                <p className={Style.name__card}>API</p>
            </div>
        </div>
       </div>
       <img className={Style.image__main} src={backImg} alt="imageguide" />
    </section>
    )
}

export default GuideDowloand;