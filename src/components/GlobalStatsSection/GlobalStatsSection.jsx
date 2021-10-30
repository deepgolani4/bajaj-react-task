import { GlobalCard, Pricetag } from '..';
import styles from './GlobalStatsSection.module.scss';
import { SiBitcoinsv } from 'react-icons/si';
import { BsCurrencyExchange } from 'react-icons/bs';
import { GiCubeforce } from 'react-icons/gi';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import millify from 'millify';
const GlobalStatsSection = () => {
    const { data, isFetching } = useGetCryptosQuery(9);
    const globalStats = data?.data?.stats;

    if (isFetching) return 'Loading...';
    return (
        <div className={styles.globalSection}>
            <GlobalCard className={styles.total_crypto_card}>
                <div className={styles.total_crypto_card_inner}>
                    <div className={styles.icon}>
                        <SiBitcoinsv size='2.5rem' />
                    </div>

                    <h5>Total Cryptocurrency</h5>
                    <Pricetag text={globalStats.total} />
                </div>
            </GlobalCard>
            <GlobalCard className={styles.total_marketCap_card}>
                <div className={styles.priceTag_wrapper}>
                    <Pricetag text={millify(globalStats.totalExchanges)} />
                </div>
                <h5>Total Exchanges</h5>
            </GlobalCard>
            <GlobalCard className={`${styles.total_crypto_card} ${styles.tmc}`}>
                <div className={styles.total_crypto_card_inner}>
                    <div className={styles.icon}>
                        <BsCurrencyExchange size='3rem' />
                    </div>
                    <h5>Total Market Cap</h5>
                    <Pricetag
                        text={`$${millify(globalStats.totalMarketCap)}`}
                    />
                </div>
            </GlobalCard>
            <GlobalCard className={styles.total_marketCap_card}>
                <div className={styles.priceTag_wrapper}>
                    <Pricetag text={millify(globalStats.totalMarkets)} />
                </div>
                <h5>Total Markets</h5>
            </GlobalCard>
            <GlobalCard className={`${styles.total_crypto_card} ${styles.tmc}`}>
                <div className={styles.total_crypto_card_inner}>
                    <div className={styles.icon}>
                        <GiCubeforce size='3rem' />
                    </div>

                    <h5>Total 24h Volume</h5>
                    <Pricetag
                        text={`$${millify(globalStats.total24hVolume)}`}
                    />
                </div>
            </GlobalCard>
        </div>
    );
};

export default GlobalStatsSection;
