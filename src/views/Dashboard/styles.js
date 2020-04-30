import {mobileMediaQuery} from "../../constants";

export const styles = {
    heading: {
        width: 300,
    },
    headingContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '8%',
        marginBottom: 30,
    },
    dashboard: {
        display: 'flex',
        width: '100%',
        height: '100vh',
    },
    description: {
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 20,
    },
    iamge: {
        width: '100%',
    },
    profileContainer: {
        padding: 20,
    },
    iconContainer: {
        position: 'relative',
        width: '100%',
    },
    icons: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    circle: {
        left: 'calc(50% - 130px)',
        animationDelay: '0.3s',
        opacity: 0
    },
    formIcon: {
        zIndex: 1,
        left: 'calc(50% - 85px)',
        top: 55,
        animationDelay: '0.6s',
        opacity: 0
    },
    button: {
        marginTop: 320,
    },
    [mobileMediaQuery]: {
        dashboard: {
            flexDirection: 'column',
            height: '100%',
        },
    },
};