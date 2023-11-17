import style from './style.module.css';
import Header from './../Registration/Header/Header'
import { useState } from 'react';
import Form from './Form/Form';

function Login () {

    const [tema, setTema] = useState(false);

    return(

        <section className={tema ?`${style.login} ${style.dark}` : style.login}>
            <Header temaOn={tema} setTemaOn={setTema}/>
            <Form temaOn={tema}/>
        </section>
    )
}

export default Login;