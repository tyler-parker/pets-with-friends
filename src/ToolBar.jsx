import React from 'react'
import useStyles from './styles'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { PhotoCamera } from "@material-ui/icons"


export default function ToolBar(props) {
    const classes = useStyles()
    return(
        <AppBar position="relative">
        <Toolbar>
            <PhotoCamera className={classes.icon}/>
            <Typography variant="h6">Vacation Spots</Typography>
        </Toolbar>
    </AppBar>
    )
}

