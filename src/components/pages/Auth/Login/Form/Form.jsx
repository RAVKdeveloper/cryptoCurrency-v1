import { useState, useRef, useEffect, useContext } from 'react'
import { createError, removeError } from '../../../../../Helpers/Validate/Validate';
import style from './style.module.css'
import { URL } from '../../../dashbord/AccountInfo/AccountInfo';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from '../../../../../App';


function Form ({ temaOn }) {

    const navigate = useNavigate("")  
    const { userId, setUserId } = useContext(AccountContext)
    const [sendFomr, setSendForm] = useState(false)
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [params, setParams] = useState('');
    const [errorUser, setErrorUser] = useState(false)

    const inputEmail = useRef('');
    const inputPass = useRef('');

    const validArr = [];

    const errorArr = {
        errorFull: 'Поле не заполнено',
        errorServerUnique: 'Пользователь с такой почтой уже существует',
        passwordError: 'Пароль должен быть больше 5 символов',
      }

    function addValidate(e) {
        e.preventDefault(); 

         removeError(inputEmail)
 
        if(email === '') {
         createError(inputEmail, errorArr.errorFull)
        } else{
         removeError(inputEmail)
         let emailObj = { emailUser: email }
         validArr.push(emailObj)
        } if(pass === '') {
         createError(inputPass, errorArr.errorFull)
        } else{
         let passObj = { passUser: pass }
         validArr.push(passObj)
         removeError(inputPass)
        }
 
        if(validArr.length === 2) {
          setParams(validArr)
          setSendForm(true)
        }
     }

    useEffect(() => {
     if(sendFomr === true) {
        let [ email, pass ] = params;
        fetch(`${URL}?name=${email.emailUser}&password=${pass.passUser}`,{
            method: 'GET'
        })
        .then(res => res.json())
        .then(arr => {
            if(arr.length === 0) {
             console.log(arr)
             setErrorUser(true)
            } else{
              const [ name ] = arr
              const emailS = name.name
              const passS = name.password

              if(emailS === email.emailUser && passS === pass.passUser) {
                 setErrorUser(false)
                 localStorage.setItem('auth', name.id)
                 fetch(`${URL}/${name.id}`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                      method: 'PUT',                                                              
                       body: JSON.stringify( { "active": "1" } ) 
                  })
                  .then(res => {
                    return res.json()
                  }) 
                  .then(arr =>{ 
                    setUserId(arr.id)
                    navigate("/");
                  })
              }
              else{
                setErrorUser(true)
              }
            }
        })
        .catch(err => console.log(err))
        .finally(() => setSendForm(false))
        console.log('fetch')
     }
    }, [sendFomr])


    return(

        <section className={temaOn ? `${style.root} ${style.dark}` : style.root}>
             <h4 className={style.title}>Log In</h4>
             <form className={style.form}>
                <fieldset className={style.field}>
                    <legend className={style.label}>Email</legend>
                    <input ref={inputEmail} value={email} onChange={(e) => setEmail(e.target.value)} type="email" className={style.input} />
                </fieldset> 
                <fieldset className={style.field}>
                    <legend className={style.label}>Password</legend>
                    <input ref={inputPass} value={pass} onChange={(e) => setPass(e.target.value)} type="text" className={style.input} />
                </fieldset>
                <p className={style.pk}>By login an account, I agree to Ravk's <span className={temaOn ? `${style.span} ${style.dark}` : style.span}> Terms of Service</span> and <span  className={temaOn ? `${style.span} ${style.dark}` : style.span}>Privacy Policy.
</span></p>
            {
                errorUser && 
                <div className={style.userUndefined}>Ravk account not found.</div>
            }
                <button onClick={(e) => addValidate(e)} type='submit' className={style.btn}>Login</button>
            </form>
        </section>
    )
}

export default Form;