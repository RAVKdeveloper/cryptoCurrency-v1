import style from './../ModalFiat/style.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, A11y } from 'swiper/modules';
import { useCallback, useEffect, useRef, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoList, setCryptoPrewiev } from '../../../../../../../../redux/Slices/oneClickBuy';
import debounce from 'lodash.debounce';


function ModalCrypto () {

    const { openCrypto, cryptoList } = useSelector(state => state.oneClickBuy)
    const [ inputVal, setInputVal ] = useState('')
    const [ search, setSearch ] = useState('');
    const dispatch = useDispatch()
    const searchRef = useRef();


    const inputValueChange = e => {
        setInputVal(e.target.value)
        UpdateSearchValue(e.target.value)
    }

    const UpdateSearchValue = useCallback(
        debounce((str) => {
          setSearch(str)
        }, 200),
       [] 
    )

    useEffect(() => {
        try{
          dispatch(fetchCryptoList(search))
        } catch {
           alert('Error')
        }
    }, [search])

    useEffect(() => {
       if(openCrypto === true) {
        searchRef.current.focus()
       }
    }, [openCrypto])

    return (

        <section className={ openCrypto ? `${style.root} ${style.modal}` : style.root}>
        <div className={style.searchBox}>
           <IoSearchOutline className={style.searchIcon} />
           <input ref={searchRef} value={inputVal} onChange={(e) => inputValueChange(e)} type="text" className={style.input} />
        </div>
        <Swiper
            className={style.slider}
            modules={[Mousewheel, A11y]}
            spaceBetween={0}
            slidesPerView={9}
            mousewheel = {true}
            sensitivity = {3}
            direction='vertical'
            >

           {
               cryptoList.length > 0 ?
               cryptoList.map(({ cryptoName, subtitle, id }) => (    
           <SwiperSlide onClick={() => dispatch(setCryptoPrewiev(cryptoName))} key={id} className={style.card}>
               <p className={style.name}>{cryptoName}</p>
               <p className={style.subname}>{subtitle}</p>
           </SwiperSlide>
               ))
               : 
               <SwiperSlide className={style.empty}>
                   Empty :(
               </SwiperSlide>
           }
           </Swiper>
   </section>
    )
} 

export default ModalCrypto;