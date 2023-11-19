
import { useEffect, useState } from 'react';
import s from './test.module.css';
import Testtwo from './Testtwo';


function Test () {

const [items, setItems] = useState([])
const [click, setClick] = useState(false)
const [itemDelete, setItemDelete] = useState('');
const [getitem, setGetitem] = useState('');
const [search, setSearch] = useState('')


useEffect(() => {
    if(itemDelete !== '') {
        fetch(`https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/users/${itemDelete}`, {
            method: 'DELETE',
        })
        .then(res => {
            return res.json();
         })
         .then(({id}) => {
           console.log(items)
         })
    }
},[itemDelete])

const searchApi = search !== '' ? `?search=${search}` : ''

    useEffect(() => {
        if(click == true) {
          fetch(`https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/users${searchApi}${getitem !== '' ? `/${getitem}` : ''}`, {
              method: 'GET',
        }
             )
             .then(res => {
                return res.json();
             })
             .then(arr => {
                if(Array.isArray(arr)) {
                    setItems(arr);
                } else {
                    setItems([arr])
                }
                
             })
}         
    }, [click, getitem, search])

 return(

    <section className={s.test}>
        <button onClick={() => setClick(true)} className={s.btn}>Submit</button>
        <select onClick={(e) => setGetitem(e.target.value)}>
       <option value="">No</option>
       <option value="6">6</option>
       <option value="7">7</option>
       <option value="9">9</option>
        </select>
        <input value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} type="text" />
        {
            items.length >= 1 ? 
             items.map(({name, avatar, createdAt, password, id}) => (
                <div className={`test${id}`} key={id}>
                <div onClick={(e) => setItemDelete(e.target.innerText)}>{id}</div>
                <div>{name}</div>
                <div>{avatar}</div>
                <div>{createdAt}</div>
                <div>{password}</div>
                </div>
            ))
            :
            <div>error</div>
        }
        <Testtwo/>
       </section>
 )
}

export default Test;