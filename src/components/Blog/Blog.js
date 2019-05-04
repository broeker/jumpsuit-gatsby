import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import ParagraphText from '../ParagraphText/ParagraphText';
import ParagraphImage from '../ParagraphImage/ParagraphImage';
import AuthorDetails from '../AuthorDetails/AuthorDetails';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { DiscussionEmbed } from "disqus-react";

const styles = theme => ({
  ...theme.mixins.gutters(),
  header: {
    marginBottom: '3em',
  },
  chip: {
    fontSize: 11,
    backgroundColor: '#FF9800',
    width: 'auto',
    paddingTop: 2,
    paddingLeft: 5,
    paddingBottom: 2,
    paddingRight: 5,
    display: "inline-block",
    borderRadius: '15%',
    marginTop: '.5em',
    marginBottom: '1em',
    color: '#483C0C',
    textTransform: 'uppercase',
  },

  disqus: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '6em',
  }
});

class Blog extends React.Component {
  renderElement() {
    if (  this.props.content  ) {
      return (
        <>
        <div>
        { this.props.content.map((item, key) => {
          if (item.__typename === 'paragraph__text') {
            return (
              <ParagraphText
                title={item.__typename} 
                text={item.field_text.processed}
                header={item.field_header}
              />
            );
          } else if (item.__typename === 'paragraph__image') {
            return (
              <ParagraphImage
                title={item.__typename} 
                media={item.relationships.field_single_image.relationships.field_media_image}
                caption={item.field_caption.processed}
              />
              );
          } else {
            return ('foo')
          }
        })
        }
        </div>
        </>
      );
    }
  }

  render() {
    const {classes} = this.props;
    const disqusShortname = "jumpsuit-life";
    const disqusConfig = {
      identifier: this.props.id,
      title: this.props.title,
    };


      return ( 
        <>
        <Card className={classes.header}>
          <CardContent>
        {this.props.media.localFile &&
        <Img fluid={this.props.media.localFile.childImageSharp.fluid} />
        }
      

        <div className={classes.chip}>{this.props.category}</div>
        <Typography variant="h1" component="h1">{this.props.title}</Typography>
        <Typography variant="subtitle1" dangerouslySetInnerHTML={{ __html: this.props.summary }} />
              <AuthorDetails
                changed={this.props.changed}
              />
          </CardContent>
        </Card>
       
        <Typography variant="body1">
        { this.renderElement() }
        </Typography>
          <div className={classes.disqus} >
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
        </>
      )
    }
}

export default withStyles(styles)(Blog);