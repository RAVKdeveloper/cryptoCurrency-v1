import style from './style.module.css';
import { arrChain } from '../../../db/dbChain';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setPrewivChain, setIsPrewievChain } from '../../../redux/Slices/depositUser';


function ModalChain () {

    const { openChain, isPrewiev } = useSelector(state => state.depositUser)
    const [ idObj, setIdObj ] = useState('')
    const dispatch = useDispatch();

     const addObj = () => {
        const obj = arrChain.filter(({ id }) => id === idObj)
        dispatch(setPrewivChain(obj))
        dispatch(setIsPrewievChain(true))
     }

     useEffect(() => {
        if(idObj !== '') {
            addObj()
        }
     }, [idObj])

    return(

        <div className={openChain ? `${style.root} ${style.active}` : style.root}>
            <div className={style.warning}>
            Please ensure that you select a network that corresponds to the withdrawal platform of the coin you wish to withdraw to prevent potential asset losses.
            </div>
            <div className={style.cards}>
                {
                    isPrewiev ?
                         arrChain.length > 0 ?
                         arrChain.map(({ name, id }) => (
                 <article onClick={() => setIdObj(id)} key={id} className={style.card}>
                     <p aria-selected={false} className={style.name}>{name}</p>
                 </article>
                         ))
                       :
                       null
                       :
                       <div className={style.empty}>
                       First, Сhoose a Сrypto Сoin
                     </div>
                }
            </div>
        </div>
    )
}

export default ModalChain;