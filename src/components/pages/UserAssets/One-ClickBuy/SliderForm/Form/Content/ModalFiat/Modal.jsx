import style from './style.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, A11y } from 'swiper/modules';
import { useCallback, useEffect, useRef, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFiatList, setFiatPrewiev, setClickFiat } from '../../../../../../../../redux/Slices/oneClickBuy';
import debounce from 'lodash.debounce';


function ModalFiat () {

    const [ inputVal, setInputVal ] = useState('')
    const [ search, setSearch ] = useState('');
    const [ idObj, setIdObj ] = useState('') 
    const { fiatList, openFiat } = useSelector(state => state.oneClickBuy)
    const dispatch = useDispatch()
    const searchRef = useRef();

    console.log(search)

    const UpdateSearchValue = useCallback(
        debounce((str) => {
          setSearch(str)
        }, 200),
       [] 
    )

    const inputValueChange = e => {
        setInputVal(e.target.value)
        UpdateSearchValue(e.target.value)
    }
        
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
                    fiatList.length > 0 ?
                    fiatList.map(({ article, name, id }) => (    
                <SwiperSlide onClick={() => setIdObj(id)} key={id} className={style.card}>
                    <p className={style.name}>{article}</p>
                    <p className={style.subname}>{name}</p>
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

export default ModalFiat;