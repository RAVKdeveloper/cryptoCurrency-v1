import Navigate from '../../../uicomponents/OneClickComponents/Navigate/Navigate';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import TabsOrderList from './Tabs/tabs';
import FilterOrderList from './Filter/filters'
import style from './style.module.css'
import List from './List/list';
import HeadOrderList from './headerOrders';


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
                <div className={style.globalContainer}>
                <TabsOrderList/>
                <FilterOrderList/>
                <HeadOrderList/>
                <List/>
                </div>
            </main>
            <Footer/>
        </section>
    )
}

export default ListOrders;