import React, { useState, useEffect } from 'react';
import { PrimaryButton, CoinCard } from '../index';
import styles from './CryptoCurrencies.module.scss';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
const CryptoCurrencies = ({ simplified }) => {
    const count = simplified ? 9 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    console.log(cryptosList);
    const currencyInitialState = cryptosList?.data?.coins;
    const [cryptos, setCryptos] = useState(null);
    useEffect(() => {
        setCryptos(currencyInitialState);
    }, [currencyInitialState]);
    const [searchedCrypto, setSearchedCrypto] = useState('');
    const colorMap = {
        1: '#FFDCA8',
        2: '#D0FFF2',
        0: '#FFCDBD',
    };
    useEffect(() => {
        const filterdData = cryptosList?.data?.coins.filter((coin) =>
            coin.name.toLowerCase().includes(searchedCrypto.toLowerCase())
        );
        setCryptos(filterdData);
    }, [cryptosList, searchedCrypto]);
    if (isFetching) return 'Loading...';
    return (
        <div className={styles.cryptocurrencies}>
            {!simplified && (
                <div className={styles.search_crypto}>
                    <input
                        className={styles.search}
                        onChange={(e) => setSearchedCrypto(e.target.value)}
                        placeholder='Search Cryptocurrency'
                        value={searchedCrypto}
                        type='text'
                        name=''
                    />
                    <div className={styles.searchIcon}>
                        <FiSearch size='2rem' />
                    </div>
                    <PrimaryButton
                        text='Reset'
                        onClick={() => setSearchedCrypto('')}
                    />
                </div>
            )}
            <div className={styles.cryptocurrencies_list}>
                {cryptos?.map((currency) => (
                    <Link key={currency.id} to={`/crypto/${currency.id}`}>
                        <CoinCard
                            currency={currency}
                            color={colorMap[currency.rank % 3]}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CryptoCurrencies;
