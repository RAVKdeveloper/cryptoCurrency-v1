import VIPCard from './Card/Card';
import style from './style.module.css';


function RoadVip () {

    return (

        <section className={style.root}>
            <h4 className={style.title}>Road to VIP</h4>
            <h6 className={style.subtitle}>Meet any of the criteria below to start enjoying Bybit VIP perks!</h6>
            <div className={style.cardRow}>
                <VIPCard title='Account Equity (USD)' value='0 / 50,000 USD' link='Deposit Now' active={true} />
                <VIPCard title='30-Day Derivatives Trading Volume' value='0 / 10,000,000 USD' link='Trade Now' active={true} />
                <VIPCard title='30-Day Spot Trading Volume' value='0 / 1,000,000 USD' link='Trade Now' active={false} />
            </div>
        </section>
    )
}

export default RoadVip;