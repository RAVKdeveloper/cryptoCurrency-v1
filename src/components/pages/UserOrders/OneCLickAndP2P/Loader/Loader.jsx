import style from './style.module.css'


function LoaderOrder () {

    return (
        <section className={style.root}>
        <div className={style.container}>
        <div className={`${style.item} ${style.itemOne}`}></div>
        <div className={`${style.item} ${style.itemTwo}`}></div>
        <div className={`${style.item} ${style.itemThree}`}></div>
        <div className={`${style.item} ${style.itemFour}`}></div>
      </div>
      </section>
    )
}

export default LoaderOrder;