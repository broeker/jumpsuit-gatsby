import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import moment from 'moment'
import BlogCard from '../components/BlogCard/BlogCard'
import LinkBlog from '../components/LinkBlog/LinkBlog'
import JumpsuitCard from '../components/JumpsuitCard/JumpsuitCard'
import Img from 'gatsby-image';
import Link from 'gatsby-link';

const styles = theme => ({
  fade: {
    opacity: '1',

  }
});

class Index extends React.Component {

  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  renderElement() {

    const { classes } = this.props;

    if (  this.props.data  ) {
      return (
        <Grid container spacing={24}>
          <Grid item lg={8}>
            <Grid container spacing={24}>
              { this.props.data.allNodeBlog.edges.map(({ node: blog }, key) => {

                var grid;
                var media;

                if (key === 0) {
                  grid=12
                } else {
                  grid=6
                }

                if (blog.relationships.field_hero) {
                  media = blog.relationships.field_hero.relationships.field_media_image.localFile.childImageSharp.fluid
                } else {
                  media = ''
                }

                return (
                <>
                  <Grid className={classes.card} item key={blog.title} lg={grid}>
                    <BlogCard
                      title={blog.title}
                      summary={blog.summary.processed}
                      category={blog.relationships.category[0].name}
                      path={blog.fields.slug}
                      media={media}
                      changed={moment(blog.changed).format('MMMM DD, YYYY')}
                    />
                  </Grid>
                </>
                );
              }
              )
              }
            </Grid>
          </Grid>
            <Grid item lg={4}>
              <JumpsuitCard />
            <div className={classes.fade}>
             <Link to="/">
              <Img
               fluid={this.props.data.imageTwo.childImageSharp.fluid}
             />
             </Link>
            </div>
              <LinkBlog />
            </Grid>
        </Grid>
      );
    }
  }

  render() {

    return (
      <Layout>
        { this.renderElement() }
      </Layout>
    )
  }
}

export default withStyles(styles)(Index);

export const query = graphql`
  query {
   
   imageOne: file(relativePath: { eq: "doit.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
       }
     }
   } 
   
   imageTwo: file(relativePath: { eq: "rocket.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
        }
      }
    } 
    
    safetyfirst: file(relativePath: { eq: "safety_first.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
    allNodeBlog(
      sort: {
        fields: [changed], order:DESC
      }
      limit: 3
      ) 
      {
      edges {
        node {
          fields {
            slug 
          }
          id
          title
          created
          changed
          field_featured
          summary: field_summary {
            format
            processed
          }
          relationships {
            category: field_blog_category {
              name,
            },
            tags: field_tags {
            name,
            },
            field_hero {
              relationships {
                field_media_image {
                   filename
                    uri {
                      value
                      url
                      }
                  localFile {
                  publicURL
                  childImageSharp {
                     fluid(
                      maxHeight: 548, 
                      maxWidth: 1280, 
                      ) 
                    {
                     ...GatsbyImageSharpFluid
                      aspectRatio,
                      presentationWidth,
                      presentationHeight,
                    }
                  }
                }
                }
              }
            },
          }
          created
        }
      }
    }
  }
`;

