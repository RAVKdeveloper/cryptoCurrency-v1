import style from './style.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { setOpenModal } from '../../redux/Slices/depositUser';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

function TextField ({ title, placeHolder }) {

    const isActiveArrow = useSelector((state) => state.depositUser.openModal)
    const dispatch = useDispatch();
    const select = useRef();

    const openHandler = () => {
        dispatch(setOpenModal(true))
        if(isActiveArrow === true) {
            console.log(select)
            dispatch(setOpenModal(false))
        }
    }

    return(

        <div className={style.root}>
            <h6 className={style.title}>{title}</h6>
            <div ref={select} onClick={() => openHandler()} className={style.select}>
                 <p className={style.text}>{placeHolder}</p>
                 <IoIosArrowDown className={isActiveArrow === true ? `${style.arrow} ${style.active}` : style.arrow}/>
            </div>
        </div>
    )
}

export default TextField;