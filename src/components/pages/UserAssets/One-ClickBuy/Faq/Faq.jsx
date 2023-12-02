import style from './style.module.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


function FAQ () {

    return (

        <section className={style.root}>
            <h5 className={style.title}>FAQ</h5>
            <div className={style.row}>
                <article className={style.column}>
                    <p className={style.text}>How to Buy Coins with Your Credit/Debit Card on Bybit</p>
                    <p className={style.text}>Troubleshooting: Failed to Link Your Credit/Debit Card</p>
                    <p className={style.text}>FAQ — Credit/Debit Payments</p>
                    <NavLink to={"/"} className={style.link}>View More <FaArrowRightLong className={style.arrow} /></NavLink>
                </article>
                <article className={style.column}>
                    <p className={style.text}>How to Link or Remove Your Credit/Debit Card on Bybit</p>
                    <p className={style.text}>Troubleshooting: Failed Payments</p>
                </article>
            </div>
        </section>
    )
}

export default FAQ;