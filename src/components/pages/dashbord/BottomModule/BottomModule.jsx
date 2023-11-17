import MyAssets from '../../../../uicomponents/MyAssetsDashBord/MyAssets';
import Recommendate from '../../../../uicomponents/Recommendet/Recommendate';
// import Test from '../../../testapi/Test';
import style from './style.module.css';


function BottomModule ({ balance, btcBalance, setBtcBalance }) {

    return(

        <section className={style.bottomModule}>
            <MyAssets balance={balance} btcBalance={btcBalance} setBtcBalance={setBtcBalance}/>
            <Recommendate/>
        </section>
    )
}

export default BottomModule;