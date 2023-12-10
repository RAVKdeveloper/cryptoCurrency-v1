import { useEffect, useState } from 'react';
import style from './style.module.css'
import { FaClock } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import CompleteCardsHeader from './CompleteCardsRow/complete';


function OrderHeader () {

    const { orderWithDb } = useSelector(state => state.orderOneClick)
    const [ order ] = orderWithDb

    const getLcSec = localStorage.getItem(`sec${order.id}`) ? localStorage.getItem(`sec${order.id}`) : 60
    const getLcMin = localStorage.getItem(`min${order.id}`) ? localStorage.getItem(`min${order.id}`) : 14

    let [ min, setMin ] = useState(getLcMin)
    let [ sec, setSec ] = useState(getLcSec)

    useEffect(() => {
        if(order.orderStatus === 'To be released' || order.orderStatus === 'confirm') { 
            localStorage.removeItem(`sec${order.id}`, sec)
            localStorage.removeItem(`min${order.id}`, min)
    
            console.log('remove')
        } else if(order.orderStatus === 'pending') {
            localStorage.setItem(`sec${order.id}`, sec)
            localStorage.setItem(`min${order.id}`, min)
        }
    }, [order, min, sec])


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
   

    const pendingSubtitle =  'The payment is made approximately' + ` ${min < 10 ? '0'+min : min}:${sec < 10 ? '0'+sec : sec}`
    const isSubTitle = order.orderStatus === 'pending' ? pendingSubtitle : order.orderStatus === 'To be released' ? 'Release coins to you wallet' : `Received ${order.valueCrypto} ${order.crypto}`
    const isTitle = order.orderStatus === 'pending' ? 'Payment in Processing' : order.orderStatus === 'To be released' ? 'Release Coins' : 'Transaction Completed'

    return (

        <section className={style.root}>
            <div className={style.headRow}>
                <div className={style.headContent}>
                    {
                        order.orderStatus === 'complete' ?
                        <div className={style.succes}><TiTick className={style.tick} /></div>
                        :
                        order.orderStatus === 'Canseled' ?
                        <div className={style.canseled}><IoClose className={style.canselIcon} /></div>
                        :
                        <FaClock className={style.clockIcon} />
                    }
                    <div className={style.headTextColumn}>
                        <p className={style.headTitle}>{order.orderStatus === 'Canseled' ? 'Canseled' : isTitle }</p>
                        <p className={style.headsubTitle}>{order.orderStatus === 'Canseled' ? 'Your order has been canceled' : isSubTitle}</p>
                    </div>
                </div>
                {
                 order.orderStatus === 'pending'  && 
                <div className={style.taimerBody}>
                    <article className={style.taimVal}>{min < 10 ? `0${min}` : min}</article>
                    :
                    <article className={style.taimVal}>{sec < 10 ? `0${sec}` : sec}</article>
                </div>
                }
            </div>
            {
                order.orderStatus === 'pending' ||  order.orderStatus === 'To be released' ? 
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
               :
               order.orderStatus === 'complete' ?
               <CompleteCardsHeader/>
               :
               null
            }
        </section>
    )  
}

export default OrderHeader; 