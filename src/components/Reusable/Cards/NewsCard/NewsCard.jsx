import moment from 'moment';
import React from 'react';
import styles from './NewsCard.module.scss';
const demoImg = './assets/newsplaceholder.png';
const NewsCard = ({ news, odd }) => {
    const style = {
        backgroundColor: '#A68AF6',
    };
    const style2 = {
        backgroundColor: '#8b8cf9',
    };
    return (
        <div style={odd === true ? style : style2} className={styles.news_card}>
            <div className={styles.left}>
                <div>
                    <h3 className={styles.news_title}>{news.name}</h3>
                    <p className={styles.news_desc}>
                        {news.description.length > 100
                            ? `${news.description.substring(0, 100)}...`
                            : news.description}
                    </p>
                </div>

                <div className={styles.news_provider}>
                    <div className={styles.img_wrapper}>
                        <img
                            src={
                                news.provider[0]?.image?.thumbnail
                                    ?.contentUrl || demoImg
                            }
                            alt=''
                        />
                    </div>
                    <p>{news.provider[0]?.name}</p>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.img_container}>
                    <img
                        src={news?.image?.thumbnail?.contentUrl || demoImg}
                        alt=''
                    />
                </div>
                <p>{moment(news.datePublished).startOf('ss').fromNow()}</p>
            </div>
        </div>
    );
};

export default NewsCard;
