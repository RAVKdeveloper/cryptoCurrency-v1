import ContentForm from './Content/Content';
import Payment from './Payment/Payment';
import Tabs from './Tabs/Tabs';
import style from './style.module.css';


function FormOneClickBuy () {

    return(

        <section className={style.root}>
              <Tabs/>
              <section className={style.form}>
              <ContentForm/>
              </section>
              <Payment/>
              <div className={style.btn}>Buy With UAH</div>
        </section>
    )
}

export default FormOneClickBuy;