import { useState } from 'react';
import { NewsCard } from '..';
import styles from './News.module.scss';
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';
const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data: cryptoNews } = useGetCryptoNewsQuery({
        newsCategory,
        count: simplified ? 3 : 20,
    });
    console.log(cryptoNews);
    if (!cryptoNews?.value) return 'Loading...';
    return (
        <div className={styles.news}>
            {cryptoNews?.value.map((news) => (
                <NewsCard />
            ))}
        </div>
    );
};

export default News;
