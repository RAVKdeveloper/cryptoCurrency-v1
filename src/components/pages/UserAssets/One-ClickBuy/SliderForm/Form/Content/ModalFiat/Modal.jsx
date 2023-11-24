import style from './style.module.css';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFiatList, setFiatPrewiev, setClickFiat } from '../../../../../../../../redux/Slices/oneClickBuy';


function ModalFiat () {

    const [ search, setSearch ] = useState('');
    const [ idObj, setIdObj ] = useState('') 
    const { status, fiatList, openFiat } = useSelector(state => state.oneClickBuy)
    const dispatch = useDispatch()
    const searchRef = useRef();

    useEffect(() => {
       if(idObj !== '') {
       const obj = fiatList.filter(({ id }) => id === idObj)
       dispatch(setFiatPrewiev(obj))
     }
    }, [idObj])

    useEffect(() => {
        try{
            dispatch(fetchFiatList(search))
        } catch {
            alert('Извините, мы разбираемся с этой проблемой')
        }
    }, [search])

    useEffect(() => {
      if(openFiat === true) {
         searchRef.current.focus()
      }
    }, [openFiat])


    return(

        <section className={ openFiat ? `${style.root} ${style.modal}` : style.root}>
             <div className={style.searchBox}>
                <IoSearchOutline className={style.searchIcon} />
                <input ref={searchRef} value={search} onChange={(e) => setSearch(e.target.value)} type="text" className={style.input} />
             </div>
             <div className={ fiatList.length < 1 ? style.content : `${style.content} ${style.active}`}>
                {
                    fiatList.length > 0 ?
                    fiatList.map(({ article, name, id }) => (    
                <article onClick={() => setIdObj(id)} key={id} className={style.card}>
                    <p className={style.name}>{article}</p>
                    <p className={style.subname}>{name}</p>
                </article>
                    ))
                    : 
                    <div className={style.empty}>
                        Empty :(
                    </div>
                }
             </div>
        </section>
    )
}

export default ModalFiat;