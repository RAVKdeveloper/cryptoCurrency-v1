import style from './style.module.css'
import OrderHeader from './orderHeader/orderHeader';
import OrderBody from './orderBody/orderBody';


function TransactionInfo () {

    return (

        <section className={style.root}>
            <OrderHeader/>
            <OrderBody/>
        </section>
    )
}

export default TransactionInfo;  