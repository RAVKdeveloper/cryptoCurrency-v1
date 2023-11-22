import DepositHistory from '../../../../../uicomponents/DepositOrderHistory/DepositHistoty';
import style from './style.module.css';


function HistoryDeposit () {

    return(

       <section className={style.root}>
        <h5 className={style.title}>Recent Deposits</h5>
        <div className={style.list__titles}>
            <div className={style.coinChain}>
                <p className={style.coin}>Coin</p>
                <p className={style.chain}>Chain Type</p>
            </div>
            <div className={style.addres}>
                <p className={style.qty}>QTY</p>
                <p className={style.addresT}>Addres</p>
            </div>
            <div className={style.status}>
                <p className={style.statusT}>Status</p>
                <p className={style.date}>Date & Time</p>
            </div>
            <p className={style.action}>Actions  </p>
        </div>
        <div className={style.cardWrraper}>
           <DepositHistory/>
        </div>
       </section>
    )
}

export default HistoryDeposit;