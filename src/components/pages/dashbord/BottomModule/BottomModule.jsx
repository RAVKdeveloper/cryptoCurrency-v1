import MyAssets from '../../../../uicomponents/MyAssetsDashBord/MyAssets';
import Recommendate from '../../../../uicomponents/Recommendet/Recommendate';
// import Test from '../../../testapi/Test';
import style from './style.module.css';


function BottomModule () {

    return(

        <section className={style.bottomModule}>
            <MyAssets/>
            <Recommendate/>
        </section>
    )
}

export default BottomModule;