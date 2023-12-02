import CardDepositLocal from './Card/Card';
import style from './style.module.css';
import iconOne from './../../../../../img/OneClickBuy/DepositLocal/img1.png'
import iconTwo from './../../../../../img/OneClickBuy/DepositLocal/img2.png'
import iconThree from './../../../../../img/OneClickBuy/DepositLocal/img3.png'
import iconFour from './../../../../../img/OneClickBuy/DepositLocal/img4.png'


function DepositLocal () {

    return(

        <section className={style.root}>
            <h5 className={style.title}>Deposit Local Fiat Currencies to Buy Crypto</h5>
           <h6 className={style.subtitle}>Convert cash into crypto. Deposit over 50+ fiat currencies to get started with crypto trading.</h6>
           <div className={style.cardsRow}>
             <CardDepositLocal 
             image={iconOne} 
             title="Transact Seamlessly Through Bank Transfers" 
             text="Transact effortlessly with an extensive selection of banks and payment networks, including SEPA, FPS, Visa and Mastercard."
            />
             <CardDepositLocal 
             image={iconTwo} 
             title="Swift Transactions With Robust Security" 
             text="Experience rapid transactions and rest easy knowing your funds are secure."
            />
             <CardDepositLocal 
             image={iconThree} 
             title="Zero Fees & Competitive Rates" 
             text="Maximize your investment with zero fees and competitive currency rates."
            />
            <CardDepositLocal 
             image={iconFour} 
             title="Tailored for Large Transactions" 
             text="Our platform is optimized to handle and support all transaction sizes."
            />
           </div>
        </section>
    )
}

export default DepositLocal;