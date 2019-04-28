import React from 'react';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import NavigationDrawer from '../NavigationDrawer/NavigationDrawer'
import Headroom from "react-headroom"


//import Search from "../Search"

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const styles = theme => ({
    slogan: {
       fontWeight: 700,
        color: 'white',
        opacity: '1',
        paddingRight: '1em',
     },
    headroom: {

    },
    headerLink: {
      color: 'white',
      opacity: '.6',
      textDecoration: 'none',
      '&:hover': {
        color: 'white',
      opacity: '1',
        },
     },
     });

function Header(props) {
  const { classes } = props;
  return (
      <Headroom className={classes.headroom}>
          <AppBar position="static" color="primary">
              <Toolbar>
                  <Typography variant="h6" className={classes.logo}>
                      <Link to={"/"}>{props.title}</Link>
                  </Typography>
              </Toolbar>
          </AppBar>
      </Headroom>
  );
}

export default withStyles(styles)(Header);