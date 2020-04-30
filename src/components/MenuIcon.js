import React from 'react';
import PropTypes from 'prop-types';

const MenuIcon = ({ color, className }) => {
    return (
        <svg width="15" height="14" className={className} viewBox="0 0 15 14" fill="red" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 4">
                <path id="Path 13" d="M0 7H15" stroke={color} strokeWidth="2"/>
                <path id="Path 13_2" d="M0 1H15" stroke={color} strokeWidth="2"/>
                <path id="Path 13_3" d="M0 13H15" stroke={color} strokeWidth="2"/>
            </g>
        </svg>

    );
};
MenuIcon.propTypes = {
    colors: PropTypes.string,
};
MenuIcon.defaultProps = {
    colors: "black",
};
export default MenuIcon;