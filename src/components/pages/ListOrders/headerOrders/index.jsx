import style from './style.module.css'


function HeadOrderList () {

    return (

        <section className={style.root}>
            <span className={style.one}>Order No.</span>
            <span className={style.two}>Fiat Amount</span>
            <span className={style.three}>Price</span>
            <span className={style.four}>Coin Amount</span>
            <span className={style.five}>Transaction Fees</span>
            <span className={style.six}>Counterparty</span>
            <span className={style.seven}>Status</span>
            <span className={style.eigth}>Time</span>
        </section>
    )
}

export default HeadOrderList;