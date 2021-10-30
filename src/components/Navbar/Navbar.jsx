import React from 'react';
import styles from './navbar.module.scss';
import { NavLink } from 'react-router-dom';
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
                        <NavLink
                            exact
                            to='/'
                            className={styles.nav_links}
                            activeClassName={styles.active_link}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            exact
                            to='/cryptocurrencies'
                            className={styles.nav_links}
                            activeClassName={styles.active_link}
                        >
                            Cryptocurrencies
                        </NavLink>
                        <NavLink
                            exact
                            to='/news'
                            className={styles.nav_links}
                            activeClassName={styles.active_link}
                        >
                            News
                        </NavLink>
                        <NavLink
                            exact
                            to='/exchanges'
                            className={styles.nav_links}
                            activeClassName={styles.active_link}
                        >
                            Exchanges
                        </NavLink>
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
