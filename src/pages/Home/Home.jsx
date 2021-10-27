import React from 'react';
import { GlobalStatsSection } from '../../components';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.home_page}>
            <div className={styles.banner}>
                <div>
                    <h1>Global Crypto</h1>
                    <h1>Statistics.</h1>
                    <p className={styles.subheading}>
                        Get all the information about cryptos here.
                    </p>
                </div>
                <img
                    className={styles.globe}
                    src='/assets/globe.png'
                    alt='crypto globe'
                />
                <div>
                    <img
                        className={styles.blob_one}
                        src='/assets/blob1.svg'
                        alt='blob1'
                    />
                    <img
                        className={styles.spin}
                        src='/assets/spin.png'
                        alt='blob1'
                    />
                    <img
                        className={styles.vase}
                        src='/assets/vase1.png'
                        alt='circuit'
                    />
                </div>
            </div>
            <GlobalStatsSection />
        </div>
    );
};

export default Home;
