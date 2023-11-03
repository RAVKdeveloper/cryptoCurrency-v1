
import './dowloand.css';

import qrImg from './../../../img/header/dowloandqr.png';


function DowloandHover () {

return (

   <article className="dowloand__hover__header__sidebar">
    <img src={qrImg} alt="" className="qr__dowloand__sidebar__header__img" />
    <p className="text__dowloand__sidebar__header">Scan to Dowloand App</p>
    <div className="btn__dowloand__sidebar__header">More Dowloand Options</div>
   </article>

)

}

export default DowloandHover;