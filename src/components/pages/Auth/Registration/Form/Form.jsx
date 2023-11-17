import { useContext, useEffect, useRef, useState } from 'react';
import style from './style.module.css';
import { createError, removeError } from '../../../../../Helpers/Validate/Validate';
import { URL } from '../../../dashbord/AccountInfo/AccountInfo';
import { AccountContext } from '../../../../../App';
import { Navigate, Route, useNavigate } from 'react-router-dom';

function Form ({ temaOn }) {

    const { userId, setUserId } = useContext(AccountContext);

    const validArr = []

        const errorArr = {
            errorFull: 'Поле не заполнено',
            errorServerUnique: 'Пользователь с такой почтой уже существует',
            passwordError: 'Пароль должен быть больше 5 символов',
          }

    const [sendFomr, setSendForm] = useState(false)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const [params, setParams] = useState();
    let navigate = useNavigate()

    const form = useRef('')
    const inputEmail = useRef('');
    const inputUsername = useRef('');
    const inputPass = useRef('');


    function addValidate(e) {
       e.preventDefault(); 

        removeError(inputUsername)
        removeError(inputEmail)

       if(email === '') {
        createError(inputEmail, errorArr.errorFull)
       } else{
        removeError(inputEmail)
        let emailObj = { emailUser: email }
        validArr.push(emailObj)
       } if(username === '') {
        createError(inputUsername, errorArr.errorFull)
       } else{
        removeError(inputUsername)
        let userObj = { usernameUser: username }
        validArr.push(userObj)
       } if(pass === '') {
        createError(inputPass, errorArr.errorFull)
       } else{
        let passObj = { passUser: pass }
        validArr.push(passObj)
        removeError(inputPass)
       }

       if(validArr.length === 3) {
         setParams(validArr)
         setSendForm(true)
       }
    }

    useEffect(() => {
       if(sendFomr === true) {
        let [ email, username , pass ] = params;
        console.log(pass.passUser)
         fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "name": email.emailUser, "password": pass.passUser, "active": "1", "nickname": username.usernameUser,"balance": "0.00"  }),
         })
         .then(res => {
            return res.json()
         })
         .then(arr => {
            setUserId(arr.id)
            localStorage.setItem('auth', arr.id)
            navigate("/")
         })
       }
    }, [sendFomr])

    return(

        <section className={temaOn ? `${style.root} ${style.dark}` : style.root}>
            <h4 className={style.title}>Create Personal Account</h4>
            <form ref={form} className={style.form}>
                <fieldset className={style.field}>
                    <legend className={style.label}>Email</legend>
                    <input ref={inputEmail} value={email} onChange={(e) => setEmail(e.target.value)} type="email" className={style.input} />
                </fieldset> 
                <fieldset className={style.field}>
                    <legend className={style.label}>Username</legend>
                    <input ref={inputUsername} value={username} onChange={(e) => setUsername(e.target.value)} type="text" className={style.input} />
                </fieldset> 
                <fieldset className={style.field}>
                    <legend className={style.label}>Password</legend>
                    <input ref={inputPass} value={pass} onChange={(e) => setPass(e.target.value)} type="text" className={style.input} />
                </fieldset>
                <p className={style.pk}>By creating an account, I agree to Ravk's <span className={temaOn ? `${style.span} ${style.dark}` : style.span}> Terms of Service</span> and <span  className={temaOn ? `${style.span} ${style.dark}` : style.span}>Privacy Policy.
</span></p>
                <button onClick={(e) => addValidate(e)} type='submit' className={style.btn}>Registration</button>
            </form>
        </section>
    )
}

export default Form;