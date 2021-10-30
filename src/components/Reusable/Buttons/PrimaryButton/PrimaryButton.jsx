import React from 'react';
import styles from './PrimaryButton.module.scss';
const PrimaryButton = ({ onClick, text, icon, children }) => {
    return (
        <div>
            <button className={styles.primary_btn} onClick={onClick}>
                {text}
                {children}
            </button>
        </div>
    );
};

export default PrimaryButton;
