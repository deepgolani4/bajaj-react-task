import React, { useState, useEffect } from 'react'
import styles from './CryptoSuggestions.module.scss'
import { useGetCryptoDetailsQuery } from '../../services/cryptoApi'
import { Link } from 'react-router-dom'
import CoinCard from '../../components/Reusable/Cards/CoinCard/CoinCard'

const CryptoSuggestions = ({ coinId }) => {
  const { data: nxt1 } = useGetCryptoDetailsQuery(parseInt(coinId) + 1)
  const { data: nxt2 } = useGetCryptoDetailsQuery(parseInt(coinId) + 2)
  const { data: nxt3 } = useGetCryptoDetailsQuery(parseInt(coinId) + 3)
  const cryptoDetails1 = nxt1?.data?.coin
  const cryptoDetails2 = nxt2?.data?.coin
  const cryptoDetails3 = nxt3?.data?.coin

  const [suggestions, setSuggestions] = useState(
    Array(4).fill({
      id: coinId,
      currency: {
        iconUrl: '',
        rank: 0,
        name: '',
        marketCap: 0,
        change: 0,
        price: 0
      },
      color: '#8b8cf9'
    })
  )

  useEffect(() => {
    if (
      cryptoDetails1 !== undefined &&
      cryptoDetails2 !== undefined &&
      cryptoDetails3 !== undefined
    ) {
      setSuggestions([
        {
          id: parseInt(coinId) + 1,
          currency: {
            iconUrl: cryptoDetails1.iconUrl,
            rank: cryptoDetails1.rank,
            name: cryptoDetails1.name,
            marketCap: cryptoDetails1.marketCap,
            change: cryptoDetails1.change,
            price: cryptoDetails1.price
          },
          color: '#FFCDBD'
        },
        {
          id: parseInt(coinId) + 2,
          currency: {
            iconUrl: cryptoDetails2.iconUrl,
            rank: cryptoDetails2.rank,
            name: cryptoDetails2.name,
            marketCap: cryptoDetails2.marketCap,
            change: cryptoDetails2.change,
            price: cryptoDetails2.price
          },
          color: '#FFDCA8'
        },
        {
          id: parseInt(coinId) + 3,
          currency: {
            iconUrl: cryptoDetails3.iconUrl,
            rank: cryptoDetails3.rank,
            name: cryptoDetails3.name,
            marketCap: cryptoDetails3.marketCap,
            change: cryptoDetails3.change,
            price: cryptoDetails3.price
          },
          color: '#D0FFF2'
        }
      ])
    }
  }, [cryptoDetails1, cryptoDetails2, cryptoDetails3, coinId])

  return (
    <section className={styles.suggestions}>
      <h2>Suggestions</h2>
      <div className={styles.suggestions_cards}>
        {suggestions.map((coin, index) => (
          <Link to={`/crypto/${coin.coinId}`} key={index}>
            <CoinCard currency={coin.currency} color={coin.color} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CryptoSuggestions
