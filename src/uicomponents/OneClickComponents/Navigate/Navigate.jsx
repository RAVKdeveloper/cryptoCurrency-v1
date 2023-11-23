import style from './style.module.css';
import { FaArrowRight } from "react-icons/fa";


function Navigate () {

    return(

        <section className={style.root}>
            <div className={style.left}>
                <ul className={style.nav}>
                    <li className={`${style.links} ${style.active}`}>One-Click Buy</li>
                    <li className={style.links}>P2P</li>
                    <li className={style.links}>Fiat Deposit</li>
                    <li className={style.links}>Auto-Invest</li>
                    <li className={style.links}>Ravk Card</li>
                    <li className={style.links}>Convert</li>
                </ul>
            </div>
            <div className={style.right}>
                <p className={style.links}>Orders <FaArrowRight className={style.arrow}/></p>
                <p className={style.links}>User Center</p>
            </div>
        </section>
    )
}

export default Navigate;