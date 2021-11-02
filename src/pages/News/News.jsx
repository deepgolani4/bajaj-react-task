import React from 'react';
import { News as NewsComponent } from '../../components/index';
import styles from './News.module.scss';
const News = () => {
    return (
        <div className={styles.all_crypto_page}>
            <div className={styles.banner}>
                <div>
                    <h1 className='section_heading pink'>All Latest News</h1>
                    <h1 className='section_heading'>on Crypto</h1>
                    <p className={styles.subheading}>
                        Know all the trending stuff about cryptos and filter
                        through all the currencies to know in details.
                    </p>
                </div>
                <img
                    className={styles.top_crypto_img}
                    src='/assets/news.png'
                    alt='3d-img'
                />
            </div>

            <img className={styles.radio} src='/assets/radio.png' alt='3dImg' />
            <img
                className={styles.vase2}
                src='/assets/redvase.png'
                alt='3dImg'
            />
            <img className={styles.book} src='/assets/book.png' alt='3dImg' />
            <img
                className={styles.clock}
                src='/assets/clock2.png'
                alt='3dImg'
            />
            <img className={styles.cube} src='/assets/cube.png' alt='3dImg' />

            <NewsComponent />
        </div>
    );
};

export default News;
