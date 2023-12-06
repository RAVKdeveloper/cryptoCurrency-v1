import { useDispatch, useSelector } from 'react-redux';
import ContentForm from './Content/Content';
import Payment from './Payment/Payment';
import Tabs from './Tabs/Tabs';
import style from './style.module.css';
import iconImg from './../../../../../../img/OneClickBuy/Form/autoinvest.svg'
import { FaArrowRight } from "react-icons/fa6";
import { useContext, useEffect, useId, useState } from 'react';
import { AccountContext, NickNameAndID } from '../../../../../../App';
import axios from 'axios';
import { setOrder, chekBalanceFetch } from '../../../../../../redux/Slices/orderOneClick';
import { useNavigate } from 'react-router-dom';

const $apiORderOneClick = 'https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/ordersP2PAndOneClickBuy'

function FormOneClickBuy () {

    const { valueCrypto, valueFiat, fiatPrewiew, action, cryptoPrewiew, paymentName } = useSelector(state => state.oneClickBuy)
    const { chekBalance } = useSelector(state => state.orderOneClick)
    const [ localVal, setLocalVal ] = useState('')
    const [ obj ] = fiatPrewiew
    const dispatch = useDispatch()
    const { userId, verName } = useContext(AccountContext)
    const fiat = obj.article
    const balance = chekBalance.balance;
    const { userNick, userBalance } = useContext(NickNameAndID)
    const navigate = useNavigate()

    
    const addOrder = async () => {
        if(action === 'buy') {
            const date = new Date()
            console.log(date)
            const { data } = await axios.post(`${$apiORderOneClick}`, {  
                createdAt: `${Date.now()}`,
                crypto: cryptoPrewiew,
                fiat: fiat,
                takerUsername: userNick,
                takerCommisions: '0%',
                makerName: 'nicolas',
                balance: userBalance,
                status: 'loading',
                valueCrypto: valueCrypto,
                valueFiat: valueFiat,
                action: action,
                payment: paymentName,
                type: 'oneClickBuy',
                date: date.toLocaleString(),
                orderStatus: 'pending',
                verificationName: verName,
                makerId: '1',
                takerId: userId,
                orderNo: `${Date.now()}${userId}`,
                type: 'OneClickBuy',
            })
            
            navigate(`/user/one-click-buy/order/${data.orderNo}?createdAt=${data.createdAt}`)
            return dispatch(setOrder(data))
        } else if(action === 'sell') {
            dispatch(chekBalanceFetch(userId))
            if(Number(balance) > Number(valueCrypto)) {
                const date = new Date()
                const { data } = await axios.post(`${$apiORderOneClick}`, {  
                    createdAt: Date.now(),
                    crypto: cryptoPrewiew,
                    fiat: fiat,
                    takerUsername: userNick,
                    takerCommisions: '0%',
                    makerName: 'nicolas',
                    balance: userBalance,
                    status: 'loading',
                    valueCrypto: valueCrypto,
                    valueFiat: valueFiat,
                    action: action,
                    payment: paymentName,
                    type: 'oneClickBuy',
                    date: date.toLocaleString(),
                    orderStatus: 'pending',
                    makerId: '1',
                    takerId: userId,
                    orderNo: `${Date.now()}${userId}`,
                })

                navigate(`/user/one-click-buy/order/${data.orderNo}&createdAt=${data.createdAt}`)
                return dispatch(setOrder(data))
            }
            else{
                alert('Недостаточно средств')
            }
        }
    }

    useEffect(() => {
            if(valueCrypto !== '' && valueFiat !== '') {
               return setLocalVal(false)
            }
            return setLocalVal(true)
    }, [valueCrypto, valueFiat])

    const getClassnameBtn =  localVal === false ? style.btn : `${style.btn} ${style.disabled}` 
    const BtnValue = action === 'buy' ? 'Buy' : 'Sell'

    return(

        <section className={style.root}>
              <Tabs/>
              <section className={style.form}>
              <ContentForm/>
              </section>
              <Payment/>
              <button onClick={() => addOrder()} disabled={localVal ? true : false} className={getClassnameBtn}>{BtnValue} With {obj.article}</button>
              <div className={style.autoinvest}>
                <img src={iconImg} alt="icon" className={style.icon} /> 
                Auto-Invest 
                <FaArrowRight className={style.arrow} />
                </div>
        </section>
    )
}

export default FormOneClickBuy;