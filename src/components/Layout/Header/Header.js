import React from 'react';
import { Link } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavigationDrawer from '../../NavigationDrawer/NavigationDrawer'
import Headroom from "react-headroom"
import styles from "./header.module.css"
import withRoot from "../../../withRoot";
import {withStyles} from "@material-ui/core";

//import Search from "../Search"

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

function Header(props) {
  const { classes } = props;
  return (
      <Headroom className={styles.headroom}>
          <AppBar position="static" color="primary">
              <Toolbar>
                  <NavigationDrawer />
                  <Typography variant="h5" className={styles.logo}>
                      <Link to={"/"}>{props.title}</Link>
                  </Typography>
              </Toolbar>
          </AppBar>
      </Headroom>
  );
}

export default withRoot(withStyles(styles)(Header));