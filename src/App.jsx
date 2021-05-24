import React from "react";
import Friends from './friends'
import { Typography, AppBar, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import {PhotoCamera} from "@material-ui/icons"
import useStyles from './styles.js'
import FriendGrid from "./FriendGrid";

const App = () => {
    const classes = useStyles();
    const friendComponent = Friends.map(friend =>  <FriendGrid key={friend} friend={friend} pet={friend.pets}></FriendGrid>)
    return (
        <div>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant="h6">Friends With Pets</Typography>
                </Toolbar>
            </AppBar>
            <main>
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
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {friendComponent}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    This is my footer
                </Typography>
                <Typography variant="subtitle1" align='center' color="primary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ex nam atque, vero suscipit itaque labore deleniti maiores corrupti ullam ut officia in accusantium ea? Ratione expedita vel nostrum deleniti?
                </Typography>
            </footer>
        </div>
    )
}

export default App