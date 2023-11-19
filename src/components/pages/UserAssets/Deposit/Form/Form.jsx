import { useSelector, useDispatch } from 'react-redux';
import { setOpenModal } from '../../../../../redux/Slices/depositUser';
import TextField from '../../../../../uicomponents/TextField/TextField';
import style from './style.module.css';
import Modal from '../../../../../uicomponents/ModalSearchTextField/SearchCrypto/Modal';



function DepositForm () {

    const clickCrypto = useSelector((state) => state.depositUser.clickCrypto)
    const dispatch = useDispatch();

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
                     <Modal/>
                    </fieldset>
                </form>
            </div>
        </section>
    )
}

export default DepositForm;