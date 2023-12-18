import style from './style.module.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../../../redux/Slices/User/orderList';


function Pagination ({ isVisible, isVisibleMaker, action, ordersMaker, orders }) {

    const { currentPage } = useSelector(state => state.orderList)
    const dispatch = useDispatch()

    const pagesNum = [1, 2, 3, 4, 5]

    const visibTaker = orders.length > 0 || ordersMaker.length > 0 ? true : false
    const visibMaker = isVisible.length > 0 || isVisibleMaker.length > 0 ? true : false

    const getPrev = () => {
        if(currentPage !== 1) {
            let num = currentPage - 1
            dispatch(setCurrentPage(num))
        } else{
            dispatch(setCurrentPage(5))
        }
    } 

    const getNext = () => {
        if(currentPage !== 5) {
            let num = currentPage + 1
            dispatch(setCurrentPage(num))
        } else{
            dispatch(setCurrentPage(1))
        }
    } 

    console.log(visibMaker)

    return (

        <section className={style.root}>
            {
                action === '' ?
                visibTaker &&  
                <>
                <div onClick={getPrev} className={style.btnArrow}><IoIosArrowBack className={style.arrow} /></div>
                {
                pagesNum.map((el, i) => (
                    <div key={i} onClick={() => dispatch(setCurrentPage(i + 1))} className={currentPage - 1 === i ? `${style.btn} ${style.active}` : style.btn}>{el}</div>
                ))
                }
                <div onClick={getNext} className={style.btnArrow}><IoIosArrowForward className={style.arrow} /></div>
                </>
                :
                visibMaker && 
                <>
                 <div onClick={getPrev} className={style.btnArrow}><IoIosArrowBack className={style.arrow} /></div>
                {
                pagesNum.map((el, i) => (
                    <div key={i} onClick={() => dispatch(setCurrentPage(i + 1))} className={currentPage - 1 === i ? `${style.btn} ${style.active}` : style.btn}>{el}</div>
                ))
                }
                 <div onClick={getNext} className={style.btnArrow}><IoIosArrowForward className={style.arrow} /></div>
                </>
            }
        </section>
    )
}

export default Pagination;