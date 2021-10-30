import React from 'react';
import Pricetag from '../../PriceTag/Pricetag.jsx';
import GlobalCard from '../GlobalCard/GlobalCard.jsx';
import styles from './CoinCard.module.scss';
import { millify } from 'millify';
const CoinCard = ({ currency, color }) => {
    const style = {
        backgroundColor: color,
        boxShadow: `0 0 10px ${color}`,
    };
    return (
        <GlobalCard className={styles.coin_card}>
            <div className={styles.coin_icon} style={style}>
                <img src={currency.iconUrl} alt='' />
            </div>
            <h3>{`${currency.rank}. ${currency.name}`}</h3>
            <div className={styles.coin_info}>
                <p className={styles.info_title}>Market Cap : </p>
                <h4>${millify(currency.marketCap)}</h4>
            </div>
            <div className={styles.coin_info}>
                <p className={styles.info_title}>Daily Change : </p>
                <h4 className='green'>{millify(currency.change)}%</h4>
            </div>
            <div className={styles.price}>
                <Pricetag text={`$ ${millify(currency.price)}`} />
            </div>
        </GlobalCard>
    );
};

export default CoinCard;
