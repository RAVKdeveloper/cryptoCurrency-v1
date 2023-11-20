import style from './style.module.css';
import { fetchCrypto } from '../../redux/Slices/depositUser';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import SkeletonPrewiev from './thisSkeleton/Skeleton';
import { setIsPrewiev, setPrewiv } from './../../redux/Slices/depositUser';


function Prewiev () {

    const [ idObj, setIdObj ] = useState('')
    const dispatch = useDispatch() 
    const { itemsPrewiev, status, isPrewiev } = useSelector(state => state.depositUser)

    const addPrewiev = () => {
        const obj = itemsPrewiev.filter(({ id }) => id === idObj)
        dispatch(setPrewiv(obj))
        dispatch(setIsPrewiev(true))
    }   
 
    useEffect(() => {
        if(idObj !== '') {
            addPrewiev();
        }
    }, [idObj])

    useEffect(() => {
        try{
          dispatch(fetchCrypto())      
        }
        catch{
          alert('Ой...Что-то пошло не так')
        }
    }, [])


    return(

        <div className={style.root}>
            {
             isPrewiev === false ?
              status === 'succes' ?
              itemsPrewiev.map(({ cryptoName, image, id }) => (
                <div onClick={() => setIdObj(id)} key={id} className={style.card}>
                <img src={image} alt="icon" className={style.icon} />
                <p className={style.text}>{cryptoName}</p>
             </div>       
              ))
              : 
              <SkeletonPrewiev/>
              : null
            }
        </div>
    )
}

export default Prewiev;