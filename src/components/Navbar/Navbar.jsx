import React from 'react';
import styles from './navbar.module.scss';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_wrapper}>
                <div className={styles.name_tag}>
                    <img
                        className={styles.logo}
                        src='/assets/logo.svg'
                        alt=''
                    />
                    <h4>CryptoChain</h4>
                </div>
                <div className={styles.nav_middle}>
                    <ul>
                        <Link to='/' className={styles.nav_links}>
                            Home
                        </Link>
                        <Link
                            to='/cryptocurrencies'
                            className={styles.nav_links}
                        >
                            Cryptocurrencies
                        </Link>
                        <Link to='/news' className={styles.nav_links}>
                            News
                        </Link>
                        <Link to='/exchanges' className={styles.nav_links}>
                            Exchanges
                        </Link>
                    </ul>
                </div>
                <div className={styles.nav_right}>
                    <h4 className={styles.nav_links}>NFTs</h4>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
