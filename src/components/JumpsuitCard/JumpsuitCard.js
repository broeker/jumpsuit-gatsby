import React from 'react'
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Icon from '@mdi/react'
import { mdiArrowRightBoldCircle} from '@mdi/js'

import JumpsuitTeaser from '../JumpsuitTeaser/JumpsuitTeaser'

const styles = {
  root: {
    marginBottom: 24,
  },
  icon: {
    textAlign: 'right',
    width: '100%',
  },
  card: {
    height: '100%',
    padding: 0,
    border: 0,
    width: '100%',
  },
  cardHeader: {
    border: 1,
    backgroundColor: '#f4f4f4',
    width: '100%',
    fontSize: 12,
    padding: '.5em',
  },
  wrapper: {
    marginTop: '-2.34em',
  },
  hwrapper: {
    width: '100%',
    textAlign: 'right',
    top: 1,
  }
};

class JumpsuitCard extends React.Component {

  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };


  renderElement() {

    const { classes } = this.props;
    const { checked } = this.state;

    if (this.props) {
      return (
        <>
          <CardActionArea
            onMouseEnter={this.handleChange}
            onMouseLeave={this.handleChange}
            style={{ textDecoration: 'none' }}
            classes={{
              root: classes.root, // class name, e.g. `classes-nesting-root-x`
            }}
          >
            <Link style={{ textDecoration: 'none'}} to="factsheet">
              <Card className={classes.card}>
                <CardContent>
                  <div className={classes.hwrapper}>
                  <Fade in={checked} timeout={ 1500 } >
                 <Icon className={classes.icon} color="#ff9800" path={mdiArrowRightBoldCircle} size={1}/>
                </Fade>
                  </div>
                  <div className={classes.wrapper}>
                  <Typography className={classes.cardHeader} component="span">JUMPSUIT FACTSHEET</Typography>
                  <JumpsuitTeaser />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </CardActionArea>
        </>
      );
    }
  }

  render() {

    return (
      <>
        { this.renderElement() }
      </>
    )
  }
};


export default withStyles(styles)(JumpsuitCard);