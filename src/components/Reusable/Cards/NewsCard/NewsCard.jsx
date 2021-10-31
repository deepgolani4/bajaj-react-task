import React from 'react';
import styles from './NewsCard.module.scss';
const NewsCard = () => {
    return (
        <div className={styles.news_card}>
            <div className={styles.left}>
                <h3 className={styles.news_title}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque porta ...
                </h3>
                <p className={styles.news_desc}>
                    Quisque placerat ornare faucibus. Curabitur tincidunt erat
                    nunc, in rutrum ante gravida vitae. Nunc eget dolor
                    imperdiet......
                </p>
                <div className={styles.news_provider}>
                    <img src='' alt='' />
                    <p>Yahoo News.</p>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.img_container}>
                    <img src='/assets/newsplaceholder.png' alt='' />
                </div>
                <p>41 minutes ago.</p>
            </div>
        </div>
    );
};

export default NewsCard;
