import React from 'react';
import { CryptoCurrencies, GlobalStatsSection } from '../../components';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.home_page}>
            <div className={styles.banner}>
                <div>
                    <h1 className='section_heading'>Global Crypto</h1>
                    <h1 className='section_heading'>Statistics.</h1>
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
            <div className={styles.top_cryptocurrency_heading}>
                <img
                    className={styles.top_crypto_img}
                    src='/assets/allcryptos.png'
                    alt='3d-img'
                />
                <h1 className={`section_heading ${styles.top_cyptos_title}`}>
                    Top 9 Cryptos in the World
                </h1>
                <img
                    className={styles.blob2}
                    src='/assets/blob2.svg'
                    alt='blob'
                />
            </div>
            <CryptoCurrencies simplified />
        </div>
    );
};

export default Home;
