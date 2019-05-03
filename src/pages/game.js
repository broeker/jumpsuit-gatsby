import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import withRoot from '../withRoot';

import Layout from '../components/Layout/Layout'
import Game from '../components/Game/Game'
const styles = theme => ({
  game: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

function About(props) {
  const { classes } = props;

  return (
    <Layout>
    <Game />
    </Layout>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(About));
