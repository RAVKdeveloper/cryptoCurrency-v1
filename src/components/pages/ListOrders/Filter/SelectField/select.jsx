import { IoIosArrowDown } from "react-icons/io";
import style from './style.module.css'
import { useDispatch } from "react-redux";


function SelectFieldOrderList ({ title, isOpen, setIsOpen, prewiev }) {

    const dispatch = useDispatch()

    const handleClick = () => {
         if(isOpen === true) {
            return dispatch(setIsOpen(false))
         }
         return dispatch(setIsOpen(true))
    }

    const isArrowStyle = isOpen ? `${style.arrow} ${style.active}` : style.arrow;

    return (

        <section className={style.root}>
            <h5 className={style.title}>{title}</h5>
            <div onClick={handleClick} className={style.select}>
                {prewiev}
                <IoIosArrowDown className={isArrowStyle} />
            </div>
        </section>
    )
}

export default SelectFieldOrderList;