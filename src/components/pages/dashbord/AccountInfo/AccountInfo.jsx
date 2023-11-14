
import style from './account.module.css';

import avatarImg from './../../../../img/DashboardPage/AccountInfo/avatar.png';
import arrow from './../../../../img/DashboardPage/AccountInfo/arrow.svg';
import sucsell from './../../../../img/DashboardPage/AccountInfo/sucsell.svg';
import { useEffect, useState } from 'react';
import Skeleton from './../../../Skeleton/Skeleton';

export let URL = `https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/users/6`;

function AccountInfo () {

    const [name, setName] = useState('')
    const [skeleton, setSkeleton] = useState(true)

    useEffect(() => {
       fetch(URL, {
        method: 'GET'
       })
       .then((res) => {
         return res.json()
       })
       .then(arr => {
        setName(arr.name)
        setSkeleton(false)
       })
    }, [])

    return(

        <section className={style.account__info}>

            {
              skeleton ? 
              <Skeleton count={1}/>
              : 
              <>
              <div className={style.avatar__row}>
              <img src={avatarImg} alt="avatar" className={style.avatar} />
              <p className={style.nickname}>{name}</p>
          </div>
          <div className={style.sub__avatar__row}>
              <div className={style.column}>
                  <p className={style.title}>UID</p>
                  <p className={style.value}>57462444</p>
              </div>
              <div className={style.column}>
                  <p className={`${style.title} ${style.title__hover}`}>Account Info <img src={arrow} alt="arrow" className={style.arrow} /></p>
                  <p className={style.value}>{name}</p>
              </div> 
               <div className={style.column}>
                  <p className={`${style.title} ${style.title__hover}`}>Identity Verification <img src={arrow} alt="arrow" className={style.arrow}/></p>
                  <p className={style.value}>Lv.1</p>
              </div> 
               <div className={style.column}>
                  <p className={`${style.title} ${style.title__hover}`}>Security Level <img src={arrow} alt="arrow" className={style.arrow}/></p>
                  <p className={`${style.value} ${style.value__img}`}><img src={sucsell} alt="sucsell" className={style.sucsell} /> High</p>
              </div>
          </div> 
          </>
            }
        </section>
    )
}

export default AccountInfo;