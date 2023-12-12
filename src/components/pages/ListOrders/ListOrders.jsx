import Navigate from '../../../uicomponents/OneClickComponents/Navigate/Navigate';
import Header from '../../header/Header';
import style from './style.module.css'


function ListOrders () {

    return (

        <section className={style.root}>
            <Header/>
            <main className={style.main}>
                <div className={style.navBack}>
                <div className={style.navigateContainer}>
                    <Navigate/>
                </div>
                </div>
            </main>
        </section>
    )
}

export default ListOrders;