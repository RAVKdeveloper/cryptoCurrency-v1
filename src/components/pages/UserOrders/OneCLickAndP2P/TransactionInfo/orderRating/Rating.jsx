import { useDispatch, useSelector } from 'react-redux';
import ModalRating from './Modal/Modal';
import style from './style.module.css'
import { AiOutlineLike } from "react-icons/ai";
import { setOpenModal, setAction, fetchOrderRating, deleteOrderRating } from '../../../../../../redux/Slices/User/orderRatings';
import { useContext, useEffect } from 'react';
import { AccountContext } from '../../../../../../App';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";


function RatingOrder () {

    const dispatch = useDispatch()
    const { orderWithDb } = useSelector(state => state.orderOneClick)
    const [ order ] = orderWithDb
    const { userId } = useContext(AccountContext)
    const { orderRating } = useSelector(state => state.orderRatings)
    const [ rating ] = orderRating

    const isTitle = orderRating.length < 1 ? 'Leave A Review' : 'My Ratings'

    console.log(orderRating)


    const handlerOpenModal = () => {
        dispatch(setOpenModal(true))
    }

    useEffect(() => {
       const obj = {
        rewierId: userId,
        orderId: order.id,
       }

       dispatch(fetchOrderRating(obj))  
    }, [])

    const deleteRating = (id) => {
        try {

            const obj = { id: id, orderId: order.id }

            dispatch(deleteOrderRating(obj))
    
            setTimeout(() => {
                const obj = {
                    rewierId: userId,
                    orderId: order.orderNo,
                   }
            
                   dispatch(fetchOrderRating(obj))  
            }, 1500)

        } catch {
            alert('Error...')
        }
    }

    return (

        order.orderStatus === 'complete' &&
        <section className={style.root}>
            <div className={style.titleRow}>
            <p className={style.title}>{isTitle}</p>
            {
                orderRating.length > 0 && 
                <div className={style.containerTitles}>
                   <FaRegEdit onClick={handlerOpenModal} className={style.iconTitle} />
                   <RiDeleteBin6Line onClick={() => deleteRating(rating.id)} className={style.iconTitle} />
                </div>
            }
            </div>
            <div className={style.content}>
                {
                    orderRating.length < 1 && 
                <p className={style.subTitle}>How was your experience with this buyer?</p>
                }
                <div className={style.btnRatings}>
                    { orderRating.length < 1 &&  
                    <>
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
                    </>
                    }
                    {
                        rating === undefined ? 
                        null
                        :
                        rating.good === true ? 
                        <div className={`${style.btnGood} ${style.good}`}>
                        <div className={style.likeBody}>
                           <AiOutlineLike className={style.like} />
                        </div>
                        <p className={style.btnText}>Good</p>
                     </div>
                        :
                        <div className={`${style.btnBad} ${style.bad}`}>
                        <div className={style.likeBody}>
                           <AiOutlineLike className={style.disLaik} />
                        </div>
                        <p className={style.btnText}>Bad</p>
                     </div>
                    }
                </div>
                {
                        orderRating.length > 0 && 
                        <p className={style.date}>{rating.date}</p>
                }
            </div>
              <ModalRating/>
        </section>
    )
}

export default RatingOrder;