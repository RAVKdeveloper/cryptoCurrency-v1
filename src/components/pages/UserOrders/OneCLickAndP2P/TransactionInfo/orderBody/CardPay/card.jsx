import { useSelector } from 'react-redux';
import style from './style.module.css'
import { GoCopy } from "react-icons/go";
import { useRef } from 'react';
import { Copy } from '../../../../../../../utils/Copy';
import canselPay from '../../../../../../../img/orderP2POneClick/canselePay.png'

function CardPay () {

    const { orderWithDb } = useSelector(state => state.orderOneClick)
    const copyName = useRef()
    const copyNumber = useRef()
    const [ order ] = orderWithDb
    

    return (

        order.orderStatus === 'Canseled' ?
        <section className={style.canseledRoot}>
            <img src={canselPay} alt="canseledIcon" className={style.iconCanseled} />
            <p className={style.canselText}>
            Unable to retrieve the payment method! The order has already been canceled.
            </p>
        </section>
        :
        <section className={style.root}>
            <div className={style.headCard}>
                <span className={style.bank}>{order.payment}</span>
            </div>
            <div className={style.bodyCard}>
                <div className={style.row}>
                     <p className={style.title}>Name</p>
                     <p className={style.value}><span ref={copyName}>Suleiman Libid Aihalu</span> <GoCopy className={style.copy} onClick={() => Copy(copyName)} /></p>
                </div>
                <div className={style.row}>
                     <p className={style.title}>Bank Account Number</p>
                     <p className={style.value}><span ref={copyNumber}>22005435354346</span> <GoCopy className={style.copy} onClick={() => Copy(copyNumber)} /></p>
                </div>
            </div>
        </section>
    )
}

export default CardPay;