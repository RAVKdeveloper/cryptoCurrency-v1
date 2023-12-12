import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css'
import { useContext, useEffect, useState } from 'react';
import { AccountContext } from '../../../../../../App';
import { fetchMessage } from '../../../../../../redux/Slices/User/orderChat';
import { NavLink } from 'react-router-dom';


function ContentChat () {

    const { orderWithDb } = useSelector(state => state.orderOneClick)
    const { message } = useSelector(state => state.orderChat)
    const [ order ] = orderWithDb
    const { userId } = useContext(AccountContext)
    const [ firstLetter, setFirstLetter ] = useState('')
    const dispatch = useDispatch()
    
    const isNameUser = order.takerId === userId ? order.makerName : order.takerUsername
    console.log(message.map(obj => obj.idUser))
   
    useEffect(() => {
        const addFirstLetter = isNameUser.split(' ').map(x => x[0]).join('');

        setFirstLetter(addFirstLetter)
        dispatch(fetchMessage(order.id))
    }, [])

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
           <article className={style.messageAndIconbody}>
               <div className={style.icon}>{firstLetter}</div>
               <div className={style.contentMesAndIcon}>
                <p className={style.userNick}>{isNameUser}</p>
                <p className={style.messageAndIcon}>Привет!Перевожу с доверенного лица Иван С. ЧЕКИ НЕ КИДАЮ)
                 <span className={style.mesDate}>{order.date}</span>
                </p>
               </div>
           </article>
           <article className={style.message}>
            <div className={style.mesText}>
               <NavLink to={"user/one-click-buy/order/17023697139142?createdAt=1702369713907"}>Hello</NavLink>
               <p className={style.dateMy}>{order.date}</p>
            </div>
           </article>
        </section>
    )
}

export default ContentChat;