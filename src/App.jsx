import React from "react";
import Friends from './friends'
import { Typography, AppBar, CssBaseline, Grid, Container } from '@material-ui/core'
import useStyles from './styles.js'
import FriendGrid from "./FriendGrid";
import Footer from './Footer'
import Toolbar from './ToolBar'
import Title from './Title'

const App = () => {
    const classes = useStyles();
    const friendComponent = Friends.map(friend =>  <FriendGrid key={friend} friend={friend} pet={friend.pets}></FriendGrid>)
    return (
        <div>
            <CssBaseline />
            <Toolbar />
            <main>
                <div className={classes.container}>
                    <Title />
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {friendComponent}
                    </Grid>
                </Container>
            </main>
            <Footer />
        </div>
    )
}

export default App