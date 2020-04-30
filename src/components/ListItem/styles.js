import {mobileMediaQuery} from "../../constants";

export default {
    listItem: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 20,
        borderBottom: '1px solid #ECEDF0',
        alignItems: 'center',
        transition: '0.3s',
        cursor: 'pointer',
        '&:hover': {
            background: '#ECEDF0',
        },
    },
    name: {
        padding: 10,
        fontSize: 16,
        textAlign: 'left',
        width: '40%',
        '& p': {
          margin: 0,
        },
        [mobileMediaQuery]: {
            width: '80%',
        },
    },
    userName: {
        margin: 0,
    },
    image: {
        borderRadius: '50%',
        overflow: 'hidden',
        width: 50,
        height: 50,
        '& img': {
            width: '100%'
        },
    },
    imageContainer: {
        width: '20%',
        background: '#ECEDF0',
        display: 'flex',
        justifyContent: 'center',
        padding: 10,
        borderBottom: '1px solid #F2C4A3',
    },
    contact: {
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        width: '40%',
        '& p': {
            margin: 0,
        },
    },
    title: {
        fontSize: 10,
    },
    email: {
        fontSize: 16,
        color: '#CD845C',
    },
};