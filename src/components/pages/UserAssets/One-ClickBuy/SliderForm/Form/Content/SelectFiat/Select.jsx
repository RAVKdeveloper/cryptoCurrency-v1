import { useState, useRef, useEffect } from 'react';
import style from './style.module.css';
import { IoMdCloseCircle } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { createError, removeError } from './../../../../../../../../Helpers/Validate/Validate';
import { useDispatch, useSelector } from 'react-redux';
import { setClickFiat } from '../../../../../../../../redux/Slices/oneClickBuy';


function Select () {

    const [ close, setClose ] = useState('')
    const open = useSelector(state => state.oneClickBuy.openFiat)
    const prewiev = useSelector(state => state.oneClickBuy.fiatPrewiew)
    const dispatch = useDispatch()
    const inputRef = useRef()
    const selectRef = useRef()
    const [ obj ] = prewiev
    
    const addLocalValue = (e) => {  
        if(e !== '') {
            removeError(inputRef)
            if(/[0-9]/g.test(e)) {
                console.log('eeeeeeeeee')
                let num = Number(e) 
                let val = e.replace(/[a-z]/, '')
                        
                setClose(val)

                if(num < 2400 || num > 25000) {
                   removeError(inputRef)
                  createError(inputRef, 'Min. 2,400 UAH - Max. 24,999 UAH')
            }
             }      
        } else{
            setClose('')
            removeError(inputRef)
        }
    }

    const addModal = () => {
        if(open === true) {
            return dispatch(setClickFiat(false))
        }
        return dispatch(setClickFiat(true))
    }

    
    const closeModal = (e) => {
        if(e.target !== selectRef.current) {
             dispatch(setClickFiat(false))
        } 
    }

    useEffect(() => {
        if(open === true) {
            document.body.addEventListener('click', closeModal)
        }
        return () => {
            document.body.removeEventListener('click', closeModal)
        }
    }, [open])

    return(

        <div className={style.root}>
             <div className={style.inputBox}>
                <p className={style.name}>Spend</p>
                <input ref={inputRef} value={close} onChange={(e) => addLocalValue(e.target.value)} type="text" className={style.input} placeholder='100 - 1,800,000'/> 
                {
                    close !== '' ?
                    <IoMdCloseCircle onClick={() => setClose('')} className={style.close}/>
                      :
                      null
                }
             </div>
             <div ref={selectRef} onClick={() => addModal()} className={style.select}>
                     <p className={style.nameFiat}>{obj.article}</p>
                     <IoIosArrowDown className={ open ? `${style.arrow} ${style.active}` : style.arrow} />
             </div>
        </div>
    )
}

export default Select;