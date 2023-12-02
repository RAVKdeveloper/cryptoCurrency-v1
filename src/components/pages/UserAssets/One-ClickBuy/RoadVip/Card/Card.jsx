import style from './style.module.css';
import { FaArrowRightLong } from "react-icons/fa6";


function VIPCard ({ title, value, link, active }) {

    return (

        <div className={active ? `${style.root} ${style.active}` : style.root }>
            <div className={style.content}>
                <p className={style.title}>{title}</p>
                <p className={style.value}>{value}</p>
                <div className={style.progressBar}></div>
            </div>
            <div className={style.link}>
                {link}
                <FaArrowRightLong className={style.arrow} />
            </div>
        </div>
    )
}

export default VIPCard;