
import styles from './Footer.module.scss'
import { Container,TableRow,TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// const Footer = () => {
//     return (
//         <Container className={styles.Cont}>
//         <TableRow>
//             <TableCell className={styles.photoCell}>
//                 <img
//                 height="30px"
//                 width="30px"
//                 src='/assets/logo.svg'
//                 />
//                 <p  className={styles.font}>Crypto Chain</p>
    
//             </TableCell>
//             <TableCell className={styles.first}> Contribute </TableCell>
//             <TableCell className={styles.first}>Features </TableCell>
//             <TableCell className={styles.first}> Contact Us </TableCell>
//         </TableRow>
//         <TableRow>
//             <TableCell className={styles.cell}>Copyright @ 2021</TableCell>
//             <TableCell className={styles.cell}> Know about developers </TableCell>
//             <TableCell className={styles.cell}> Currency </TableCell>
//             <TableCell className={styles.cell}> Mail Us</TableCell>
//         </TableRow>

//         <TableRow>
//             <TableCell className={styles.cell}>            </TableCell>
//             <TableCell className={styles.cell}> join us as a Developer  </TableCell>
//             <TableCell className={styles.cell}> News </TableCell>
//             <TableCell className={styles.cell}> Linkedin</TableCell>
//         </TableRow>

//         <TableRow>
//             <TableCell className={styles.cell}>            </TableCell>
//             <TableCell className={styles.cell}>Suggest Us</TableCell>
//             <TableCell className={styles.cell}> Exchanges </TableCell>
//             <TableCell className={styles.cell}> Twitter </TableCell>
//         </TableRow>
           
//         <TableRow>
//             <TableCell className={styles.cell}>            </TableCell>
//             <TableCell className={styles.cell}></TableCell>
//             <TableCell className={styles.cell}> NFTs </TableCell>
//             <TableCell className={styles.cell}>6354861997 </TableCell>
//         </TableRow>
//         </Container>
//     )
// }


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'black',
  }));
  

const Footer = () => {
return (
    <>
    <Grid container spacing={1} columns={15} className={styles.cell}>
    <Grid item xs={3} className={styles.cell}>
        <item className={styles.cell} >
            <Grid className={styles.photoCell} >
            <img src='/assets/logo.svg' />
            </Grid>
            </item>
    </Grid>
    <Grid item xs={3} className={styles.logoText}> Crypto Chain </Grid>
    <Grid item xs={3}>
        <item className={styles.cell}>Contribute</item>
    </Grid>
    <Grid item xs={3}>
        <item className={styles.cell}>Currency</item>
    </Grid>
    <Grid item xs={3}>
        <item className={styles.cell}>Contract Us</item>
    </Grid>
    </Grid>

    {/* // */}

    <Grid container spacing={1} columns={15} className={styles.cell}>
    <Grid item xs={6} className={styles.cell}>
   
    </Grid>
    <Grid item xs={3} href="#">
        <item className={styles.first} href="#">Know About Developers</item>
    </Grid>
    <Grid item xs={3}>
        <item className={styles.first}>Features</item>
    </Grid>
    <Grid item xs={3}>
        <item className={styles.first}>Mail Us</item>
    </Grid>
    </Grid>

    {/* // */}

    <Grid container spacing={1} columns={15} className={styles.cell}>
    <Grid item xs={6} className={styles.cell}>
        
    </Grid>
    <Grid item xs={3}>
        <item className={styles.first}>join us as Developer</item>
    </Grid>
    <Grid item xs={3}>
        <item className={styles.first}>News</item>
    </Grid>
    <Grid item xs={3}>
        <item className={styles.first}>LinkedIn</item>
    </Grid>
    </Grid>

    {/* // */}

    <Grid container spacing={1} columns={15} className={styles.cell}>
    <Grid item xs={6} className={styles.cell}>
        
    </Grid>
    <Grid item xs={3}>
        <item className={styles.first}>Suggest us</item>
    </Grid>
    <Grid item xs={3}>
        <item className={styles.first}>Exchanges</item>
    </Grid>
    <Grid item xs={3}>
        <item className={styles.first}>Twitter</item>
    </Grid>
    </Grid>

    {/* // */}

    <Grid container spacing={1} columns={15} className={styles.cell}>
    <Grid item xs={6} className={styles.cell}>
        
    </Grid>
    <Grid item xs={3}>
        <item className={styles.first}></item>
    </Grid>
    <Grid item xs={3}>
        <item className={styles.first}>NFTs</item>
    </Grid>
    <Grid item xs={3}>
        <item className={styles.first}>6354861997</item>
    </Grid>
    </Grid>

   
    </>
    
    )
}

export default Footer;
