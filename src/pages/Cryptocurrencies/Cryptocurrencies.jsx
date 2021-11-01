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
                        Learn about all the Cryptocurrencies. Do your research.
                        Search and find every single detail about them.
                    </p>
                </div>
                <img
                    className={styles.top_crypto_img}
                    src='/assets/allcryptos.png'
                    alt='3d-img'
                />
            </div>

            <img className={styles.vase1} src='/assets/vase1.png' alt='3dImg' />
            <img
                className={styles.vase2}
                src='/assets/redvase.png'
                alt='3dImg'
            />
            <img className={styles.cube} src='/assets/cube.png' alt='3dImg' />

            <CryptoCurrencies />
        </div>
    );
};

export default Cryptocurrencies;
