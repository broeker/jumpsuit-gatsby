import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Grid'
import Layout from '../components/Layout/Layout'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  game: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  paper: {
    backgroundColor: 'pink',
  }
});

function Factsheet(props) {
  const { classes } = this.props;
  return (
    <Layout>
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}

export default withRoot(withStyles(styles)(Factsheet));
