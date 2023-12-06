import { useEffect, useState } from 'react';
import style from './style.module.css'
import { FaClock } from "react-icons/fa6";
import { useSelector } from 'react-redux';


function OrderHeader () {

    const { orderWithDb } = useSelector(state => state.orderOneClick)
    const [ order ] = orderWithDb

    const getLcSec = localStorage.getItem(`sec${order.id}`) ? localStorage.getItem(`sec${order.id}`) : 60
    const getLcMin = localStorage.getItem(`min${order.id}`) ? localStorage.getItem(`min${order.id}`) : 14

    let [ min, setMin ] = useState(getLcMin)
    let [ sec, setSec ] = useState(getLcSec)

    localStorage.setItem(`sec${order.id}`, sec)
    localStorage.setItem(`min${order.id}`, min)


    useEffect(() => {
        setTimeout(() => {
            if(sec === 0) {
                setMin(prev => prev -1)
                setSec(59)
            }  else{
                setSec(prev => prev - 1)
            }
        }, 1000)
    }, [sec, min])
   

    return (

        <section className={style.root}>
            <div className={style.headRow}>
                <div className={style.headContent}>
                    <FaClock className={style.clockIcon} />
                    <div className={style.headTextColumn}>
                        <p className={style.headTitle}>Payment in Processing</p>
                        <p className={style.headsubTitle}>The payment is made approximately {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}</p>
                    </div>
                </div>
                <div className={style.taimerBody}>
                    <article className={style.taimVal}>{min < 10 ? `0${min}` : min}</article>
                    :
                    <article className={style.taimVal}>{sec < 10 ? `0${sec}` : sec}</article>
                </div>
            </div>
            <div className={style.bodyRow}>
                 <article className={style.column}>
                     <p className={`${style.number} ${style.active}`}>1</p>
                     <p className={`${style.actionUser} ${style.active}`}>Your payment is being processed</p>
                 </article>
                 <article className={style.column}>
                     <p className={style.number}>2</p>
                     <p className={style.actionUser}>Coins are being transferred</p>
                 </article> 
                 <article className={`${style.column} ${style.none}`}>
                     <p className={style.number}>3</p>
                     <p className={style.actionUser}>Transaction Completed</p>
                 </article>
            </div>
        </section>
    )  
}

export default OrderHeader; 