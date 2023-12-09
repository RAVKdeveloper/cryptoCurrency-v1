import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css'
import Message from './MessageUpPay';
import CardPay from './CardPay/card';
import { useContext, useEffect, useId, useState } from 'react';
import { chekBalanceFetch, completeOrders, getOrderUser, getReleased, putBalanceMinus, putOrderStatus } from '../../../../../../redux/Slices/orderOneClick';
import { AccountContext } from '../../../../../../App';



function OrderBody () {

    const { orderWithDb, chekBalance } = useSelector(state => state.orderOneClick)
    const [ goRequest, setGorequest ] = useState(false)
    const [ goCanceled, setGoCanseled ] = useState(false)
    const [ goReleased, setGoReleased ] = useState(false)
    const [ order ] = orderWithDb
    const dispatch = useDispatch()
    const { userId } = useContext(AccountContext)
    const isBuyOrSell = order.action === 'sell' ? `${style.columnFiat} ${style.sell}` : style.columnFiat


    const getRequestSell = async (id) => {
        await dispatch(chekBalanceFetch(id))
        }

    const putBalance = async (obj) => {
        const { balanceMaker, makerId, value } = obj

        if(Number(chekBalance.balance) > Number(order.valueCrypto)) {
            const objToRedux = {
                id: makerId,
                balance: balanceMaker,
                val: value,
            }
             await dispatch(putBalanceMinus(objToRedux))
        }
    }

    useEffect(() => {
        if(goRequest === true) {
            try {
               const obj = {
                 order: order.orderNo,
                 type: 'OneClickBuy',
                 status: 'To be released',
                 id: order.id,
                 statusOrder: 'loading'
               }
               dispatch(putOrderStatus(obj))
               setGorequest(false)
            } catch {
               alert('Произошла ошибка...')
            }
        }
        else if(goCanceled === true){
            try {
                const obj = {
                    order: order.orderNo,
                    type: 'OneClickBuy',
                    status: 'Canseled',
                    id: order.id,
                    statusOrder: 'loading'
                  }
                  dispatch(putOrderStatus(obj))
            } catch {
                alert('Произошла ошибка...')
            }
        }
    }, [goCanceled, goRequest])

    useEffect(() => {
        if(goReleased === true) {

            const obj = {
                takerId: order.takerId,
                makerId: order.makerId,
                value: order.valueCrypto,
                balance: order.balance,
                balanceMaker: chekBalance.balance
            }   

            const objComplete = {
                type: order.type,
                order: order.orderNo,
                status: 'complete',
                statusOrder: 'confirm',
                id: order.id
            }

        if(order.action === 'buy') {
            getRequestSell(order.makerId)
            putBalance(obj)
            dispatch(getReleased(obj))

            // const objGet = {
            //     user: order.takerId,
            //     order: order.orderNo,
            //     type: 'OneClickBuy'
            //  }


            dispatch(putOrderStatus(objComplete))

        }
        else{

            const objSellTaker = {
                balanceMaker: chekBalance.balance,
                makerId: order.takerId,
                value: order.valueCrypto,
            }
        
            getRequestSell(order.takerId)
            putBalance(objSellTaker)
            dispatch(getReleased(objSellTaker))
            dispatch(putOrderStatus(objComplete))
        }
        }
    }, [ goReleased ])


    return (

        <section className={style.root}>
            <div className={style.orderInfo}>
                <div className={style.titleRow}>
                    <p className={style.circle}></p>
                    <h5 className={style.title}>Order Info</h5>
                </div>
                <div className={style.columnRow}>
                    <article className={style.column}>
                        <span className={style.columnTitle}>Pay</span>
                        <span className={isBuyOrSell}>{order.valueFiat} {order.fiat}</span>
                    </article>
                    <article className={style.column}>
                        <span className={style.columnTitle}>Price</span>
                        <span className={style.colunmValue}>39 {order.fiat}</span>
                    </article>
                    <article className={style.column}>
                        <span className={style.columnTitle}>Total Quantity</span>
                        <span className={style.colunmValue}>{order.valueCrypto} {order.crypto}</span>
                    </article>
                    <article className={`${style.column} ${style.none}`}>
                        <span className={style.columnTitle}>Transaction Fees</span>
                        <span className={style.colunmValue}>{order.takerCommisions} {order.crypto}</span>
                    </article>
                </div>
                <Message/>
                <CardPay/>
                <div className={style.btnRow}>    
                         
                {
                    order.action === 'buy' ?
                    order.orderStatus === 'pending' && userId === order.takerId && order.action === 'buy' ?
                    <>
                    <div onClick={() => setGorequest(true)} className={style.btnActive}>Confirm Payment</div>
                    <div onClick={() => setGoCanseled(true)} className={style.bntCansel}>Cansel</div>
                    </>
                    :
                    order.orderStatus === 'To be released' && userId === order.takerId && order.action === 'buy' ?
                    <div onClick={() => setGoCanseled(true)} className={style.bntCansel}>Cansel</div>
                    :
                    <div className={style.bntCansel}>View My Assets</div>
                    :
                    null
                }
                {
                    order.makerId === userId && order.action === 'buy' &&
                    order.orderStatus === 'To be released' ? 
                    <div onClick={() => setGoReleased(true)} className={style.releseCoinBtn}>Relese Coins</div>
                    :
                    null
                }
                {
                    order.action === 'sell' && userId === order.takerId ? 
                    order.orderStatus === 'pending' ?
                    null
                    :
                     order.orderStatus === 'To be released' && userId === order.takerId ?
                     <div onClick={() => setGoReleased(true)} className={style.releseCoinBtn}>Relese Coins</div>
                     :
                     <div className={style.bntCansel}>View My Assets 1</div>
                     :
                     null
                }

                {/* Maker */} 

                {
                    order.action === 'sell' && userId === order.makerId ? 
                    order.orderStatus === 'pending' ?
                    <>
                    <div onClick={() => setGorequest(true)} className={style.btnActive}>Confirm Payment</div>
                    <div onClick={() => setGoCanseled(true)} className={style.bntCansel}>Cansel</div>
                    </>
                    :
                    order.orderStatus === 'To be released' ? 
                    <div onClick={() => setGoCanseled(true)} className={style.bntCansel}>Cansel</div>
                    :
                    <div className={style.bntCansel}>View My Assets</div>
                    :
                    null
                }
                </div>
            </div>
           
        </section>
    )
}

export default OrderBody;