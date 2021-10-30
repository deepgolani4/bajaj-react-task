import React from 'react';
import { CryptoCurrencies } from '../../components/index';
import styles from './Cryptocurrencies.module.scss';
const Cryptocurrencies = () => {
    return (
        <div className={styles.all_crypto_page}>
            <div className={styles.banner}>
                <div>
                    <h1 className='section_heading pink'>Cryptocurrency</h1>
                    <h1 className='section_heading'>Market</h1>
                    <p className={styles.subheading}>
                        Learn about all the Cryptocurrencies. Do your research,
                        search them and know every single detail about them.
                    </p>
                </div>
                <img
                    className={styles.top_crypto_img}
                    src='/assets/allcryptos.png'
                    alt='3d-img'
                />
            </div>

            <CryptoCurrencies />
        </div>
    );
};

export default Cryptocurrencies;
