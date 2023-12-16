import style from './style.module.css'
import { setActionType } from '../../../../redux/Slices/User/orderList';
import { useDispatch, useSelector } from 'react-redux';


function TabsOrderList () {

    const { actionType } = useSelector(state => state.orderList)
    const dispatch = useDispatch()

    const handleClick = (e) => {
        if(e.target.innerText === 'In Progress') {
           return dispatch(setActionType('loading'))
        }
        return dispatch(setActionType(''))
    }

    const isProgressStyle = actionType === 'loading' ? `${style.tab} ${style.active}` : style.tab;
    const isAllStyle = actionType === '' ? `${style.tab} ${style.active}` : style.tab;


    return (

        <section className={style.root}>
            <p onClick={handleClick} className={isProgressStyle}>In Progress</p>
            <p onClick={handleClick} className={isAllStyle}>All</p>
        </section>
    )
}

export default TabsOrderList;