import { NavLink } from 'react-router-dom';
import style from './style.module.css';

import { IoMoon } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";

function HeaderReg ({  temaOn, setTemaOn }) {

    return(

        <section className={style.header}>
            <NavLink to={"/"} className={style.logoText}>Ravk</NavLink>
            {
                temaOn ? 
                <IoSunnySharp onClick={() => setTemaOn(false)} className={style.sun}/>
                :
                <IoMoon onClick={() => setTemaOn(true)} className={style.moon}/>
            }
        </section>
    )
}

export default HeaderReg;