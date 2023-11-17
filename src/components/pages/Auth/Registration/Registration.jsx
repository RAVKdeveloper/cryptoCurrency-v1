import { useState } from 'react';
import HeaderReg from './Header/Header';
import style from './style.module.css';
import Form from './Form/Form';


function Registration () {

    const [tema, setTema] = useState(false);

    return(

        <section className={tema ?`${style.registration} ${style.dark}` : style.registration}>
            <HeaderReg temaOn={tema} setTemaOn={setTema}/>
            <Form temaOn={tema}/>
        </section>
    )
}

export default Registration;