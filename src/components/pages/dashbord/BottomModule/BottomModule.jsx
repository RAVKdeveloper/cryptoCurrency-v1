import MyAssets from '../../../../uicomponents/MyAssetsDashBord/MyAssets';
import Test from '../../../testapi/Test';
import style from './style.module.css';


function BottomModule () {

    return(

        <section className={style.bottomModule}>
            <MyAssets/>
            <Test/>
        </section>
    )
}

export default BottomModule;