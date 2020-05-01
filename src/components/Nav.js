import React from 'react';
import withStyles from 'react-jss';
const styles = {
    list: {
        display: 'flex',
        width: '100%'
    },
    listItem: {
        marginRight: 20,
        fontSize: 14,
    },
    link: {
        transition: '0.3s',
        '&:hover': {
            color: '#CD845C',
        },
    },
};
class Nav extends React.Component {
    render () {
        const { classes, className } = this.props;
        return (
            <div className={`nav ${className}`}>
                <ul className={classes.list}>
                    <li className={classes.listItem}><a className={classes.link} href="#">Browse</a></li>
                    <li className={classes.listItem}><a className={classes.link} href="#">How it works</a></li>
                    <li className={classes.listItem}><a className={classes.link} href="#">Help</a></li>
                    <li className={classes.listItem}><a className={classes.link} href="#">About</a></li>
                </ul>
            </div>
        );
    }
}

export default withStyles(styles)(Nav);