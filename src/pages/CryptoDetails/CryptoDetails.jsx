import React from 'react'
import GlobalCard from '../../components/Cards/GlobalCard/GlobalCard'
import Pricetag from '../../components/PriceTag/Pricetag'
import styles from './CryptoDetails.module.scss'
import { BsTriangleFill } from 'react-icons/bs'
import millify from 'millify'

const CryptoDetails = () => {
  return (
    <div className={styles.crypto_details}>
      <section className={styles.crypto_main}>
        <div className={styles.crypto_main_left}>
          <div className={styles.crypto_header}>
            <img
              className={styles.crypto_logo}
              src='/assets/shield.png'
              alt=''
            />
            <h2 className={styles.crypto_name}>Bitcoin</h2>
          </div>
          <div className={styles.crypto_price_info}>
            <h3 className={styles.crypto_price}>$ 62,289.01</h3>
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
      <section className={styles.crypto_details_col1}>
        <GlobalCard className={styles.crypto_details_card}>
          <div className={styles.crypto_details_header}>
            <img src='/assets/spin.png' alt='' />
            <h5>Market Cap</h5>
          </div>
          <div className={styles.pricetag_wrapper}>
            <Pricetag text={millify(60000)} />
          </div>
        </GlobalCard>
        <GlobalCard className={styles.crypto_details_card}>
          <div className={styles.crypto_details_header}>
            <img src='/assets/spin.png' alt='' />
            <h5>Market Cap</h5>
          </div>
          <div className={styles.pricetag_wrapper}>
            <Pricetag text={millify(60000)} />
          </div>
        </GlobalCard>
        <GlobalCard className={styles.crypto_details_card}>
          <div className={styles.crypto_details_header}>
            <img src='/assets/spin.png' alt='' />
            <h5>Market Cap</h5>
          </div>
          <div className={styles.pricetag_wrapper}>
            <Pricetag text={millify(60000)} />
          </div>
        </GlobalCard>
      </section>
      <section className={styles.crypto_details_col2}>
        <GlobalCard className={styles.price_chart_wrapper}>
          Price Chart
        </GlobalCard>
        <GlobalCard className={styles.coin_info_card}>
          <div>
            <h6>Website</h6>
            <p>bitcoin.org</p>
          </div>
          <div>
            <h6>Whitepaper</h6>
            <p>Bitcoin Whitepaper</p>
          </div>
          <div>
            <h6>Github</h6>
            <p>github.com/bitcoin</p>
          </div>
          <div>
            <h6>Explorer</h6>
            <p>blockchain.com</p>
          </div>
          <div>
            <h6>Reddit</h6>
            <p>r/bitcoin</p>
          </div>
        </GlobalCard>
      </section>
      <section className={styles.crypto_details_col3}>
        <GlobalCard className={styles.crypto_details_card}>
          <div className={styles.crypto_details_header}>
            <img src='/assets/spin.png' alt='' />
            <h5>Market Cap</h5>
          </div>
          <div className={styles.pricetag_wrapper}>
            <Pricetag text={millify(60000)} />
          </div>
        </GlobalCard>
        <GlobalCard className={styles.crypto_details_card}>
          <div className={styles.crypto_details_header}>
            <img src='/assets/spin.png' alt='' />
            <h5>Market Cap</h5>
          </div>
          <div className={styles.pricetag_wrapper}>
            <Pricetag text={millify(60000)} />
          </div>
        </GlobalCard>
        <GlobalCard className={styles.crypto_details_card}>
          <div className={styles.crypto_details_header}>
            <img src='/assets/spin.png' alt='' />
            <h5>Market Cap</h5>
          </div>
          <div className={styles.pricetag_wrapper}>
            <Pricetag text={millify(60000)} />
          </div>
        </GlobalCard>
      </section>
      <section className={styles.crypto_details_col4}>
        <GlobalCard className={styles.crypto_details_card}>
          <div className={styles.crypto_details_header}>
            <img src='/assets/spin.png' alt='' />
            <h5>Market Cap</h5>
          </div>
          <div className={styles.pricetag_wrapper}>
            <Pricetag text={millify(60000)} />
          </div>
        </GlobalCard>
        <GlobalCard className={styles.crypto_details_card}>
          <div className={styles.crypto_details_header}>
            <img src='/assets/spin.png' alt='' />
            <h5>Market Cap</h5>
          </div>
          <div className={styles.pricetag_wrapper}>
            <Pricetag text={millify(60000)} />
          </div>
        </GlobalCard>
        <GlobalCard className={styles.crypto_details_card}>
          <div className={styles.crypto_details_header}>
            <img src='/assets/spin.png' alt='' />
            <h5>Market Cap</h5>
          </div>
          <div className={styles.pricetag_wrapper}>
            <Pricetag text={millify(60000)} />
          </div>
        </GlobalCard>
      </section>
      <section className={styles.what_is}>
        <GlobalCard className={styles.what_is_card}>
          <h4>What is Bitcoin ?</h4>
          <p>
            The live Bitcoin price today is ₹4,548,848 INR with a 24-hour
            trading volume of ₹2,545,188,236,133 INR. We update our BTC to INR
            price in real-time. Bitcoin is down 4.05% in the last 24 hours. The
            current CoinMarketCap ranking is #1, with a live market cap of
            ₹85,754,199,992,157 INR.
          </p>
        </GlobalCard>
      </section>
      <section className={styles.suggestions}>
        <h2>Suggestions</h2>
        <div className={styles.suggestions_cards}>
          <GlobalCard className={styles.suggestions_card}>
            <div className={styles.crypto_details_header}>
              <h5>Market Cap</h5>
            </div>
            <div className={styles.pricetag_wrapper}>
              <Pricetag text={millify(60000)} />
            </div>
          </GlobalCard>
        </div>
      </section>
    </div>
  )
}

export default CryptoDetails
