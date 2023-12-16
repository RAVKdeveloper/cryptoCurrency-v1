import style from './style.module.css'
import { useEffect, useState } from 'react';
import { setDateFetch } from '../../../../../redux/Slices/User/orderList';
import { FaCalendarAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';


function DateFilter () {

   const [ date, setDate ] = useState('')
   const [ inpVal, setInpVal ] = useState('')
   const [ isDate, setIsDate ] = useState(true)
   const dispatch = useDispatch()

   const hahdlerInput = e => {
    setInpVal(e.target.value)
    setIsDate(true)
   }

   const handlerDate = e => {
      setDate(e.target.value)
      setIsDate(false)
   }

   useEffect(() => {
    if(inpVal.length === 10) {
        dispatch(setDateFetch(inpVal)) 
    } else {
        dispatch(setDateFetch(date))
    }
   }, [date, inpVal])

 
    return (

        <section className={style.root}>
            <h5 className={style.titel}>Date</h5>
            <div className={style.container}>
                <div className={style.inputBox}>
                    <input value={date} onChange={handlerDate} type="date" className={style.date} />
                    <input value={isDate ? inpVal : date} onChange={hahdlerInput} type="text" className={style.psevdoDate} placeholder='Entry Date' />
                    <FaCalendarAlt className={style.icon} />
                </div>
            </div>
        </section>
    )
}

export default DateFilter;