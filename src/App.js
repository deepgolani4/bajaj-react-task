import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { Navbar } from './components/index';
import {
    Home,
    News,
    Exchanges,
    Cryptocurrencies,
    CryptoDetails,
} from './pages';
function App() {
    return (
        <div className='App'>
            <Navbar />
            <div className='main'>
                <div className='routes'>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route exact path='/cryptocurrencies'>
                            <Cryptocurrencies />
                        </Route>
                        <Route exact path='/crypto/:coinId'>
                            <CryptoDetails />
                        </Route>
                        <Route exact path='/news'>
                            <News />
                        </Route>
                        <Route exact path='/exchanges'>
                            <Exchanges />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
