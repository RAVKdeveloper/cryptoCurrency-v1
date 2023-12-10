import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css'
import { AiOutlineLike } from "react-icons/ai";
import { createRatingOrder, setAction, setAnonymus, setOpenModal } from '../../../../../../../redux/Slices/User/orderRatings';
import { shortCutsOrderRatingBad, shortCutsOrderRatingGood } from '../../../../../../../db/dbPayment';
import { useContext, useEffect, useRef, useState } from 'react';
import { AccountContext, NickNameAndID } from '../../../../../../../App';
import { IoCloseSharp } from "react-icons/io5";


function ModalRating () {

    const { orderWithDb } = useSelector(state => state.orderOneClick)
    const { isAction, openModal, isAnonymus } = useSelector(state => state.orderRatings)
    const [ order ] = orderWithDb
    const dispatch = useDispatch()
    const [ textLen, setTextLen ] = useState('0')
    const textarea = useRef()
    const { userId } = useContext(AccountContext)
    const { userNick } = useContext(NickNameAndID)
    const [ reqRating, setReqRating ] = useState(false)

    const isBuyer = order.action === 'buy' && order.takerId === userId ? 'seller' : 'buyer'

    const addGood = () => {
        dispatch(setAction('Good'))
    }

    const addBad = () => {
        dispatch(setAction('Bad'))
    }

    const counterText = (e) => {
        setTextLen(e.target.value.length)
    }

    const addValueShortCut = (el) => {
        if(textarea.current.value === '') {
            textarea.current.value += el
            setTextLen(textarea.current.value.length) 
        } else {
            textarea.current.value += `, ${el}`
            setTextLen(textarea.current.value.length)
        }
    } 

    const addAnonymus = () => {
       if(isAnonymus === false) {
        return dispatch(setAnonymus(true))
       }
       return dispatch(setAnonymus(false))
    }

    useEffect(() => {
    if(reqRating === true) {
       try{

        const isGood = isAction === 'Good' ? true : false
        const hoIsUser = userId === order.takerId ? order.makerId : order.takerId 

        const obj = {
            rewierId: userId,
            recipientId: hoIsUser,
            good: isGood,
            rewievtext: textarea.current.value,
            rewierName: userNick,
            anonymus: isAnonymus,
            orderId: order.orderNo,
        }

        dispatch(createRatingOrder(obj))
          
       } catch {
        alert('Error...')
       }
    }
    }, [reqRating])

    return (

        <section className={openModal ? `${style.root} ${style.active}` : style.root}>
            <div className={style.modal}>
                 <h5 className={style.title}>Leave A Review</h5>
                 <p className={style.subtitle}>How was your experience with this {isBuyer}?</p>
                 <div className={style.mainBtnRow}>
                 <div onClick={addGood} className={isAction === 'Good' ? `${style.btnGood} ${style.good}` : style.btnGood}>
                       <div className={style.likeBody}>
                          <AiOutlineLike className={style.like} />
                       </div>
                       <p className={style.btnText}>Good</p>
                    </div>
                    <div onClick={addBad} className={isAction === 'Bad' ? `${style.btnBad} ${style.bad}` : style.btnBad}>
                       <div className={style.likeBody}>
                          <AiOutlineLike className={style.disLaik} />
                       </div>
                       <p className={style.btnText}>Bad</p>
                    </div>
                 </div>
                 <div className={style.btnShortCutRow}>
                    {
                        isAction === 'Good' ?
                        shortCutsOrderRatingGood.map((el, i) => (
                        <p key={i} onClick={() => addValueShortCut(el)} className={style.btnShortCut}>{el}</p>
                        ))
                        :
                        shortCutsOrderRatingBad.map((el, i) => (
                            <p key={i} onClick={() => addValueShortCut(el)} className={style.btnShortCut}>{el}</p>
                        ))
                    }
                 </div>
                 <div className={style.inputBox}>
                    <textarea ref={textarea} onChange={(e) => counterText(e)} placeholder="Please leave your review here. (Max. 500 characters)" className={style.textarea}></textarea>
                    <p className={style.counterVal}>{textLen} / 500</p>
                 </div>
                 <div className={style.checkboxRow}>
                    <div onClick={addAnonymus} className={isAnonymus ? `${style.checkbox} ${style.chek}` : style.checkbox}></div>
                    <p className={style.textCheckBox}>Anonymous <span>(By ticking this checkbox, your rating will be anonymous.)</span></p>
                 </div>
                 <div onClick={() => setReqRating(true)} className={style.btnComplete}>Confirm</div>
                 <div onClick={() => dispatch(setOpenModal(false))} className={style.closeBody}>
                      <IoCloseSharp className={style.close} />
                 </div>
            </div>
        </section>
    )
}

export default ModalRating;