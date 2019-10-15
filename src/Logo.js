import React from 'react';
import PropTypes from 'prop-types';
import logo from "./logo.svg";

const colorMap = new Map([
    ['red', '#FF0000'],
    ['green', '#00FF00'],
    ['blue', '#0000FF'],
]);

class Logo extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return colorMap.has(nextProps.color)
            || (colorMap.has(this.props.color) && !colorMap.has(nextProps.color));
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const { color } = this.props;
        return (
            <React.Fragment>
                <img
                    src={logo}
                    className={`App-logo`}
                    style={{ backgroundColor: colorMap.get(color) }}
                    alt="logo"/>
            </React.Fragment>
        );
    }
}

Logo.propTypes = {
  color: PropTypes.string,
};

export default Logo;