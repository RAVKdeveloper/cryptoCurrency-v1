import style from './style.module.css';


function CardDepositLocal ({ image, title, text }) {

    return (

        <article className={style.root}>
            <img src={image} alt="icon" className={style.icon} />
            <div className={style.content}>
                <p className={style.title}>{title}</p>
                <p className={style.text}>{text}</p>
            </div>
        </article>
    )
} 

export default CardDepositLocal;