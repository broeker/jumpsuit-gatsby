/**
 * Layout component with header and footer
 * Refactored: 04-30-19
 */
import React from "react"
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../../withRoot'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const styles = theme => ({
    root: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
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
          <html lang="en"/>
          </Helmet>

          <Header
            title={data.site.siteMetadata.title}
          />

          <div className={classes.root}>
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

export default withRoot(withStyles(styles)(Layout));
