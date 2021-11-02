import React, { useState, useEffect } from 'react'

import GlobalCard from '../../components/Reusable/Cards/GlobalCard/GlobalCard'
import Pricetag from '../../components/Reusable/PriceTag/Pricetag'
import PriceChart from '../../components/PriceChart/PriceChart'
import millify from 'millify'
import {
  RiMoneyDollarCircleFill,
  RiTrophyFill,
  RiCopperCoinFill,
  RiCoinsFill
} from 'react-icons/ri'
import { HiLightningBolt } from 'react-icons/hi'
import { IoIosStats } from 'react-icons/io'
import { GiTakeMyMoney } from 'react-icons/gi'
import { BsPatchCheckFill } from 'react-icons/bs'
import { AiFillDollarCircle } from 'react-icons/ai'

import styles from './CryptoStats.module.scss'

const CryptoStats = ({ cryptoDetails, coinId }) => {
  console.log(cryptoDetails)
  const [stats1, setStats1] = useState(
    Array(3).fill({
      title: '',
      value: '',
      icon: ''
    })
  )
  const [stats2, setStats2] = useState(
    Array(5).fill({
      title: '',
      value: '',
      url: ''
    })
  )
  const [stats3, setStats3] = useState(
    Array(3).fill({
      title: '',
      value: '',
      icon: ''
    })
  )
  const [stats4, setStats4] = useState(
    Array(3).fill({
      title: '',
      value: '',
      icon: ''
    })
  )

  useEffect(() => {
    if (cryptoDetails !== undefined) {
      setStats1(() => [
        {
          title: 'Market Cap',
          value: cryptoDetails.marketCap && millify(cryptoDetails.marketCap),
          icon: <RiMoneyDollarCircleFill style={{ color: '#F6A48A' }} />
        },
        {
          title: '24h Volume',
          value: cryptoDetails.volume && millify(cryptoDetails.volume),
          icon: <HiLightningBolt style={{ color: '#E53E3E' }} />
        },
        {
          title: 'Rank',
          value: cryptoDetails.rank,
          icon: <IoIosStats style={{ color: '#25B196' }} />
        }
      ])

      setStats2(() => [
        {
          title: 'Website',
          value:
            cryptoDetails.links.find((x) => x.type === 'website')?.name || 'NA',
          url: cryptoDetails.links.find((x) => x.type === 'website')?.url || ''
        },
        {
          title: 'Explorer',
          value:
            cryptoDetails.links.find((x) => x.type === 'explorer')?.name ||
            'NA',
          url: cryptoDetails.links.find((x) => x.type === 'explorer')?.url || ''
        },
        {
          title: 'Reddit',
          value:
            cryptoDetails.links.find((x) => x.type === 'reddit')?.name || 'NA',
          url: cryptoDetails.links.find((x) => x.type === 'reddit')?.url || ''
        },
        {
          title: 'YouTube',
          value:
            cryptoDetails.links.find((x) => x.type === 'youtube')?.name || 'NA',
          url: cryptoDetails.links.find((x) => x.type === 'youtube')?.url || ''
        },
        {
          title: 'Github',
          value:
            cryptoDetails.links.find((x) => x.type === 'github')?.name || 'NA',
          url: cryptoDetails.links.find((x) => x.type === 'github')?.url || ''
        },
        {
          title: 'Telegram',
          value:
            cryptoDetails.links.find((x) => x.type === 'telegram')?.name ||
            'NA',
          url: cryptoDetails.links.find((x) => x.type === 'telegram')?.url || ''
        }
      ])

      setStats3(() => [
        {
          title: 'ATH',
          value:
            cryptoDetails?.allTimeHigh?.price &&
            millify(cryptoDetails?.allTimeHigh?.price),
          icon: <RiTrophyFill style={{ color: '#E53E3E' }} />
        },
        {
          title: '# of Markets',
          value: cryptoDetails?.numberOfMarkets,
          icon: <RiCopperCoinFill style={{ color: '#25B196' }} />
        },
        {
          title: '# of Exchanges',
          value: cryptoDetails?.numberOfExchanges,
          icon: <RiCoinsFill style={{ color: '#F6A48A' }} />
        }
      ])

      setStats4(() => [
        {
          title: 'Total Supply',
          value:
            cryptoDetails?.totalSupply && millify(cryptoDetails?.totalSupply),
          icon: <AiFillDollarCircle style={{ color: '#25B196' }} />
        },
        {
          title: 'Circulating Supply',
          value:
            cryptoDetails?.circulatingSupply &&
            millify(cryptoDetails?.circulatingSupply),
          icon: <GiTakeMyMoney style={{ color: '#F6A48A' }} />
        },
        {
          title: 'Approved Supply',
          value: cryptoDetails?.approvedSupply,
          icon: <BsPatchCheckFill style={{ color: '#E53E3E' }} />
        }
      ])
    }
  }, [cryptoDetails])

  return (
    <>
      <section className={styles.crypto_details_col1}>
        {stats1.map((stats, index) => (
          <GlobalCard className={styles.crypto_details_card} key={index}>
            <div className={styles.crypto_details_header}>
              {stats.icon}
              <h5>{stats.title}</h5>
            </div>
            <div className={styles.pricetag_wrapper}>
              <Pricetag text={stats.value} />
            </div>
          </GlobalCard>
        ))}
      </section>
      <section className={styles.crypto_details_col2}>
        <GlobalCard className={styles.price_chart_wrapper}>
          <PriceChart coinId={coinId} />
        </GlobalCard>
        <GlobalCard className={styles.coin_info_card}>
          {stats2.map((stats, index) => (
            <div key={index}>
              <h6>{stats.title}</h6>
              <a href={stats.url} target='_blank' rel='noopener noreferrer'>
                {stats.value}
              </a>
            </div>
          ))}
        </GlobalCard>
      </section>
      <section className={styles.crypto_details_col3}>
        {stats3.map((stats, index) => (
          <GlobalCard className={styles.crypto_details_card} key={index}>
            <div className={styles.crypto_details_header}>
              {stats.icon}
              <h5>{stats.title}</h5>
            </div>
            <div className={styles.pricetag_wrapper}>
              <Pricetag text={stats.value} />
            </div>
          </GlobalCard>
        ))}
      </section>
      <section className={styles.crypto_details_col4}>
        {stats4.map((stats, index) => (
          <GlobalCard className={styles.crypto_details_card} key={index}>
            <div className={styles.crypto_details_header}>
              {stats.icon}
              <h5>{stats.title}</h5>
            </div>
            {stats.value === true && (
              <div className={styles.pricetag_wrapper}>
                <Pricetag text={'Yes'} />
              </div>
            )}
            {stats.value === false && (
              <div className={styles.pricetag_wrapper}>
                <Pricetag text={'No'} />
              </div>
            )}
            {stats.value !== true && stats.value !== false && (
              <div className={styles.pricetag_wrapper}>
                <Pricetag text={stats.value} />
              </div>
            )}
          </GlobalCard>
        ))}
      </section>
    </>
  )
}

export default CryptoStats
