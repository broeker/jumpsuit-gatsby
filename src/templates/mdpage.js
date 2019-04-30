import React from "react"
import { graphql } from "gatsby"
import MarkdownPage from '../components/MarkdownPage/MarkdownPage'

import Helmet from 'react-helmet';
import Layout from '../components/Layout/Layout';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = theme => ({
    root: {
         flexGrow: 1,
    },
});

const mdTemplate = (props) => {
    const { classes } = props;
    const { markdownRemark } = props.data // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark

    return (
        <Layout>

       <div className={classes.root}>
        <MarkdownPage
              title={frontmatter.title}
              changed={frontmatter.date}
              html={html}
          />
      </div>
    </Layout>
    )
};


export default withRoot(withStyles(styles)(mdTemplate));

export const query = graphql `
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
  `