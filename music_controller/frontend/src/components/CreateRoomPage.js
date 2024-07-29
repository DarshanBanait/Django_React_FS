import React, { Component } from "react";
import { Button, Grid, Typography, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { Link } from "react-router-dom";


export default class CreateRoomPage extends Component {
    defaultVotes = 2;
    constructor(props) {
        super(props);
    }
    render() {
        // 1 is 8 pixels
        return <Grid container spacing={1}>
            <Grid item xs={12} align = "center">
                <Typography variant="h4">Create a new room</Typography>
            </Grid>

        </Grid>; 
    }
}