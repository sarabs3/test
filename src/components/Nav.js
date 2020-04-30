import React from 'react';
import withStyles from 'react-jss';
const styles = {
    list: {
        display: 'flex',
        width: '100%'
    },
    listItem: {
        marginRight: 20
    },
};
class Nav extends React.Component {
    render () {
        const { classes, className } = this.props;
        return (
            <div className={`nav ${className}`}>
                <ul className={classes.list}>
                    <li className={classes.listItem}><a href="#">Browse</a></li>
                    <li className={classes.listItem}><a href="#">How it works</a></li>
                    <li className={classes.listItem}><a href="#">Help</a></li>
                    <li className={classes.listItem}><a href="#">About</a></li>
                </ul>
            </div>
        );
    }
}

export default withStyles(styles)(Nav);