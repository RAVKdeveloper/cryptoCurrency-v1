import { useSelector } from 'react-redux';
import style from './style.module.css'
import { GoCopy } from "react-icons/go";
import { useRef } from 'react';
import { Copy } from '../../../../../../../utils/Copy';

function CardPay () {

    const { orderWithDb } = useSelector(state => state.orderOneClick)
    const copyName = useRef()
    const copyNumber = useRef()
    const [ order ] = orderWithDb
    

    return (

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