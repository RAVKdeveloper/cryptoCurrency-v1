import { useEffect, useState } from 'react';
import style from './style.module.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setItemsCrypto } from '../../../redux/Slices/depositUser';
import { CiSearch } from "react-icons/ci";

function Modal () {
    
    const [ search, setSearch ] = useState('');
    const items = useSelector((state) => state.depositUser.itemsCrypto)
    const openModal = useSelector((state) => state.depositUser.openModal)
    const dispatch = useDispatch()

    const searchUrl = search === '' ? '' : `?cryptoName=${search}`
 
   useEffect(() => {
      axios.get(`https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/cryptolist${searchUrl}`)
      .then(res => {
        dispatch(setItemsCrypto(res.data))
      })
      .catch(err => console.log(err.status))
   }, [search])

    return (
         
        <div className={openModal ? `${style.root} ${style.popup}` : style.root}>
           <div className={style.searchForm}>
             <CiSearch className={style.searchIcon}/>
            <input onChange={(e) => setSearch(e.target.value)} type="text" className={style.search} />
           </div>
           <div className={style.scroll}>
            {
                items.length > 0 ?
                items.map(({ cryptoName, image, subtitle, id }) => (
                    <div key={id} className={style.card}>
                    <img src={image} alt="icon" className={style.icon} />
                    <div className={style.content}>
                       <p className={style.title}>{cryptoName}</p>
                       <p className={style.subtitle}>{subtitle}</p>
                    </div>
                  </div>
                ))
                :
                <div className={style.empty}>
                    Empty :(
                </div>
            }
           </div>
        </div>
    )
}

export default Modal;