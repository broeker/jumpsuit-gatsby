import React from 'react';
import { Link } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Headroom from "react-headroom"
import styles from "./header.module.css"

import NavigationDrawer from '../../NavigationDrawer/NavigationDrawer'
import Search from "../../Search"
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
                  <NavigationDrawer className={styles.icon}/>
                  <Typography variant="h5" className={styles.logo}>
                      <Link to={"/"}>{props.title}</Link>
                  </Typography>
                <div className={styles.searchbox}>
                <Search className={styles.searchbox} collapse indices={searchIndices} />
              </div>
              </Toolbar>
          </AppBar>
      </Headroom>
  );
}

export default Header;
