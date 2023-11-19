import Footer from '../../../footer/Footer';
import Header from '../../../header/Header';
import DepositForm from './Form/Form';
import style from './style.module.css';



function Deposit () {

    return(
        <section className={style.root}>
            <Header/>   
            <div className={style.container}>
                <div className={style.formFaq__row}>
                    <DepositForm/>
                </div>
               </div>
            <Footer/>
        </section>
 )
}

export default Deposit;