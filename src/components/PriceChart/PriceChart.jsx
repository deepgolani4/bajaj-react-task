import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { useGetCryptoHistoryQuery } from '../../services/cryptoApi'
import styles from './PriceChart.module.scss'

const PriceChart = ({ coinId }) => {
  const [timePeriod, setTimePeriod] = useState('24h')
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod
  })
  const timePeriods = ['24h', '7d', '30d', '1y', '5y']

  const coinPrice = []
  const coinTimestamp = []

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price)
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    )
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        backgroundColor: '#8b8cf9',
        borderColor: '#8b8cf9',
        fill: false,
        hoverOffset: 4,
        tension: 0.8
      }
    ]
  }

  const options = {
    interaction: {
      intersect: false
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          callback: function (val, index) {
            return index % 2 === 0 ? this.getLabelForValue(val) : ''
          },
          color: 'white'
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          beginAtZero: false,
          color: 'white'
        }
      }
    },
    elements: {
      point: {
        radius: 0
      }
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'white'
        }
      }
    }
  }

  return (
    <div className={styles.price_chart}>
      <div className={styles.time_periods}>
        {timePeriods.map((time, index) => (
          <span
            onClick={() => setTimePeriod(() => time)}
            className={
              timePeriod === time
                ? styles.time + ' ' + styles.active_time
                : styles.time
            }
            key={index}
          >
            {time}
          </span>
        ))}
      </div>
      <Line data={data} options={options} />
    </div>
  )
}

export default PriceChart
