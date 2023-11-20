import style from './style.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { setOpenModal, setIsPrewiev } from '../../redux/Slices/depositUser';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

function TextField ({ title, placeHolder }) {

    const [ isActiveArrow, setIsActiveArrow ] = useState(false)
    const { isPrewiev, prewiev } = useSelector((state) => state.depositUser)
    const dispatch = useDispatch();
    const select = useRef();

    const openHandler = () => {
        dispatch(setOpenModal(true))
        setIsActiveArrow(true)
        if(isPrewiev === true) {
            dispatch(setOpenModal(false))
            setIsActiveArrow(false)
        }
    }

    const closeModal = (event) => {
        console.log('clcik')
        if(event.target === select.current) {
             dispatch(setOpenModal(true))
             setIsActiveArrow(true)
           }  else{
               dispatch(setOpenModal(false))
               setIsActiveArrow(false) 
           }          
    }

    useEffect(() => {
      document.body.addEventListener('click', closeModal)

      return () => {
        document.body.removeEventListener('click', closeModal)
      }
    }, [])

    return(

        <div className={style.root}>
            <h6 className={style.title}>{title}</h6>
            <div ref={select} onClick={() => openHandler()} className={style.select}>
                {
                    isPrewiev ? 
                    prewiev.map(({ image, cryptoName, subtitle, id }) => (
                 <div key={id} className={style.selectPrewiev}>
                    <img src={image} alt="icon" className={style.icon} />
                    <span className={style.bigName}>{cryptoName}</span>
                    <span className={style.name}>{subtitle}</span>
                 </div>
                    ))
                 :
                 <p className={style.text}>{placeHolder}</p>
                }
                 <IoIosArrowDown className={isActiveArrow === true ? `${style.arrow} ${style.active}` : style.arrow}/>
            </div>
        </div>
    )
}

export default TextField;