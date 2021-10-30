import React from 'react';
import styles from './Pricetag.module.scss';
const Pricetag = ({ text }) => {
    return (
        <div className={styles.price_tag}>
            <p>{text}</p>
        </div>
    );
};

export default Pricetag;
