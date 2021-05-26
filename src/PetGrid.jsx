import React from 'react'
import { Typography, Card, CardActions, CardContent, CardMedia, Grid} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import useStyles from './styles.js'
import FriendGrid from './FriendGrid'

function PetGrid(props) {
    const classes = useStyles();
    return (
        <div>
            <Typography variant='p' className={classes.pets}>
                {props.pet.name}
                {console.log(props.pet.name)}
            </Typography>
        </div>
    )
}


export default PetGrid