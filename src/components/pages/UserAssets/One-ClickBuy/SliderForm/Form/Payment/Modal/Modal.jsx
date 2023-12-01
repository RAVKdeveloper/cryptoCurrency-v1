import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import { IoMdClose } from "react-icons/io";
import { setOpenPayment } from '../../../../../../../../redux/Slices/oneClickBuy';
import ContentPayment from './Content/Content';


function ModalPayment () {

    const { openPayment } = useSelector(state => state.oneClickBuy)
    const dispatch = useDispatch()

    const getVisibilite = openPayment ? `${style.root} ${style.active}` : style.root;

    return (
       
        <section className={getVisibilite}>
            <div className={style.popup}>
                <h3 className={style.title}>Select Payment Method</h3>
                <ContentPayment/>
            <IoMdClose className={style.close} onClick={() => { dispatch(setOpenPayment(false)) }} />
            </div>
        </section>
    )
}

export default ModalPayment;