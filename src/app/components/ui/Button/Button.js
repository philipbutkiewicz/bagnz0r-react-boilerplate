import React, { Component } from 'react';

import styles from './Button.scss';

export default class Button extends Component {
    render() {
        const icon = this.props.icon ? <i className={`fa ${this.props.icon}`} /> : '';
        return this.props.to ? (
            <a className={styles.button} href={this.props.to}>{icon}{this.props.label}</a>
        ) : (
            <button className={styles.button} onClick={this.props.onClick}>
                {icon}
                {this.props.label}
            </button>
        );
    }
}

Button.defaultProps = {
    icon: null,
    onClick: null,
    to: null
};

Button.propTypes = {
    icon: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
    to: React.PropTypes.string
};
