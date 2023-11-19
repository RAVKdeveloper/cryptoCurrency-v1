import { useEffect, useState } from 'react';
import s from './test.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { setItem, submitBtn, deleteItem } from '../../redux/Slices/testSlice';


function Testtwo () {
  
    const item = useSelector((state) => state.test.item)
    const submit = useSelector((state) => state.test.submit)
    const deleteArr = useSelector((state) => state.test.delete)
    const id = useSelector((state) => state.test.id)
    const dispatch = useDispatch()

    console.log(id)

    useEffect(() => {
        if(submit === true) {
      fetch('https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/users', {
        method: 'GET',
      })
      .then(res => {
        return res.json()
      })
      .then(arr => dispatch(setItem(arr)))
    }
}, [submit, deleteArr, id])

   useEffect(() => {
     if(deleteArr === true) {
       fetch(`https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/users/${id}`, {
        method: 'DELETE',
       })
       .then(res => res.json())
       .then(arr => console.log(arr))
     }
   }, [deleteArr, id])

    return(
       <>
         <div>{
            item.filter(({objid}) => objid !== id).map(({name, avatar, createdAt, password, id}) => (
                <div key={id}>
                <div onClick={() => dispatch(deleteItem(id))}>{name}</div>
                <div>{password}</div>
                <div>{createdAt}</div>
                </div>
            ))
        }</div>
        <span onClick={() => dispatch(submitBtn(true))}>heloo</span>
        </>
    )
}

export default Testtwo;