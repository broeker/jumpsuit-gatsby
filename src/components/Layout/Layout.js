/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
//import Navigation from '../Navigation/Navigation';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header/Header';
import Footer from './Footer/Footer'
import { createGlobalStyle } from "styled-components";

const styles = theme => ({
  main: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: '100%', 
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

const Layout = (props) => {
const {children, classes} = props;

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              slogan
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {name: 'description', content: 'Sample'},
                {name: 'keywords', content: 'sample, something'},
              ]}
          >
          </Helmet>
            <Header
                    title={data.site.siteMetadata.title}
                />
            <div className={classes.main}>
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )}
    />
  )
}

export default withStyles(styles)(Layout);
