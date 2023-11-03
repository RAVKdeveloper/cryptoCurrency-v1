
import './bellhover.css';

import arrowImg from './../../../img/header/icons8-arrow-30.png';
import mailImg from './../../../img/header/iconfinder-mail-4341305_120538.svg';

function BellHover () {

return (

    <article className="bell__sidebar__header">
        <div className="bell__sidebar__card__title__notific">
            <div className="value__notific__sidebar__header">
                <span>401</span> New Notification
            </div>
            <div className="view__more__bell__notific__header">
                View more <img src={arrowImg} alt="arrow" />
            </div>
        </div>
        <div className="notific__bell__sidebar__wrap__header">
            <div className="card__notific__bell__sidebar__header__body">
                <img src={mailImg} alt="mail" className="icon__card__notific" />
                <div className="column__info__natific__bell__sidebar">
                    <p className="title__card__bell__sidebar">Депозит подтверждён</p>
                    <p className="desc__card__bell__sidebar">Уважаемый трейдер Ravk, ваш депозит успешно подтверждён</p>
                </div>
            </div>
        </div>
    </article>

)

}

export default BellHover;