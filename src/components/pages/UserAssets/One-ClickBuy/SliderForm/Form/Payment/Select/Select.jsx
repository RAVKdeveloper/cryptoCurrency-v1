import style from  './style.module.css';
import p2pImg from './../../../../../../../../img/OneClickBuy/Payment/p2p.png';
import arrowImg from './../../../../../../../../img/OneClickBuy/Payment/arrow.png';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenPayment } from '../../../../../../../../redux/Slices/oneClickBuy';


function SelectPayment () {

    const { paymentName, openPayment } = useSelector(state => state.oneClickBuy)
    const dispatch = useDispatch()

    const openModal = () => {
        if(openPayment === true) {
            return dispatch(setOpenPayment(false))
        }
        return dispatch(setOpenPayment(true))
    }

    return (

        <section onClick={() => openModal()} className={style.root}>
             <div className={style.content}>
                <img src={p2pImg} alt="icon" className={style.icon} />
                <p className={style.name}>{paymentName}</p>
             </div>
             <img src={arrowImg} alt="arrow" className={openPayment ? `${style.arrow} ${style.active}` : style.arrow} />
        </section>
    )
}

export default SelectPayment;