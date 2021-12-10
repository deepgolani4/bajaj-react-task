import React from 'react'
import GlobalCard from '../../components/Reusable/Cards/GlobalCard/GlobalCard'
import CryptoStats from '../../components/CryptoStats/CryptoStats'
import CryptoSuggestions from '../../components/CryptoSuggestions/CryptoSuggestions'
import LoadingCube from '../../components/LoadingCube/LoadingCube'
// Styles
import styles from './CryptoDetails.module.scss'
import { BsTriangleFill } from 'react-icons/bs'
// modules
import { useParams } from 'react-router'
import { useGetCryptoDetailsQuery } from '../../services/cryptoApi'

const CryptoDetails = () => {
  const { coinId } = useParams()
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
  const cryptoDetails = data?.data?.coin

  return (
    <div className={styles.crypto_details}>
      {isFetching ? (
        <LoadingCube />
      ) : (
        <>
          <section className={styles.crypto_main}>
            <div className={styles.crypto_main_left}>
              <div className={styles.crypto_header}>
                <img
                  className={styles.crypto_logo}
                  src={cryptoDetails?.iconUrl}
                  alt={cryptoDetails?.name}
                />
                <h2 className={styles.crypto_name}>
                  {cryptoDetails?.name}
                  <span className={styles.slash}>/</span>
                  <span className={styles.crypto_symbols}>
                    {cryptoDetails?.symbol}
                  </span>
                </h2>
              </div>
              <div className={styles.crypto_price_info}>
                <h3 className={styles.crypto_price}>
                  $ {parseFloat(cryptoDetails?.price).toPrecision(8)}
                </h3>
                <h5 className={styles.crypto_price_change}>
                  <BsTriangleFill />
                  2.80 %
                </h5>
              </div>
            </div>
            <div className={styles.crypto_main_right}>
              <img src='/assets/hold-coin.png' alt='Crypto Coin' />
            </div>
          </section>
          <CryptoStats cryptoDetails={cryptoDetails} coinId={coinId} />
          <section className={styles.what_is}>
            <GlobalCard className={styles.what_is_card}>
              <h4>What is {cryptoDetails?.name} ?</h4>
              <p
                dangerouslySetInnerHTML={{ __html: cryptoDetails?.description }}
              />
              <img
                className={styles.bulb}
                src='/assets/bulb.png'
                alt='What is crypto'
              />
            </GlobalCard>
          </section>
          <CryptoSuggestions coinId={coinId} />
        </>
      )}
    </div>
  )
}

export default CryptoDetails
