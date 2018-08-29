import './index.scss';

import App from './App';
import { HashRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    (
        <div>
            <HashRouter>
                <App />
            </HashRouter>
        </div>
    ),
    document.getElementById('root')
);
