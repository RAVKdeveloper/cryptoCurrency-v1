import ContentForm from './Content/Content';
import Tabs from './Tabs/Tabs';
import style from './style.module.css';


function FormOneClickBuy () {

    return(

        <section className={style.root}>
              <Tabs/>
              <section className={style.form}>
              <ContentForm/>
              </section>
        </section>
    )
}

export default FormOneClickBuy;