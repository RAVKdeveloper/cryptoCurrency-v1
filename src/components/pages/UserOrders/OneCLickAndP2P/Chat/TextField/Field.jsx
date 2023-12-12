import { useContext, useEffect, useState } from 'react';
import style from './style.module.css'
import { FaPlus } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { AccountContext, NickNameAndID } from '../../../../../../App';
import { createMessage, fetchMessage } from '../../../../../../redux/Slices/User/orderChat';


function TextFieldChat () {

    const [ value, setValue ] = useState('')
    const [ click, setClick ] = useState('')
    const { orderWithDb } = useSelector(state => state.orderOneClick)
    const [ order ] = orderWithDb
    const { userId } = useContext(AccountContext)
    const { userNick } = useContext(NickNameAndID)
    const dispatch = useDispatch()


    useEffect(() => {
        if(click === true) {
           const obj = {
              val: value,
              orderId: order.id,
              userId: userId,
              nick: userNick,
           }

        dispatch(createMessage(obj))
        setClick(false)
        setValue('')
        }
    }, [click])


    return (

        <section className={style.root}>
            <textarea value={value} onChange={e => setValue(e.target.value)} type="text" className={style.input} placeholder='Enter your message' />
            <div className={style.btnRow}>
                <div className={style.btn}><FaPlus className={style.plus} /></div>
                <div onClick={() => setClick(true)} className={`${style.btn} ${style.block}`}><IoSend /></div>
            </div>
        </section>
    )
}

export default TextFieldChat;