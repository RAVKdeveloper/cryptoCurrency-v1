import Footer from '../../../footer/Footer';
import Header from '../../../header/Header';
import FaqDeposit from './Faq/Faq';
import DepositForm from './Form/Form';
import HistoryDeposit from './History/History';
import style from './style.module.css';



function Deposit () {

    return(
        <section className={style.root}>
            <Header/>   
            <div className={style.container}>
                <div className={style.formFaq__row}>
                    <DepositForm/>
                    <FaqDeposit/>
                </div>
               </div>
               <div className={style.containerHistory}>
                <section className={style.history}>
                      <HistoryDeposit/>
                </section>
               </div>
            <Footer/>
        </section>
 )
}

export default Deposit;