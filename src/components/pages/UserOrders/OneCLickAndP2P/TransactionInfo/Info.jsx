import style from './style.module.css'
import OrderHeader from './orderHeader/orderHeader';


function TransactionInfo () {

    return (

        <section className={style.root}>
            <OrderHeader/>
        </section>
    )
}

export default TransactionInfo;  