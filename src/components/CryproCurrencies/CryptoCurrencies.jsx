import React, { useState, useEffect } from 'react';
import { CoinCard } from '../index';
import styles from './CryptoCurrencies.module.scss';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import { Link } from 'react-router-dom';
const CryptoCurrencies = ({ simplified }) => {
    const count = simplified ? 9 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    console.log(cryptosList);
    const currencyInitialState = cryptosList?.data?.coins;
    const [cryptos, setCryptos] = useState(null);
    useEffect(() => {
        setCryptos(currencyInitialState);
    }, [currencyInitialState]);

    const colorMap = {
        1: '#FFDCA8',
        2: '#D0FFF2',
        0: '#FFCDBD',
    };
    if (isFetching) return 'Loading...';
    return (
        <div className={styles.cryptocurrencies}>
            {cryptos?.map((currency) => (
                <Link key={currency.id} to={`/crypto/${currency.id}`}>
                    <CoinCard
                        currency={currency}
                        color={colorMap[currency.rank % 3]}
                    />
                </Link>
            ))}
        </div>
    );
};

export default CryptoCurrencies;
