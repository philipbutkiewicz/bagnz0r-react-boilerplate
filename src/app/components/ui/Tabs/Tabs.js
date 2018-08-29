/* eslint-disable */

import React, { Component } from 'react';

import Tab from './components/Tab';
import styles from './Tabs.scss';

export default class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTabId: null
        };
    }

    componentWillReceiveProps() {
        this.setState({
            activeTabId: this.getFirstTabId()
        });
    }

    onTabClick(id) {
        this.setState({
            activeTabId: id
        });
    }

    getFirstTabId() {
        const child = this.props.children.find(item => item.props.isActive);

        return child ? child.props.id : null;
    }

    render() {
        const tabs = React.Children.map(this.props.children, child => (
            <Tab
                id={child.props.id}
                label={child.props.label}
                onClick={this.onTabClick.bind(this)}
                isActive={this.state.activeTabId === child.props.id}
            />
        ));

        const tabContent = this.state.activeTabId ? this.props.children.find(child => child.props.id === this.state.activeTabId).props.children : null;

        return (
            <div className={styles.tabs}>
                {tabs}
                <div className={styles.tabContent}>
                    {tabContent}
                </div>
            </div>
        );
    }
}

Tabs.defaultProps = {
    children: []
};

Tabs.propTypes = {
    children: React.PropTypes.any
};
