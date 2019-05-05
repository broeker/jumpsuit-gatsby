import React from 'react'
import Layout from '../components/Layout/Layout'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Grid'
import moment from 'moment'
import BlogCard from '../components/BlogCard/BlogCard'
import LinkBlog from '../components/LinkBlog/LinkBlog'
import JumpsuitCard from '../components/JumpsuitCard/JumpsuitCard'
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import toRenderProps from 'recompose/toRenderProps';

const WithWidth = toRenderProps(withWidth());

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  fade: {
    opacity: '1',

  },
  card: {
    backgroundColor: 'pink',
    padding: 12,
  },
  card2: {
    backgroundColor: 'PowderBlue',
    padding: 12,
  },
  card3: {
    backgroundColor: 'LightCoral',
    padding: 12,
  },
  header: {
    backgroundColor: 'Cornsilk',
    padding: 12,
  },
  blank: {
    padding: 24,
    marginTop: 24,
  },
  container: {
    border: 1,
    backgroundColor: 'Gainsboro',
  },
  gridmonster: {
    backgroundColor: 'Pink',
  },
  withwidth: {
   marginBottom: 24,
  }

});

class GridDemo extends React.Component {

  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  renderElement() {

    const { classes } = this.props;

    if (  this.props ) {
      return (
        <>
          <div>

            <Grid container spacing={0}>
              <Grid item lg={12}>
                <Card className={classes.withwidth}>

              <WithWidth>
                {({ width }) => <Typography className={classes.gridmonster}>Grid monster: {width}</Typography>}
              </WithWidth>
                </Card>
              </Grid>
            </Grid>

            <Grid container spacing={24}>

            <Grid className={classes.container} item lg={8}>

            <Grid container className={classes.container} spacing={24}>
              <Grid item lg={12}>
                <Card className={classes.header}>
                  <Typography variant="h5">Corn Silk</Typography>
                  <Typography>
                    We tell people sometimes: we're like drug dealers, come into town and get everybody absolutely addicted to painting. It doesn't take much to get you addicted. Follow the lay of the land. It's most important. If you hypnotize it, it will go away. Here's something that's fun.
                  </Typography>
                </Card>
              </Grid>
            </Grid>

            <Grid container spacing={24}>
              <Grid item key="1" md={6} lg={6}>
                <Card className={classes.card}>
                  <Typography>
                    We tell people sometimes: we're like drug dealers, come into town and get everybody absolutely addicted to painting. It doesn't take much to get you addicted. Follow the lay of the land. It's most important. If you hypnotize it, it will go away. Here's something that's fun.
                  </Typography>
                </Card>
              </Grid>
              <Grid item key="1" md={6} lg={6}>
                <Card className={classes.card2}>
                  <Typography>
                    Volunteering your time; it pays you and your whole community fantastic dividends. Get tough with it, get strong. In this world, everything can be happy. The only prerequisite is that it makes you happy. If it makes you happy then it's good. Just go out and talk to a tree. Make friends with it.
                  </Typography>
                </Card>
              </Grid>
            </Grid>

            <Card className={classes.blank}>
              Hi there! I am layout wrapper that contains the grid above. I span 8 columns of the layout at LG and above. At LG and below,
              I take over and span the entire 12 columns of the grid!
            </Card>

          </Grid>

          <Grid className={classes.container} item md={12} lg={4}>
            <Card className={classes.card3}>
                  <Typography>
                    Nice little clouds playing around in the sky. Water's like me. It's laaazy ... Boy, it always looks for the easiest way to do things When you buy that first tube of paint it gives you an artist license. This is your creation - and it's just as unique and special as you are. This is the fun part Be careful. You can always add more - but you can't take it away.
                  </Typography>
                </Card>

                <Card className={classes.blank}>
                Hi there, I am layout wrapper that contains the grid above. I span 8 columns of the layout at LG and above. At LG and below,
                I take over and span the entire 12 columns of the grid!
                </Card>
          </Grid>



        </Grid>
          </div>
          </>
      );
    }
  }

  render() {

    return (
      <div>
        { this.renderElement() }
      </div>
    )
  }
}

export default withStyles(styles)(GridDemo);

