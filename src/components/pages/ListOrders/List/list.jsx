import { NavLink } from 'react-router-dom';
import { BiCheck } from "react-icons/bi";
import { RiMessage2Line } from "react-icons/ri";  
import style from './style.module.css'
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderListMaker, fetchOrderListTaker } from '../../../../redux/Slices/User/orderList';
import { AccountContext } from '../../../../App';
import empty from '../../../../img/ListOrder/empty.png'
import { IoCloseOutline } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import Pagination from '../Pagination/pagination';


function List () {

    const { actionType, ordersTaker, statusLoading, ordersMaker, coinPrewiv, typePrewiev, statusPrewiev, date, currentPage} = useSelector(state => state.orderList)
    const dispatch = useDispatch()
    const { userId } = useContext(AccountContext)

    useEffect(() => {
        const obj = {
            actionType: actionType,
            id: userId,
            status: statusPrewiev,
            coin: coinPrewiv,
            type: typePrewiev,
            date: date,
            page: currentPage,
        }

        dispatch(fetchOrderListTaker(obj))
        dispatch(fetchOrderListMaker(obj))
    }, [actionType, currentPage])

    const isFilter = actionType === '' ? ordersTaker : ordersTaker.filter(({ status }) => status === actionType)
    const isFilterMaker = actionType === '' ? ordersMaker : ordersMaker.filter(({ status }) => status === actionType)


    return (

        <section className={style.root}>
            <h5 className={style.titleAction}>Taker Orders:</h5>
            {
                isFilter.length > 0 ?
                isFilter.map(({ action, crypto, date, fiat, makerName, orderNo, orderStatus, takerCommisions, valueCrypto, valueFiat }) => (
                    <NavLink key={orderNo} to={`/user/one-click-buy/order/${orderNo}`} className={style.card}>
                    <div className={style.one}>
                        <p className={action === 'buy' ? `${style.action} ${style.buy}` : style.action}>{action} {crypto}</p>
                        <p className={style.orderNo}>{orderNo}</p>
                    </div>
                    <p className={style.fiatAmount}>{valueFiat} {fiat}</p>
                    <p className={style.price}>39 {fiat}</p>
                    <p className={style.coinAmount}>{valueCrypto} {crypto}</p>
                    <p className={style.commisia}>{takerCommisions} {crypto}</p>
                    <p className={style.contragent}>{makerName}</p>
                    <p className={style.status}>{orderStatus === 'complete' ? 
                    <BiCheck className={style.chek} /> : 
                    orderStatus === 'Canseled' ? 
                    <IoCloseOutline className={style.canseled} /> : 
                    <FaClock className={style.clock} />} 
                    {orderStatus}</p>
                    <p className={style.time}>{date}</p>
                    <div className={style.message}>
                       <RiMessage2Line className={style.icon} />
                    </div>
                  </NavLink>
                ))
                :
                <div className={style.empty}>
                    <img src={empty} alt="empty" className={style.emptyIcon} />
                    <p className={style.emptyText}>No Records Found</p>
                </div>
            }
            <h5 className={style.titleAction}>Maker Orders:</h5>
            {
                isFilterMaker.length > 0 ?
                isFilterMaker.map(({ action, crypto, date, fiat, makerName, orderNo, orderStatus, takerCommisions, valueCrypto, valueFiat }) => (
                    <NavLink key={orderNo} to={`/user/one-click-buy/order/${orderNo}`} className={style.card}>
                    <div className={style.one}>
                        <p className={action === 'sell' ? `${style.action} ${style.buy}` : style.action}>{action === 'buy' ? 'sell' : 'buy'} {crypto}</p>
                        <p className={style.orderNo}>{orderNo}</p>
                    </div>
                    <p className={style.fiatAmount}>{valueFiat} {fiat}</p>
                    <p className={style.price}>39 {fiat}</p>
                    <p className={style.coinAmount}>{valueCrypto} {crypto}</p>
                    <p className={style.commisia}>{takerCommisions} {crypto}</p>
                    <p className={style.contragent}>{makerName}</p>
                    <p className={style.status}>{orderStatus === 'complete' ? 
                    <BiCheck className={style.chek} /> : 
                    orderStatus === 'Canseled' ? 
                    <IoCloseOutline className={style.canseled} /> : 
                    <FaClock className={style.clock} />} 
                    {orderStatus}</p>
                    <p className={style.time}>{date}</p>
                    <div className={style.message}>
                       <RiMessage2Line className={style.icon} />
                    </div>
                  </NavLink>
                ))
                :
                <div className={style.empty}>
                    <img src={empty} alt="empty" className={style.emptyIcon} />
                    <p className={style.emptyText}>No Records Found</p>
                </div>
            }
            <Pagination isVisible={isFilter} isVisibleMaker={isFilterMaker} action={actionType} orders={ordersTaker} ordersMaker={ordersMaker} />
        </section>
)
}

export default List;