import React from 'react';
import styles from './Button.module.scss';
const Button = ({ onClick, text, icon, children }) => {
    return (
        <div>
            <button className={styles.secondary_btn} onClick={onClick}>
                {text}
                {children}
            </button>
        </div>
    );
};

export default Button;
