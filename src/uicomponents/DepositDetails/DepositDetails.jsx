import style from './style.module.css';
import qrImg from './../../img/DepositPage/DepositForm/DepositDetails/qr.png';
import iconList from './../../img/DepositPage/DepositForm/DepositDetails/iconList.svg';
import { GoCopy } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { setQr } from '../../redux/Slices/depositUser';
import { useEffect, useRef, useState } from 'react';

function DepositDetails () {

    const nameCrypto = useSelector(state => state.depositUser.prewiev)
    const isQr = useSelector(state => state.depositUser.isQr)
    const dispatch = useDispatch();
    let [ obj ] = nameCrypto;
    const [ isCopy, setIsCopy ] = useState(false)
    const copyRef = useRef()


    useEffect(() => {
      if(isCopy === true) {
        const text = copyRef.current.innerHTML
        navigator.clipboard.writeText(text)   
      }
    }, [isCopy])

    return(

        <div className={style.root}>
          {
            isQr ? 
            <>
             <div className={style.content}>
              <p className={style.title}>{obj.cryptoName} Adress</p>
              <div className={style.adress__body}>
                <span ref={copyRef} className={style.adress}>TLWYdRYbhH39jFjJZhHgbq9N3t68EXPQNG</span>
              </div>
              <div onClick={() => setIsCopy(true)} className={style.copyBtn}>
               <GoCopy className={style.icon}/>
               <span className={style.text}>Copy</span>
              </div>
            </div>
            <img src={qrImg} alt="qr" className={style.qr} /> 
            </>
            :
            <div className={style.preContent}>
                 <div className={style.preContent__text}>
                    <img src={iconList} alt="icon" className={style.list__icon} />
                    <p className={style.text__preContent}>Deposits will be automatically redirected to the Spot Account. Your deposit history can be viewed under the Spot Account.</p>
                 </div>
                 <div onClick={() => dispatch(setQr(true))} className={style.btn}>
                 Acknowledge
                 </div>
            </div>
          }
            </div>
    )
}

export default DepositDetails;