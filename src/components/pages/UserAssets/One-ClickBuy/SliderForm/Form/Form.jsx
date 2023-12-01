import { useSelector } from 'react-redux';
import ContentForm from './Content/Content';
import Payment from './Payment/Payment';
import Tabs from './Tabs/Tabs';
import style from './style.module.css';
import iconImg from './../../../../../../img/OneClickBuy/Form/autoinvest.svg'
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from 'react';



function FormOneClickBuy () {

    const { valueCrypto, valueFiat } = useSelector(state => state.oneClickBuy)
    const [ localVal, setLocalVal ] = useState('')


    useEffect(() => {
            if(valueCrypto !== '' && valueFiat !== '') {
               return setLocalVal(false)
            }
            return setLocalVal(true)
    }, [valueCrypto, valueFiat])

    return(

        <section className={style.root}>
              <Tabs/>
              <section className={style.form}>
              <ContentForm/>
              </section>
              <Payment/>
              <button disabled={localVal ? true : false} className={ localVal === false ? style.btn : `${style.btn} ${style.disabled}` }>Buy With UAH</button>
              <div className={style.autoinvest}>
                <img src={iconImg} alt="icon" className={style.icon} /> 
                Auto-Invest 
                <FaArrowRight className={style.arrow} />
                </div>
        </section>
    )
}

export default FormOneClickBuy;