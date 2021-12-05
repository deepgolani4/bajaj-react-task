import React from 'react';
import styles from './Advertisement.module.scss';
import { GiFireBomb } from 'react-icons/gi';
const Advertisement = () => {
    return (
        <div className={styles.advertisement}>
            <div className={styles.left}>
                <div className={styles.ad_title}>
                    <h3>
                        Your place for all crypto stuff!{' '}
                        <GiFireBomb size='3rem' />
                    </h3>
                </div>
                <div className={styles.features}>
                    <div className={styles.tag}>
                        <p>Exhanges</p>
                    </div>
                    {/* <div className={styles.tag}>
                        <p>NFTs</p>
                    </div> */}
                    <div className={styles.tag}>
                        <p>Graphs</p>
                    </div>
                    <div className={styles.tag}>
                        <p>News</p>
                    </div>
                </div>
                <h4>What more you need?</h4>
            </div>
            <div className={styles.right}>
                <img src='/assets/hatman.png' alt='man' />
            </div>
        </div>
    );
};

export default Advertisement;
