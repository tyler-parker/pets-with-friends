import React from 'react'
import useStyles from './styles.js'
import { Typography, Container } from '@material-ui/core'


export default function Title(props) {
    const classes = useStyles()
    return(
        <div className={classes.container}>
            <Container maxWidth="md">
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                    Choose your vacation spot
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Here I test out my React skills with the Material UI front end library for React and map through an array of data. 
                </Typography>
            </Container>
        </div>
    )
}

