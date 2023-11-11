
import style from './footer.module.css';

import logo from './../../img/footer/logo-dark.svg';
import facebook from './../../img/footer/facebook.svg';
import twitter from './../../img/footer/twitter.svg';
import insta from './../../img/footer/insta.svg';
import youTube from './../../img/footer/yt.svg';
import linkedin from './../../img/footer/linkedin.svg';
import tg from './../../img/footer/tg.svg';
import tiktok from './../../img/footer/tiktok.svg';
import reddit from './../../img/footer/reddit.svg';
import discord from './../../img/footer/ds.svg';


function Footer () {

    return(

    <footer className={style.footer}>
        <section className={style.footer__head}>
            <div className={style.column__logo}>
                <img src={logo} alt="logo" className={style.logo} />
                <div className={style.container__sociale}>
                    <img src={facebook} alt="facebook" className={style.socseti} />
                    <img src={twitter} alt="twitter" className={style.socseti} />
                    <img src={insta} alt="instagramm" className={style.socseti} />
                    <img src={youTube} alt="youtube" className={style.socseti} />
                    <img src={linkedin} alt="linkedin" className={style.socseti} />
                    <img src={tg} alt="telegramm" className={style.socseti} />
                    <img src={tiktok} alt="tiktok" className={style.socseti} />
                    <img src={reddit} alt="reddit" className={style.socseti} />
                    <img src={discord} alt="discord" className={style.socseti} />
                </div>
            </div>
            <div className={style.column}>
            <h5 className={style.title}>About</h5>
            <ul className={style.footer__nav}>
                <li>About Bybit</li>
                <li>Bybit Communities</li>
                <li>Blog</li>
                <li>Announcements</li>
                <li>Risk Disclosure</li>
                <li>Careers</li>
            </ul>
            </div>
            <div className={style.column}>
            <h5 className={style.title}>Services</h5>
            <ul className={style.footer__nav}>
                <li>One-Click Buy</li>
                <li>P2P Trading (0 Fees)</li>
                <li>VIP Program</li>
                <li>Referral Program</li>
                <li>Institutional Services</li>
                <li>Listing Application</li>
                <li>Tax API</li>
                <li>Audit</li>
            </ul>
            </div>
            <div className={style.column}>
            <h5 className={style.title}>Support</h5>
            <ul className={style.footer__nav}>
                <li>Submit a Request</li>
                <li>Help Center</li>
                <li>User Feedback</li>
                <li>Bybit Learn</li>
                <li>Trading Fee</li>
                <li>API</li>
                <li>Authenticity Check</li>
                <li>P2P FAQ</li>
            </ul>
            </div>
            <div className={style.column}>
            <h5 className={style.title}>Products</h5>
            <ul className={style.footer__nav}>
                <li>Trade</li>
                <li>Derivatives</li>
                <li>Earn</li>
                <li>Launchpad</li>
                <li>NFT</li>
                <li>Bybit Card</li>
            </ul>
            </div>
        </section>
        <section className={style.footer__footer}>
            <span className={style.coperait}>© 2018-2023 Ravk.com. All rights reserved.</span>
            <div className={style.term__privacy}>
                <span className={style.termin}>Terms of Service</span>
                <span className={style.termin}>Privacy Terms</span>
            </div>
        </section>
    </footer>
    )
}

export default Footer;