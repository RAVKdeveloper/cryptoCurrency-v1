import style from './style.module.css';
import { NavLink } from 'react-router-dom';
import { GoCopy } from "react-icons/go";


function DepositHistory () {

    return(

        <article className={style.card}>
            <div className={style.oneColumn}>
                <p className={style.coin}>USDT</p>
                <p className={style.chain}>TRC20</p>
            </div>
            <div className={style.twoColumn}>
                <p className={style.qty}>1,543.5</p>
                <p className={style.addres}>
                    <span className={style.value}>
                       TLWYdRYbhH39jFjJZhHgbq9N3t62EXPQNG
                    </span>
                    <GoCopy className={style.copy}/>
                </p>
            </div>
            <div className={style.threeColumn}>
                <p className={style.status}>Complete</p>
                <p className={style.date}>2023-11-20 23:16:05</p>
            </div>
            <NavLink to={"/"} className={style.link}>
                Details
            </NavLink>
        </article>
    )
}

export default DepositHistory;
