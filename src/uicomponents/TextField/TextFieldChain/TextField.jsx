import { useSelector, useDispatch } from 'react-redux';
import style from './style.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { setOpenChain } from '../../../redux/Slices/depositUser';
import { useEffect, useRef, useState } from 'react';


function TextFieldChain ({ title, placeHolder }) {

    const [ isActiveArrow, setActiveArrow ] = useState(false)
    const dispatch = useDispatch();
    const selectRef = useRef();
    const { prewievChain, isPrewievChain, isPrewiev } = useSelector(state => state.depositUser)


    const openHandler = () => {
        dispatch(setOpenChain(true))
        setActiveArrow(true)
        if(isActiveArrow === true) {
            dispatch(setOpenChain(false))
            setActiveArrow(false)
        }
    }

    const closeModal = (e) => {
        if(e.target !== selectRef.current) {
            dispatch(setOpenChain(false))
            setActiveArrow(false)
        }
    }

    useEffect(() => {
       document.body.addEventListener('click', closeModal)
       return () => {
       document.body.removeEventListener('click', closeModal)
       }
    }, [])

    return(

        <div className={isPrewiev ? `${style.root} ${style.top}` : style.root}>
            <h6 className={style.title}>{title}</h6>
            <div ref={selectRef} onClick={() => openHandler()} className={style.select}>
                {
                     isPrewievChain ?
                    prewievChain.map(({name, id}) => (
                        <p key={id} className={style.name}>{name}</p>
                    ))
                     :
                     <p className={style.text}>{placeHolder}</p>
                    }
                    <IoIosArrowDown className={isActiveArrow === true ? `${style.arrow} ${style.active}` : style.arrow}/>
            </div>
        </div>
    )
}

export default TextFieldChain;