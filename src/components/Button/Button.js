import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import styles from './styles';

const style = createUseStyles(styles);

const Button = ({ onClick, children, customStyles, className }) => {
    const classes = style(customStyles);
    return (
        <button onClick={onClick} className={`${classes.button} ${classes.btn} ${className}`}>
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any.isRequired,
    customStyles: PropTypes.object,
};
Button.defaultProps = {
    onClick: () => {},
    customStyles: {},
};

export default Button;