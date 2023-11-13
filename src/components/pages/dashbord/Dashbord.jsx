import AccountInfo from './AccountInfo/AccountInfo';
import BottomModule from './BottomModule/BottomModule';
import RevardsExlusive from './ExlusiveRevards/Revards';
import style from './style.module.css';


function Dashbord () {

    return(
        <section className={style.dashbord}>
        <div className={style.container}>
            <AccountInfo/>
            <RevardsExlusive/>
            <BottomModule/>
        </div>
        </section>
    )
}

export default Dashbord;