import { GlobalCard, Pricetag } from '..';
import styles from './GlobalStatsSection.module.scss';
import { SiBitcoinsv } from 'react-icons/si';
import { BsCurrencyExchange } from 'react-icons/bs';
const GlobalStatsSection = () => {
    return (
        <div className={styles.globalSection}>
            <GlobalCard className={styles.total_crypto_card}>
                <div className={styles.total_crypto_card_inner}>
                    <SiBitcoinsv color='8B8CF9' size='2.5rem' />
                    <h5>Total Cryptocurrency</h5>
                    <Pricetag text='12176' />
                </div>
            </GlobalCard>
            <GlobalCard className={styles.total_marketCap_card}>
                <div className={styles.priceTag_wrapper}>
                    <Pricetag text='373' />
                </div>
                <h5>Total Exchanges</h5>
            </GlobalCard>
            <GlobalCard className={`${styles.total_crypto_card} ${styles.tmc}`}>
                <div className={styles.total_crypto_card_inner}>
                    <BsCurrencyExchange color='8B8CF9' size='3rem' />
                    <h5>Total Market Cap</h5>
                    <Pricetag text='$2.4T' />
                </div>
            </GlobalCard>
            <GlobalCard className={styles.total_marketCap_card}>
                <div className={styles.priceTag_wrapper}>
                    <Pricetag text='80K' />
                </div>
                <h5>Total Markets</h5>
            </GlobalCard>
        </div>
    );
};

export default GlobalStatsSection;
