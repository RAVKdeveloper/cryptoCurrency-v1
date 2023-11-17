import FooterDashboard from '../../footer/FooterDashboard';
import Header from '../../header/Header';
import AccountInfo, { URL } from './AccountInfo/AccountInfo';
import { useContext, useState, useEffect } from 'react';
import BottomModule from './BottomModule/BottomModule';
import RevardsExlusive from './ExlusiveRevards/Revards';
import style from './style.module.css';
import { AccountContext } from '../../../App';


function Dashbord () {

    const [name, setName] = useState('')
    const [skeleton, setSkeleton] = useState(true)
    const [balance, setBalance] = useState('0.00')
    const [btcBalance, setBtcBalance] = useState('0.000000000')
    const { userId } = useContext(AccountContext)

    useEffect(() => {
       fetch(`${URL}/${userId}`, {
        method: 'GET'
       })
       .then((res) => {
         return res.json()
       })
       .then(arr => {
        setName(arr.name)
        setSkeleton(false)
        setBalance(arr.balance)
       })
    }, [])

    return(
        <>
        <Header/>
        <section className={style.dashbord}>
        <div className={style.container}>
            <AccountInfo skeleton={skeleton} name={name}/>
            <RevardsExlusive/>
            <BottomModule balance={balance} btcBalance={btcBalance} setBtcBalance={setBtcBalance}/>
        </div>
        </section>
        <FooterDashboard/>
        </>
    )
}

export default Dashbord;