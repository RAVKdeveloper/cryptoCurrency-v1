import { useDispatch, useSelector } from 'react-redux';
import ModalRating from './Modal/Modal';
import style from './style.module.css'
import { AiOutlineLike } from "react-icons/ai";
import { setOpenModal, setAction } from '../../../../../../redux/Slices/User/orderRatings';


function RatingOrder () {

    const dispatch = useDispatch()
    const { orderWithDb } = useSelector(state => state.orderOneClick)
    const [ order ] = orderWithDb

    const handlerOpenModal = () => {
        dispatch(setOpenModal(true))
    }

    return (

        order.orderStatus === 'complete' &&
        <section className={style.root}>
            <div className={style.titleRow}>
            <p className={style.title}>Leave A Review</p>
            </div>
            <div className={style.content}>
                <p className={style.subTitle}>How was your experience with this buyer?</p>
                <div className={style.btnRatings}>
                    <div onClick={() => { handlerOpenModal(); dispatch(setAction('Good')) }} className={style.btnGood}>
                       <div className={style.likeBody}>
                          <AiOutlineLike className={style.like} />
                       </div>
                       <p className={style.btnText}>Good</p>
                    </div>
                    <div onClick={() => { handlerOpenModal(); dispatch(setAction('Bad')) }} className={style.btnBad}>
                       <div className={style.likeBody}>
                          <AiOutlineLike className={style.disLaik} />
                       </div>
                       <p className={style.btnText}>Bad</p>
                    </div>
                </div>
            </div>
              <ModalRating/>
        </section>
    )
}

export default RatingOrder;