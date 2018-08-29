import React, { Component } from 'react';

import styles from './Link.scss';

export default class Link extends Component {
    render() {
        const icon = this.props.icon ? <i className={`fa ${this.props.icon}`} /> : '';
        return (
            <div className={styles.link}>
                <a href={this.props.href} onClick={this.props.onClick}>
                    {icon}
                    {this.props.label}
                </a>
            </div>
        );
    }
}

Link.defaultProps = {
    icon: null,
    href: null
};

Link.propTypes = {
    icon: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
    href: React.PropTypes.string
};
