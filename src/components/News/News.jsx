import { useState, useEffect } from 'react'
import { NewsCard } from '..'
import styles from './News.module.scss'
import { useGetCryptosQuery } from '../../services/cryptoApi'
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi'
import Dropdown from '../Reusable/Dropdown/Dropdown'
import LoadingCube from '../LoadingCube/LoadingCube'

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 3 : 20
  })
  console.log(cryptoNews)
  let { data: cryptosList } = useGetCryptosQuery(100)
  const currencyInitialState = cryptosList?.data?.coins
  const [cryptos, setCryptos] = useState(null)
  console.log(cryptos)
  useEffect(() => {
    setCryptos(currencyInitialState)
  }, [currencyInitialState])
  const updateCatagory = (c) => {
    setNewsCategory(c)
  }

  if (!cryptoNews?.value) return <LoadingCube />

  return (
    <div className={styles.news}>
      {!simplified && (
        <Dropdown
          title={newsCategory}
          updateCatagory={updateCatagory}
          list={currencyInitialState}
        />
      )}
      {cryptoNews?.value.map((news, i) => (
        <a key={i} href={news.url} target='_blank' rel='noreferrer'>
          <NewsCard odd={i % 2 !== 0} news={news} />
        </a>
      ))}
    </div>
  )
}

export default News
