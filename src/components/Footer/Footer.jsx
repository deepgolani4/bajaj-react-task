import styles from './Footer.module.scss';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: 'black',
//   }));

const Footer = () => {
    return (
        <>
            <div className={styles.mainBox}>
                <Grid
                    container
                    spacing={1}
                    columns={14}
                    className={styles.cell}
                >
                    <Grid item xs={2} className={styles.cell}>
                        <item className={styles.cell}>
                            <Grid className={styles.photoCell}>
                                <img src='/assets/logo.svg' alt='logo' />
                            </Grid>
                        </item>
                    </Grid>
                    <Grid item xs={2.5} className={styles.logoText}>
                        {' '}
                        Crypto Chain{' '}
                    </Grid>
                    <Grid item xs={3}>
                        <item className={styles.cell}>Contribute</item>
                    </Grid>
                    <Grid item xs={3}>
                        <item className={styles.cell}>Features</item>
                    </Grid>
                    <Grid item xs={3}>
                        <item className={styles.cell}>Contract Us</item>
                    </Grid>
                </Grid>

                {/* // */}

                <Grid
                    container
                    spacing={1}
                    columns={14}
                    className={styles.cell}
                >
                    <Grid item xs={4.5} className={styles.cell}></Grid>
                    <Grid item xs={3} href='#'>
                        <Link
                            href='https://github.com/deepgolani4/bajaj-react-task'
                            underline='none'
                            color='white'
                        >
                            <item className={styles.first} href='#'>
                                Know About Developers
                            </item>
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link
                            href='/cryptocurrencies'
                            underline='none'
                            color='white'
                        >
                            <item className={styles.first}>Currencies</item>
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link
                            href='mailto:abc@xyz.com'
                            underline='none'
                            color='white'
                        >
                            <item className={styles.first}>Mail Us</item>
                        </Link>
                    </Grid>
                </Grid>

                {/* // */}

                <Grid
                    container
                    spacing={1}
                    columns={14}
                    className={styles.cell}
                >
                    <Grid item xs={4.5} className={styles.cell}></Grid>
                    <Grid item xs={3}>
                        <Link
                            href='https://github.com/deepgolani4/bajaj-react-task'
                            underline='none'
                            color='white'
                        >
                            <item className={styles.first}>
                                join us as Developer
                            </item>
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link href='/news' underline='none' color='white'>
                            <item className={styles.first}>News</item>
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link href='/' underline='none' color='white'>
                            <item className={styles.first}>LinkedIn</item>
                        </Link>
                    </Grid>
                </Grid>

                {/* // */}

                <Grid
                    container
                    spacing={1}
                    columns={14}
                    className={styles.cell}
                >
                    <Grid item xs={4.5} className={styles.cell}></Grid>
                    <Grid item xs={3}>
                        <Link
                            href='https://nz3kqgsyqda.typeform.com/to/Ty8IUsml'
                            underline='none'
                            color='white'
                        >
                            <item className={styles.first}>Suggest us</item>
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link href='/exchanges' underline='none' color='white'>
                            <item className={styles.first}>Exchanges</item>
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link
                            href='https://twitter.com/deepgolani4'
                            underline='none'
                            color='white'
                        >
                            <item className={styles.first}>Twitter</item>
                        </Link>
                    </Grid>
                </Grid>

                {/* // */}

                <Grid
                    container
                    spacing={1}
                    columns={14}
                    className={styles.cell}
                >
                    <Grid item xs={4.5} className={styles.cell}></Grid>
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
            </div>
        </>
    );
};

export default Footer;
