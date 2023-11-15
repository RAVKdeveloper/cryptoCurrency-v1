import style from './style.module.css';

import kubok from './../../img/DashboardPage/Recommendated/imageKubok.png';
import qrImg from './../../img/DashboardPage/Recommendated/imageQr.png';
import arrow from './../../img/DashboardPage/Recommendated/arrow.svg';
import friendsImg from './../../img/DashboardPage/Recommendated/imageFriends.png';


function Recommendate () {

    return(
         
        <section className={style.reccomendate}>
            <h5 className={style.title}>Recommended</h5>
            <div className={style.competishiones}>
                <div className={style.iconCompetishiones__row}>
                    <img src={kubok} alt="kubok" className={style.icon} />
                    <p className={style.title__competishiones}>My Competition(s)</p>
                </div>
                <p className={style.desc__competishiones}>Challenge Now and Win Great Prizes!</p>
            </div>
            <div className={style.card}>
                <div className={style.content}>
                    <p className={style.text__card}>Download & Trade in App Now</p>
                    <a href="" className={style.link}>Get App <img src={arrow} alt="arrow" className={style.arrow} /></a>
                </div>
                <img src={qrImg} alt="qrcode" className={style.image} />
            </div>
            <div className={style.card}>
                <div className={style.content}>
                    <p className={style.text__card}>Invite friends to earn up to 1025 USDT and 30% commission</p>
                    <a href="" className={style.link}>Invite now <img src={arrow} alt="arrow" className={style.arrow} /></a>
                </div>
                <img src={friendsImg} alt="friends" className={style.image} />
            </div>
        </section>
    )
}

export default Recommendate;