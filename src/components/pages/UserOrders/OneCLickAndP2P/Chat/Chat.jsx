import ContentChat from './Content/Content';
import HeaderChat from './Head/Head';
import TextFieldChat from './TextField/Field';
import style from './style.module.css'

function ChatP2P () {

    return (

        <section className={style.root}>
            <HeaderChat/>
            <ContentChat/>
            <TextFieldChat/>
        </section>
    )
}

export default ChatP2P;