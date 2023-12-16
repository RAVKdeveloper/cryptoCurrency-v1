import { useSelector } from 'react-redux';
import { setOpenCoin, setOpenType, fetchCoins, setCoinPrewiev, setTypePrewiev, setStatusPrewiev, setIsOpenStatus } from '../../../../redux/Slices/User/orderList';
import SelectFieldOrderList from './SelectField/select';
import style from './style.module.css'
import ModaleOrderListFilters from './Modal/modal';
import { arrOrderActionFilter, arrOrderStatusFilter } from '../../../../db/dbChain';
import DateFilter from './Date/date';


function FilterOrderList () {

    const { isOpenCoin, isOpenType, fetchCoin, coinPrewiv, typePrewiev, statusPrewiev, isOpenStatus } = useSelector(state => state.orderList)

    return (

        <section className={style.root}>
            <div className={style.selectBox}>
            <SelectFieldOrderList 
            title='Coin' 
            isOpen={isOpenCoin} 
            setIsOpen={setOpenCoin} 
            prewiev={coinPrewiv}
            />
            <ModaleOrderListFilters 
            isOpen={isOpenCoin} 
            setIsOpen={setOpenCoin} 
            request={fetchCoins}
            active={coinPrewiv}
            setPrewiev={setCoinPrewiev} 
            placeholder={'All'}
            type={'coinsSelect'}
            coins={fetchCoin} />
            </div>
            <div className={style.selectBox}>
             <SelectFieldOrderList 
            title='Type' 
            prewiev={typePrewiev} 
            isOpen={isOpenType} 
            setIsOpen={setOpenType} 
            />
             <ModaleOrderListFilters 
            isOpen={isOpenType} 
            setIsOpen={setOpenType} 
            active={typePrewiev}
            setPrewiev={setTypePrewiev} 
            placeholder={'Buy / Sell'}
            type={'typeSelect'}
            request={null}
            coins={arrOrderActionFilter}
            />
            </div>
            <div className={style.selectBox}>
             <SelectFieldOrderList 
            title='Status' 
            prewiev={statusPrewiev} 
            isOpen={isOpenStatus} 
            setIsOpen={setIsOpenStatus} 
            />
             <ModaleOrderListFilters 
            isOpen={isOpenStatus} 
            setIsOpen={setIsOpenStatus} 
            active={statusPrewiev}
            setPrewiev={setStatusPrewiev} 
            placeholder={'All'}
            type={'statusSelect'}
            request={null}
            coins={arrOrderStatusFilter}
            />
            </div>
            <DateFilter/>
        </section>
    )
}

export default FilterOrderList;