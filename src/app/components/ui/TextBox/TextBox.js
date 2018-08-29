// @flow

import React, { Component } from 'react';

import styles from './TextBox.css';

export default class TextBox extends Component {

    render() {
        return (
            <div className={styles.textBox}>
                <input
                    type="text"
                    {...this.props}
                />
            </div>
        );
    }

}