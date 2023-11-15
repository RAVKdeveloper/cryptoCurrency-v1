import FooterDashboard from '../../footer/FooterDashboard';
import Header from '../../header/Header';
import AccountInfo from './AccountInfo/AccountInfo';
import BottomModule from './BottomModule/BottomModule';
import RevardsExlusive from './ExlusiveRevards/Revards';
import style from './style.module.css';


function Dashbord () {

    return(
        <>
        <Header/>
        <section className={style.dashbord}>
        <div className={style.container}>
            <AccountInfo/>
            <RevardsExlusive/>
            <BottomModule/>
        </div>
        </section>
        <FooterDashboard/>
        </>
    )
}

export default Dashbord;