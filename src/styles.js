import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    icon: {
        marginRight: '20px'
    }, 
    buttons: {
        marginTop: '40px'
    },
    cardGrid: {
        paddingTop: '20px',
        paddingBottom: '20px'
    }, 
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px'
    },
    pets: {
        padding: '5px'
    }
}))

export default useStyles