import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Paper,
  TableContainer
} from '@mui/material'
import LoadingCube from '../../components/LoadingCube/LoadingCube'
import { useGetExchangesQuery } from '../../services/cryptoApi'
import Row from '../../components/ExchangeTable/Row'
import styles from './Exchanges.module.scss'

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery()
  const exchangesList = data?.data?.exchanges

  //   console.log(exchangesList)

  return (
    <>
      <div className={styles.bg_exchange}>
        <div className={styles.banner}>
          <div>
            <h1 className='section_heading pink'>Exchanges</h1>
            <p className={styles.subheading}>
              Get up-to-date exchanges rates and market trades
            </p>
          </div>
          <img
            className={styles.top_crypto_img}
            src='/assets/exchanges.png'
            alt='3d-img'
          />
        </div>

        <div>
          {isFetching ? (
            <LoadingCube />
          ) : (
            <TableContainer component={Paper} className={styles.exchange_table}>
              <Table aria-label='collapse table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='center' className={styles.table_cell}>
                      Exchanges
                    </TableCell>
                    <TableCell align='center' className={styles.table_cell}>
                      Trade Volume
                    </TableCell>
                    <TableCell align='center' className={styles.table_cell}>
                      Markets
                    </TableCell>
                    <TableCell align='center' className={styles.table_cell}>
                      Change percentage
                    </TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {exchangesList ? (
                    exchangesList.map((exchange) => (
                      <Row key={exchange.id} row={exchange} />
                    ))
                  ) : (
                    <>
                      <Row key={1} row={null} />
                      <Row key={2} row={null} />
                      <Row key={3} row={null} />
                      <Row key={4} row={null} />
                      <Row key={5} row={null} />
                      <Row key={6} row={null} />
                    </>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </div>
    </>
  )
}

export default Exchanges
