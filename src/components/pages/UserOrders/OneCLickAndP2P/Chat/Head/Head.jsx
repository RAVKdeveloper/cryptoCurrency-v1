import { useSelector } from 'react-redux';
import style from './style.module.css'
import { useContext, useEffect, useState } from 'react';
import { AccountContext } from '../../../../../../App';
import { NavLink } from 'react-router-dom';
import { MdOutlineVerifiedUser } from "react-icons/md";


function HeaderChat () {

    const { orderWithDb } = useSelector(state => state.orderOneClick)
    const [ order ] = orderWithDb
    const { userId } = useContext(AccountContext)
    const [ firstLetter, setFirstLetter ] = useState('')

    const isNameUser = order.takerId === userId ? order.makerName : order.takerUsername
    const isVerificationUser = order.takerId === userId ? order.verificationMakerName : order.verificationName 

    useEffect(() => {
        const addFirstLetter = isNameUser.split(' ').map(x => x[0]).join('');

        setFirstLetter(addFirstLetter)
    }, [])

    return (

        <section className={style.root}>
            <div className={style.icon}>{firstLetter}</div>
            <div className={style.content}>
                <NavLink to={"/"} className={style.nickName}>{isNameUser}</NavLink>
                <div className={style.verName}><MdOutlineVerifiedUser className={style.iconVer} /> Verified: {isVerificationUser}</div>
            </div>
        </section>
    )
}

export default HeaderChat;