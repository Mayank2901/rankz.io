import React, { useState } from 'react';
import { makeStyles, useTheme, withStyles } from '@material-ui/core'
import Menu from '../partials/menu'
import ApplicationBar from '../partials/appbar'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import SimpleCard from "../partials/card";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background: '#f7f7f7',
        height: '-webkit-fill-available',
    },
    content: {
        flexGrow: 1,
        marginTop: '5%',
        marginLeft: '17%',
        marginRight: '2%',
    },
    toolbar: theme.mixins.toolbar,
    iconButton: {
        padding: 10,
    },
    inputSearch: {
        border: '1px solid #e6e6e6',
        boxShadow: 'none',
    },
    alignRight: {
        textAlign: 'right',
    }
}))

const WhiteButton = withStyles((theme) => ({
    root: {
        color: '#1a181e',
        backgroundColor: 'white',
        border: '1px solid #e6e6e6',
        boxShadow: '1px 0px 0px -2px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)',
    },
}))(Button);

const PurpleButton = withStyles((theme) => ({
    root: {
        marginLeft: '5%',
        color: 'white',
        backgroundColor: '#7442d3',
        border: '1px solid #e6e6e6',
        boxShadow: '1px 0px 0px -2px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)',
    },
}))(Button);


export default function Home(){
  const theme = useTheme();
  const styles = useStyles(theme)
  const [ cardItems, setCardItems] = useState([
    {title: "Samsara 1.0",subtitle:"samara.com"},
    {title: "Samsara 1.0",subtitle:"samara.com"},
    {title: "Samsara 1.0",subtitle:"samara.com"},
  ])
  return (
    <div className={styles.root}>
      <ApplicationBar/>
      <Menu/>
      <main className={styles.content}>
        <div className={styles.toolbar} />
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Paper component="form" className={styles.inputSearch}>
                    <IconButton className={styles.iconButton} aria-label="menu">
                        <img alt="search" src="/icons/search.svg" />
                    </IconButton>
                    <InputBase
                        className={styles.input}
                        placeholder="Search Projects"
                    />
                </Paper>
            </Grid>
            <Grid item xs={5}>
            </Grid>
            <Grid item xs={4} className={styles.alignRight}>
                <WhiteButton 
                variant="contained"
                startIcon={<img alt="refresh" src="/icons/refresh.svg" />}
                >
                    Upload
                </WhiteButton>
                <PurpleButton 
                variant="contained"
                startIcon={<img alt="refresh" src="/icons/add.svg" />}
                >
                    New Project
                </PurpleButton>
            </Grid>
            <Grid item xs={12}>
                {
                    cardItems.map((item) => 
                        <SimpleCard data={item}/>
                    )
                }
            </Grid>
        </Grid>
      </main>
    </div>
  );
}