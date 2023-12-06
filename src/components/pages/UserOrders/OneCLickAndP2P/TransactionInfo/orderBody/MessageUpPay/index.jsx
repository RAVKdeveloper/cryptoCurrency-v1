import { useSelector } from 'react-redux';
import style from './style.module.css'


function Message () {

    const { orderWithDb } = useSelector(state => state.orderOneClick)
    const [ order ] = orderWithDb

    return (

        <section className={style.root}>
            <div className={style.titleRow}>
                <div className={style.circle}></div>
                <h5 className={style.title}>Payment Method</h5>
            </div>
            <div className={style.message}>
                {
                    order.action === 'buy' &&
                  <p className={style.messText}>1. Please use <span>{order.verificationName}</span> when making payment.</p>
                }
                  <p className={style.messText}>2. Make sure not to remark sensitive words such as "BTC/USDT purchase" when transferring fiat, otherwise the transfer may fail.</p>
            </div>
        </section>
    )
}

export default Message;