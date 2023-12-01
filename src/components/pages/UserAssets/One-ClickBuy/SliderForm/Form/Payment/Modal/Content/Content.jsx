import style from './style.module.css';
import p2pImg from './../../../../../../../../../img/OneClickBuy/Payment/p2p.png'
import { payment } from '../../../../../../../../../db/dbPayment';
import { useDispatch, useSelector } from 'react-redux';
import { setPayment, fetchPaymentListAll, fetchPaymentPrewiev } from '../../../../../../../../../redux/Slices/oneClickBuy';
import { useEffect } from 'react';


function ContentPayment () {

    const { fiatPrewiew, paymentAll, paymentPrewiev, cryptoPrewiew } = useSelector(state => state.oneClickBuy) 
    const dispatch = useDispatch()
    const obj  = paymentPrewiev[0]
    const [ prewiev ] = fiatPrewiew

    if(paymentPrewiev.length > 0) {
       dispatch(setPayment(obj.bank))
    }

    useEffect(() => {
        try{
            const [ obj ] = fiatPrewiew
            dispatch(fetchPaymentListAll(obj.article))
            dispatch(fetchPaymentPrewiev(obj.article))
        } catch {
         alert('Error')
        }
    }, [fiatPrewiew])

    return (

        <div className={style.root}>
            <div className={style.scroll}>
             <span className={style.title}>Recommended</span>
             <div className={style.contentRec}>
               {
                  paymentPrewiev.length > 0 ? 
                  paymentPrewiev.map(({ bank, id }) => (
                     <article key={id} className={style.card}>
                     <div className={style.cardContent}>
                        <img src={p2pImg} alt="icon" className={style.icon} />
                        <p className={style.name}>{bank}</p>
                     </div>
                     <div className={style.convertCard}>
                        <p className={style.fiat}>39 {prewiev.article}</p>
                        <p className={style.crypto}>= 1 {cryptoPrewiew}</p>
                     </div>
                   </article>
                  ))
                  :
                  <div className={style.emptyPrewiev}>Empty...</div>
               }
             </div>
             <span className={style.titleP2P}><span>P2P</span> Match with sellers in just one click</span>
             <div className={style.contentRec}>
               {
                  paymentAll.length > 0 ? 
                  paymentAll.map(({ bank, id }) => (
                    <article key={id} className={style.card}>
                     <div className={style.cardContent}>
                        <img src={p2pImg} alt="icon" className={style.icon} />
                        <p className={style.name}>{bank}</p>
                     </div>
                     <div className={style.convertCard}>
                        <p className={style.fiat}>39 {prewiev.article}</p>
                        <p className={style.crypto}>= 1 {cryptoPrewiew}</p>
                     </div>
                   </article>
                  ))
                   :
                  <div className={style.empty}>Empty...</div>
               }
             </div>
             </div>
             <p className={style.postScriptum}>Would you like to pay with another method? Check out Bybit P2P Trading.</p>
        </div>
    )
}

export default ContentPayment;