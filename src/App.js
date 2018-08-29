import { Link, Route } from 'react-router-dom';

import MainRoute from './app/components/routes/MainRoute';
import React from 'react';
import style from './App.scss';

const App = () => (
    <div className={style.app}>
        <header>
            <h1>bagnz0r-react boilerplate</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </header>
        <div className={style.container}>
            <Route exact path="/" component={MainRoute} />
        </div>
        <footer>
            &copy; 2018 by <a href="http://bagnz0r.net">bagnz0r</a>
        </footer>
    </div>
);

export default App;
