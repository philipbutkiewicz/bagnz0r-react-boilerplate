import React, { Component } from 'react';

import Button from '../../ui/Button';
import styles from './MainRoute.scss';

export default class MainRoute extends Component {
    render() {
        return (
            <div className={styles.mainPanel}>
                <h2>Sample page</h2>
                <p>
                    Hi there! This is a cool boilerplate!
                    <Button label="Boop" onClick={() => {
                        console.log('beep');
                    }} />
                </p>
            </div>
        );
    }
}
