import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AuthorDetails from '../AuthorDetails/AuthorDetails'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  hero: {
    padding: '0em',
  },
  mdimage: {
    padding: '10em'
  }
});

class MarkdownPage extends React.Component {

 render() {
   
 const { classes } = this.props;
    return (
    <>
      boop
<Typography className={classes.foo} variant="h1" component="h1">{this.props.title}</Typography>
<AuthorDetails
  changed={this.props.changed}
  />
<Typography gutterBottom dangerouslySetInnerHTML={{ __html: this.props.html }} />  
    
</>
     )
  }
}



export default withStyles(styles)(MarkdownPage);