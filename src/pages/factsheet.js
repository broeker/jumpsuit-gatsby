import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import withRoot from '../withRoot';
import Layout from '../components/Layout/Layout'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import JumpsuitTeaser from '../components/JumpsuitTeaser/JumpsuitTeaser'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    color: theme.palette.text.secondary,
  },
  quote: {
    fontFamily: 'PT Mono',
    fontWeight: 500,
    fontSize: 22,
    padding: '2em',
    lineHeight: '1.6',
    backgroundColor: '#DEB528',
  },
  byline: {
    fontSize: 16,
    padding: '1em',
  }
});

function Factsheet(props) {
  const { classes } = props;

  return (
    <Layout>
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={6} lg={7} xl={7}>
          <Paper className={classes.paper}>
            <JumpsuitTeaser />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
          <Typography className={classes.quote}>
              Jumpsuits to me represent many diverse qualities from action and adventure to manual labor.
            Jumpsuits are worn by people who push the envelope like skydivers, downhill skiers, astronauts,
            and high speed racers. Also, people incarcerated in institutions that are full of life’s most
            dangerous criminals who made their own rules.
          </Typography>
          <Typography className={classes.byline}>
          — Jeff Hilliard made in Los Angeles, CA
            </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="h5">JUMPSUIT FACTSHEET</Typography>
          <Typography>
            Jumpsuit is a
          </Typography>
        </Grid>
        <Grid xs={6}>
          Goo
        </Grid>
      </Grid>
    </div>
    </Layout>
  );
}

Factsheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Factsheet));
