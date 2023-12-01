import style from './../SelectFiat/style.module.css'
import { useState, useRef, useEffect } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { createError, removeError } from './../../../../../../../../Helpers/Validate/Validate';
import { useDispatch, useSelector } from 'react-redux';
import { setClickCrypto, setConvertCrypto, setValueCrypto, setConvertFiat, setValueFiat } from '../../../../../../../../redux/Slices/oneClickBuy';



function SelectCrypto () {

    const [ close, setClose ] = useState('')
    const open = useSelector(state => state.oneClickBuy.openCrypto)
    const prewiev = useSelector(state => state.oneClickBuy.cryptoPrewiew)
    const valConvert = useSelector(state => state.oneClickBuy.convertFiat)
    const valueCrypto = useSelector(state => state.oneClickBuy.valueCrypto)
    const valueFiat = useSelector(state => state.oneClickBuy.valueFiat)
    const dispatch = useDispatch()
    const inputRef = useRef()
    const selectRef = useRef()


       useEffect(() => {
           dispatch(setValueCrypto(inputRef.current.value))
       }, [valueCrypto, valueFiat])


    
    const addLocalValue = (e) => { 
        let val = e.replace(/[a-z]/, '') 
        if(val !== '' || valConvert !== '') {
            removeError(inputRef)
            if(/[0-9]/g.test(e)) {
                console.log('eeeeeeeeee')
                let num = Number(e) 
                let numConv = Number(val)

                const proverka = numConv < 3200 || numConv > 24000

                if(num < 82 || num > 600 || proverka) {
                  removeError(inputRef)
                  createError(inputRef, 'Min. 82 USDT - Max. 600 USDT')
            } 

                dispatch(setConvertCrypto(num))
                dispatch(setValueCrypto(inputRef.current.value))
                setClose(num)
             }      
        } else{
            setClose('')
            removeError(inputRef)
            dispatch(setConvertCrypto(''))
            dispatch(setValueFiat(''))
            dispatch(setValueCrypto(''))
        }
    }

    const addModal = () => {
        if(open === true) {
            return dispatch(setClickCrypto(false))
        }
        return dispatch(setClickCrypto(true))
    }

    
    const closeModal = (e) => {
        if(e.target !== selectRef.current) {
             dispatch(setClickCrypto(false))
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

    const resetConvertValue = () => {
        dispatch(setConvertCrypto(''))
        dispatch(setConvertFiat(''))
        setClose('')
        dispatch(setValueFiat(''))
        dispatch(setValueCrypto(''))
    }

    const getToValue = valConvert === '' || valConvert === '0.00' ? close : valConvert;

   return (
       
    <div className={style.root}>
    <div className={style.inputBox}>
       <p className={style.name}>Receive =</p>
       <input ref={inputRef} value={getToValue} onChange={(e) => addLocalValue(e.target.value)} type="text" className={style.input} placeholder='Enter purchase amount'/> 
       {
           close !== '' ?
           <IoMdCloseCircle onClick={() => resetConvertValue()} className={style.close}/>
             :
             null
       }
    </div>
    <div ref={selectRef} onClick={() => addModal()} className={style.select}>
            <p className={style.nameFiat}>{prewiev}</p>
            <IoIosArrowDown className={ open ? `${style.arrow} ${style.active}` : style.arrow} />
    </div>
</div>
   )
}

export default SelectCrypto;