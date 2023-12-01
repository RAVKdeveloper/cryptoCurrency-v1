import { useSelector } from 'react-redux';
import SelectPayment from './Select/Select';
import style from './style.module.css';
import { RiErrorWarningLine } from "react-icons/ri";
import ModalPayment from './Modal/Modal';


function Payment () {

    const { fiatPrewiew, cryptoPrewiew, action } = useSelector(state => state.oneClickBuy)
    const [ obj ] = fiatPrewiew

    return (
            
            <div className={style.root}>
                <div className={style.statistic}>
                     1 {cryptoPrewiew} = 90 { obj.article } <RiErrorWarningLine className={style.icon}/>
                </div>
                <h4 className={style.title}>Payment Methods</h4>
                <div className={style.selectBox}>
                 <SelectPayment/>
                 <ModalPayment/>
                </div>
            </div>
    )
}

export default Payment;