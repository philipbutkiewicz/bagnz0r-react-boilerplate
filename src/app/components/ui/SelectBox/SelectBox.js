import React, { Component } from 'react';

import styles from './SelectBox.scss';

export default class SelectBox extends Component {
    render() {
        return (
            <div className={styles.selectBox}>
                <select {...this.props}>
                    <option />
                    {this.props.children}
                </select>
            </div>
        );
    }
}

SelectBox.defaultProps = {
    children: []
};

SelectBox.propTypes = {
    children: React.PropTypes.any
};
