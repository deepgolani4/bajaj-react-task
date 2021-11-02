import React from 'react';
import styles from './Advertisement.module.scss';
import { Button } from '..';
import { GiFireBomb } from 'react-icons/gi';
const Advertisement = () => {
    return (
        <div className={styles.advertisement}>
            <div className={styles.ad_title}>
                <GiFireBomb size='3rem' />
                <h3>Your place for all crypto stuff!</h3>
            </div>
            <div className={styles.features}>
                <div className={styles.tag}>
                    <p>Exhanges</p>
                </div>
                <div className={styles.tag}>
                    <p>NFTs</p>
                </div>
                <div className={styles.tag}>
                    <p>Graphs</p>
                </div>
                <div className={styles.tag}>
                    <p>News</p>
                </div>
            </div>
            <h4>What more you need?</h4>
            <img src='/assets/bomb.png' alt='bomb' />
        </div>
    );
};

export default Advertisement;
