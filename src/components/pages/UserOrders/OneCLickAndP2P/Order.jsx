import { useParams } from 'react-router-dom';
import style from './style.module.css'
import { useContext, useEffect } from 'react';
import { AccountContext } from '../../../../App';
import { getOrderUser } from '../../../../redux/Slices/orderOneClick';
import { useDispatch, useSelector } from 'react-redux';
import LoaderOrder from './Loader/Loader';
import Header from '../../../header/Header';
import Navigate from '../../../../uicomponents/OneClickComponents/Navigate/Navigate';
import { GoCopy } from "react-icons/go";
import TransactionInfo from './TransactionInfo/Info';
import RatingOrder from './TransactionInfo/orderRating/Rating';
import FaqOrder from './TransactionInfo/orderFaq/Faq';
import ChatP2P from './Chat/Chat';


function OrderOneCLickAndP2p () {

    const { id } = useParams()
    const { userId } = useContext(AccountContext)
    const dispatch = useDispatch()
    const { orderWithDb, statusGetOrder } = useSelector(state => state.orderOneClick)
    const [ order ] = orderWithDb


    useEffect(() => {
        try{
            const obj = {
                user: userId, 
                order: id,
                type: 'OneClickBuy',
            }
            dispatch(getOrderUser(obj))
        } catch {
            alert('Произошла ошибка, пожалуйста перезагрузите страницу...')
        }
    }, [])


    if(statusGetOrder === 'loading') {
        return <LoaderOrder/>
    }

    return (  

        orderWithDb.length > 0 &&
        <section className={style.root}>
             <section className={style.content}>
              <Header/>
              <div className={style.navigation}>
              <div className={style.navContainer}>
              <Navigate/>
              </div>
              </div>
               <main className={style.main}>
                   <div className={style.mainContainer}>
                     <article className={style.titlesRow}>
                        <h3 className={style.title}>{order.action === 'buy' && order.takerId === userId ? 'Buy' : 'Sell'} {order.crypto}</h3>
                        <div className={style.idOrderRow}>
                            <h5 className={style.dataOrder}>{order.date}</h5>
                            <h5 className={style.idOrder}>{order.id} <GoCopy className={style.copyBtn} /></h5>
                        </div>
                     </article>
                     <div className={style.orderRow}>
                        <div className={style.orderBasicInfo}>
                     <TransactionInfo/>
                    <RatingOrder/>
                    <FaqOrder/>
                        </div>
                        <div className={style.chatOrder}>
                            <ChatP2P/> 
                        </div>
                     </div>
                   </div>
               </main>
              </section>
        </section>
    )
}

export default OrderOneCLickAndP2p;