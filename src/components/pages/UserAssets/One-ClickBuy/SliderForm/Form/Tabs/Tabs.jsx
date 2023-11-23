import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setAction } from './../../../../../../../redux/Slices/oneClickBuy'

function Tabs () {

    const action = useSelector(state => state.oneClickBuy.action) 
    const dispatch = useDispatch()


    return(

        <section className={style.root}>
            <div onClick={() => dispatch(setAction('buy'))} className={ action === 'buy' ? `${style.buy} ${style.active}` : style.buy }>Buy</div>
            <div onClick={() => dispatch(setAction('sell'))} className={ action === 'sell' ? `${style.sell} ${style.active}` : style.sell }>Sell</div>
        </section>
    )
}

export default Tabs;