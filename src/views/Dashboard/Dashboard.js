import React from 'react';
import withStyles from 'react-jss';
import Media from 'react-media';
import './dashboard.css';
import ListData from "../ListData";
import {styles} from "./styles";
import { Button } from '../../components/Button';
import Nav from "../../components/Nav";
import {ReactComponent as Pattern} from '../../assets/iamges/pattern.svg';
import {ReactComponent as Circle} from '../../assets/iamges/circle.svg';
import {ReactComponent as FormIcon} from '../../assets/iamges/icon-form.svg';
import UserData from "../UserData";
import {mediaQueries} from "../../constants";

const buttonStyles = {
    background: 'transparent',
    border: '2px solid #000',
    borderRadius: 4,
    fontFamily: 'wigrum-regular',
    fontSize: 16,
    padding: '10px 20px 14px 20px',
};
class Dashboard extends React.Component {
    render () {
        const { classes } = this.props;
        return (
            <div className={classes.dashboard}>
                <div className="column__left flex50">
                    <Media queries={mediaQueries}>
                        {matches => (
                            <>
                                {matches.small && <UserData />}
                                {matches.medium && <Nav />}
                            </>
                        )}
                    </Media>

                    <div className={classes.headingContainer}>
                        <div className={classes.heading}>
                            <h2>Welcome! Thanks for joining us.</h2>
                        </div>
                        <div className={classes.iconContainer}>
                            <FormIcon className={`${classes.icons} ${classes.formIcon} fadeInAnimation`} />
                            <Circle className={`${classes.icons} ${ classes.circle} fadeInAnimation`} />
                            <Pattern width="100%" className={`${classes.icons} fadeInAnimation`} />
                        </div>
                        <div className={classes.button}>
                            <Button
                                className={classes.button}
                                customStyles={buttonStyles}
                                onClick={() => window.open('https://www.google.com')}
                            >
                                Set up your account
                            </Button>
                        </div>
                        <div className={classes.description}>
                            <h4>Description</h4>
                            <p className="body">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to m</p>
                        </div>
                    </div>
                </div>
                <div className="column__right flex50">
                    <div className={classes.profileContainer}>
                        <Media queries={mediaQueries}>
                            {matches => (
                                <>
                                    {matches.medium && <UserData />}
                                </>
                            )}
                        </Media>

                        <ListData />
                    </div>
                </div>
            </div>
        );
    }
};

export default withStyles(styles)(Dashboard);