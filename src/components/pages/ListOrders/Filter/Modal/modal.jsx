import { useEffect } from 'react';
import style from './style.module.css'
import { useDispatch } from 'react-redux';


function ModaleOrderListFilters ({ isOpen, setIsOpen, request, coins, setPrewiev, active, placeholder, type }) {

    const dispatch = useDispatch()

    useEffect(() => {
        if(request !== null) {
        try{
            dispatch(request())
        } catch (err) {
            alert(`Error, ${err}`)
        }
    }
    }, [])

    const getPrewiev = (str) => {
        dispatch(setPrewiev(str))
        dispatch(setIsOpen(false))
    }

    return (

        isOpen && 
        <section className={style.root}>
              <article onClick={(e) => getPrewiev(e.target.innerText)} className={active === placeholder ? `${style.card} ${style.chek}` : style.card}>
                        {placeholder}
                    </article>
             {
                type === 'coinsSelect' ?
                coins.map(({ cryptoName, id }) => (
                    <article onClick={() => getPrewiev(cryptoName)} key={id} className={active === cryptoName ? `${style.card} ${style.chek}` : style.card}>
                        {cryptoName}
                    </article>
                ))
                :
                coins.map((el, i) => (
                    <article onClick={() => getPrewiev(el)} key={i} className={active === el ? `${style.card} ${style.chek}` : style.card}>
                    {el}
                    </article>
                ))
             }
        </section>
    ) 
}

export default ModaleOrderListFilters;