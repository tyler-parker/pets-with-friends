import React from 'react'
import { Typography, Card, CardActions, CardContent, CardMedia, Grid} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import useStyles from './styles.js'



function GridItem(props) {
    const classes = useStyles();
    return (
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia} image={props.item.img} title="Image title"></CardMedia>
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5">
                            {props.item.place}
                        </Typography>
                        <Typography>
                            ${props.item.price}
                        </Typography>
                        <Typography>
                            Best time to go: {props.item.timeToGo}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">View</Button>
                        <Button size="small" color="secondary">Edit</Button>
                    </CardActions>
                </Card>
            </Grid>
    )
}

export default GridItem