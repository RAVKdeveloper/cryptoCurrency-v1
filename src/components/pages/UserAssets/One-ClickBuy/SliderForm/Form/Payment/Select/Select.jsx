import style from  './style.module.css';
import p2pImg from './../../../../../../../../img/OneClickBuy/Payment/p2p.png';
import arrowImg from './../../../../../../../../img/OneClickBuy/Payment/arrow.png';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenPayment } from '../../../../../../../../redux/Slices/oneClickBuy';


function SelectPayment () {

    const { paymentName, openPayment, paymentPrewiev } = useSelector(state => state.oneClickBuy);
    const dispatch = useDispatch()

    const openModal = () => {
        return dispatch(setOpenPayment(true))
    }


    return (

        <section onClick={() => openModal()} className={style.root}>
            {
                paymentName !== '' || paymentPrewiev.length > 0  ?
                <>
                <div className={style.content}>
                   <img src={p2pImg} alt="icon" className={style.icon} />
                   <p className={style.name}>{paymentName}</p>
                </div>
                <img src={arrowImg} alt="arrow" className={openPayment ? `${style.arrow} ${style.active}` : style.arrow} />
                </>
                :
                <div className={style.loading}>
                    <div className={style.loader}></div>
                </div>
              }  
        </section>
    )
}

export default SelectPayment;