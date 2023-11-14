
import { useEffect, useState } from 'react';
import avatarImg from './../../../img/header/avatar.png';

import './acchover.css';
import { URL } from '../../../components/pages/dashbord/AccountInfo/AccountInfo';


function AccountHover () {

const [click, setClick] = useState(false)

useEffect(() => {
  if(click === true) {
      fetch(URL, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'PUT',                                                              
           body: JSON.stringify( { "active": "0" } ) 
      })
      .then(res => {
        return res.json()
      }) 
      .then(arr => window.location.href="http://localhost:3000")
  }
}, [click])

return (

    <aside className='header__avatar__sidebar'>
        <div className="avatar__info__sidebar__header__row">
            <img src={avatarImg} alt="avatar" className="avatar__img__sidebar__header" />
            <div className="info__user__sidebar__header__column">
                <p className="email__user__info__sidebar__header">kirill2008@gmail.com</p>
                <p className="uid__user__info__sidebar__header">UID: <span className="uid__info__sidebar__header">1234567</span></p>
            </div>
        </div>
        <div className="btn__row__avatar__sidebar__header">
            <button onClick={() => setClick(true)} className="btn__avatar__sidebar__header">Logout</button>
        </div>
    </aside>
)

}

export default AccountHover;