import { NavLink } from 'react-router-dom';
import style from './style.module.css'
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import { handleClick } from '../../../../../../utils/openSpoiler';


function FaqOrder () {

    const [ isActiveOne, setIsActiveOne ] = useState(false)
    const [ isActiveTwo, setIsActiveTwo ] = useState(false)

    return (

        <section className={style.root}>
            <div className={style.titleRow}>
                FAQ
            </div>
            <div className={style.content}>
                <div className={style.item}>
                    <p onClick={() => handleClick(isActiveOne, setIsActiveOne)} className={style.vopr}>The transaction has been completed. Where can I view my assets?<IoIosArrowDown className={isActiveOne ? `${style.arrow} ${style.view}` : style.arrow} /></p>
                    <p className={isActiveOne ? `${style.spoiler} ${style.view}` : style.spoiler}>You may head to "Funding Account" under "My Assets" to view your assets.<NavLink className={style.linkAssets} to={"/dashbord"}> Please click here</NavLink></p>
                </div>
                <div className={style.item}>
                    <p onClick={() => handleClick(isActiveTwo, setIsActiveTwo)} className={style.vopr}>How can I view my order?<IoIosArrowDown className={isActiveTwo ? `${style.arrow} ${style.view}` : style.arrow} /></p>
                    <p className={isActiveTwo ? `${style.spoiler} ${style.view}` : style.spoiler}>You may head to the P2P order list.<NavLink className={style.linkAssets} to={"/dashbord"}> Please click here</NavLink></p>
                </div>
            </div>
        </section>
    )
}

export default FaqOrder;