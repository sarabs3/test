import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Media from 'react-media';
import styles from './styles';
import {mediaQueries} from "../../constants";
import UserData from "../../views/UserData";
import Nav from "../Nav";

class ListItem extends React.Component {
    render () {
        const { classes, item } = this.props;
        return (
            <div className={classes.listItem}>
                <div className={classes.imageContainer}>
                    <div className={classes.image}>
                        <img src={item.image} alt={item.name} />
                    </div>
                </div>

                <Media queries={mediaQueries}>
                    {matches => (
                        <>
                            {matches.small && (
                                <>
                                    <div className={classes.name}>
                                        <p className={classes.userName}>{item.name}</p>
                                        <p className={classes.email}>{item.contact}</p>
                                    </div>
                                </>
                            )}
                            {matches.medium && (
                                <>
                                    <div className={classes.name}>
                                        <p className={classes.userName}>{item.name}</p>
                                    </div>
                                    <div className={classes.contact}>
                                        <p className={classes.title}>User email address</p>
                                        <p className={classes.email}>{item.contact}</p>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </Media>

            </div>
        );
    }
};

ListItem.propTypes = {
    children: PropTypes.string.isRequired,
};

export default withStyles(styles)(ListItem);