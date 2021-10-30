
import styles from './Footer.module.scss'
import { Container,TableRow,TableCell } from '@mui/material';

const Footer = () => {
    return (
        <Container className={styles.Cont}>
        <TableRow>
            <TableCell className={styles.photoCell}>
                <img
                height="30px"
                width="30px"
                src='/assets/logo.svg'
                />
                <p  className={styles.font}>Crypto Chain</p>
    
            </TableCell>
            <TableCell className={styles.first}> Contribute </TableCell>
            <TableCell className={styles.first}>Features </TableCell>
            <TableCell className={styles.first}> Contact Us </TableCell>
        </TableRow>
        <TableRow>
            <TableCell className={styles.cell}>Copyright @ 2021</TableCell>
            <TableCell className={styles.cell}> Know about developers </TableCell>
            <TableCell className={styles.cell}> Currency </TableCell>
            <TableCell className={styles.cell}> Mail Us</TableCell>
        </TableRow>

        <TableRow>
            <TableCell className={styles.cell}>            </TableCell>
            <TableCell className={styles.cell}> join us as a Developer  </TableCell>
            <TableCell className={styles.cell}> News </TableCell>
            <TableCell className={styles.cell}> Linkedin</TableCell>
        </TableRow>

        <TableRow>
            <TableCell className={styles.cell}>            </TableCell>
            <TableCell className={styles.cell}>Suggest Us</TableCell>
            <TableCell className={styles.cell}> Exchanges </TableCell>
            <TableCell className={styles.cell}> Twitter </TableCell>
        </TableRow>
           
        <TableRow>
            <TableCell className={styles.cell}>            </TableCell>
            <TableCell className={styles.cell}></TableCell>
            <TableCell className={styles.cell}> NFTs </TableCell>
            <TableCell className={styles.cell}>6354861997 </TableCell>
        </TableRow>
        </Container>
    )
}

export default Footer;
