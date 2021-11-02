import { useState, useEffect } from 'react';
import { NewsCard } from '..';
import styles from './News.module.scss';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';
const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data: cryptoNews } = useGetCryptoNewsQuery({
        newsCategory,
        count: simplified ? 3 : 20,
    });
    let { data: cryptosList } = useGetCryptosQuery(100);
    const currencyInitialState = cryptosList?.data?.coins;
    const [cryptos, setCryptos] = useState(null);
    useEffect(() => {
        setCryptos(currencyInitialState);
    }, [currencyInitialState]);

    if (!cryptoNews?.value) return 'Loading...';
    return (
        <div className={styles.news}>
            {!simplified && (
                <h3 className='pink'>Select Functionality goes here</h3>
            )}
            {cryptoNews?.value.map((news, i) => (
                <a key={i} href={news.url} target='_blank' rel='noreferrer'>
                    <NewsCard odd={i % 2 !== 0} news={news} />
                </a>
            ))}
        </div>
    );
};

export default News;
