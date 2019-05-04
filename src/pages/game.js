import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
