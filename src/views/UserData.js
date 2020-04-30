import React from 'react';
import withStyles from 'react-jss';
import Menu from '../components/MenuIcon';
import {ReactComponent as Bell} from '../assets/iamges/bell.svg';
import user from '../assets/iamges/user.png';
import {mobileMediaQuery} from "../constants";

const style = {
    listItem: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 0,
        padding: 0,
        [mobileMediaQuery]: {
            justifyContent: 'space-between',
            padding: '0 20px',
            width: 'calc(100% - 40px)'
        },
    },
    item: {
        marginRight: 20
    },
    smooth: {
        transition: '0.3s',
        cursor: 'pointer',
    },
    icons: {
        display: 'flex'
    },
};
class UserData extends React.Component{
    constructor(){
        super();
        this.state={
            bellColor: 'black',
            menuColor: 'black'
        }
    }
    updateColor = (isHover, icon) => {
        console.log('chilo', isHover, icon);
        this.setState({ [icon]: isHover ? '#CD845C' : 'black' });
    };

    render(){
        const { classes } = this.props;
        const { bellColor, menuColor } = this.state;
        return(
            <div className={classes.listItem}>
                <div className={classes.item}><img src={user} /> </div>
                <div className={classes.icons}>
                    <div
                        className={classes.item}
                        onMouseEnter={() => this.updateColor(true, 'bellColor')}
                        onMouseLeave={() => this.updateColor(false, 'bellColor')}
                    >
                        <Bell fill={bellColor} className={classes.smooth} />
                    </div>
                    <div
                        className={classes.item}
                        onMouseEnter={() => this.updateColor(true, 'menuColor')}
                        onMouseLeave={() => this.updateColor(false, 'menuColor')}
                    >
                        <Menu color={menuColor} className={classes.smooth} />
                    </div>
                </div>
            </div>
        );
    }
}
export default withStyles(style)(UserData);