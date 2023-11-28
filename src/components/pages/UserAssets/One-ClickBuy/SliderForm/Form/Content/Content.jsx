import { useSelector } from 'react-redux';
import Select from './SelectFiat/Select';
import style from './style.module.css';
import ModalFiat from './ModalFiat/Modal';
import SelectCrypto from './SelectCrypto/Select';
import ModalCrypto from './ModalCrypto/Modal';


function ContentForm () {

    const action = useSelector(state => state.oneClickBuy.action)

    
    return(

        <form className={style.root}>
         {
            action === 'buy' ?
            <>
            <div className={style.selectBox}>
            <Select/>
            <ModalFiat/>
            </div>
            <div className={`${style.selectBox} ${style.two}`}>
            <SelectCrypto/>
            <ModalCrypto/>
            </div>
           </>
           :
           null
         }
        </form>
    )
}

export default ContentForm;