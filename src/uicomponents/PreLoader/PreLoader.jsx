import style from './style.module.css';


function PreLoader () {

    return(

        <div className={style.preloader}>
            <p className={style.text}>Loading...</p>
        </div>
    )
}

export default PreLoader;