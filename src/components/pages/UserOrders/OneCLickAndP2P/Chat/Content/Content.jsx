import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css'
import { useContext, useEffect } from 'react';
import { AccountContext } from '../../../../../../App';
import { fetchMessage } from '../../../../../../redux/Slices/User/orderChat';
import { NavLink } from 'react-router-dom';


function ContentChat () {

    const { orderWithDb } = useSelector(state => state.orderOneClick)
    const { message } = useSelector(state => state.orderChat)
    const [ order ] = orderWithDb
    const { userId } = useContext(AccountContext)
    const dispatch = useDispatch()

   
    useEffect(() => {
        dispatch(fetchMessage(order.id))
    }, [])

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchMessage(order.id))
        }, 20000)
    }, [message])

    return (

        <section className={style.root}>
           <p className={style.date}>{order.date}</p>
           {
              message.map(({ text, id, date, userName, idUser }) => (
                    idUser === userId ? 
                    <article key={id} className={style.message}>
                    <div className={style.mesText}>
                       {text}
                    </div>
                       <p className={style.dateMy}>{date}</p>
                   </article>
                   :
                   <article key={id} className={style.messageAndIconbody}>
                   <div className={style.icon}>{userName.split(' ').map(x => x[0]).join('')}</div>
                   <div className={style.contentMesAndIcon}>
                    <p className={style.userNick}>{userName}</p>
                    <p className={style.messageAndIcon}>{text}
                    </p>
                     <span className={style.mesDate}>{date}</span>
                   </div>
               </article>
              ))
           }
        </section>
    )
}

export default ContentChat;