import style from './style.module.css';
import { NavLink } from 'react-router-dom';

function FooterDashboard () {

    return(
       
        <footer className={style.footer}>
            <div className={style.left__container}>
                <div className={style.links}>
                    <NavLink to={"/"} className={style.link}>Market Overview</NavLink>
                    <NavLink to={"/"} className={style.link}>Trading Fee</NavLink>
                    <NavLink to={"/"} className={style.link}>API</NavLink>
                    <NavLink to={"/"} className={`${style.link} ${style.none}`}>Help Center</NavLink>
                </div>
                <p className={style.copyraight}>© 2018-2023 Ravk.com. All rights reserved.</p>
            </div>
            <p className={style.right}>Routing</p>
        </footer>
    )
}

export default FooterDashboard;