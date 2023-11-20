import TextField from '../../../../../uicomponents/TextField/TextField';
import style from './style.module.css';
import Modal from '../../../../../uicomponents/ModalSearchTextField/SearchCrypto/Modal';
import TextFieldChain from '../../../../../uicomponents/TextField/TextFieldChain/TextField';
import ModalChain from '../../../../../uicomponents/ModalSearchTextField/SearchChain/Modal';
import { useSelector } from 'react-redux';
import DepositDetails from '../../../../../uicomponents/DepositDetails/DepositDetails';
import Prewiev from '../../../../../uicomponents/DepositPrewiev/Preiwev';


function DepositForm () {

    const isChain = useSelector(state => state.depositUser.isPrewievChain)

    return (

        <section className={style.root}>
            <h3 className={style.title}>Deposit</h3>
            <div className={style.content__row}>
                <div className={style.pagination}>
                    <p className={`${style.btn__pagination} ${style.active}`}>1</p>
                    <p className={style.btn__pagination}>2</p>
                    <p className={`${style.btn__pagination} ${style.none}`}>3</p>
                </div>
                <form className={style.form}>
                    <fieldset className={style.inputBox}>
                     <TextField title="Choose coin to deposit" placeHolder="Select crypto"/>
                     <Prewiev/>
                     <Modal/>
                    </fieldset> 
                    <fieldset className={style.inputBox}>
                      <TextFieldChain title="Choose a Chain" placeHolder="Select chain"/>
                      <ModalChain/>
                    </fieldset>
                    <fieldset className={style.qrBox}>
                      <p className={style.title__qr}>Confirm deposit details</p>
                      {
                        isChain ? 
                        <DepositDetails/>
                        :
                        null
                      }
                    </fieldset>
                </form>
            </div>
        </section>
    )
}

export default DepositForm;