import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import styles from "./linkblog.module.css"

const LinkBlogWrapper = () => (

  <StaticQuery
    query={graphql`
      query {
        allGoogleSheetSitesRow  {
          edges {
            node {
              id
              title
              url
              description
              speed 
            }
          }
        }
      }
    `}
    render={data => <GatsbyLinks
        links={data.allGoogleSheetSitesRow.edges}
    />
    }
  />
);


const GatsbyLinks = ({links}) => (
<>


                  {
      links.map(({ node: link }) => (
        <Card className={styles.cardwrapper} key={link.id}>

          <CardActionArea>
          <CardContent className={styles.card}>
          <a href={link.url}>
            <Typography>{link.title}</Typography>
          </a>
            {link.description}
            <div className={styles.speed}>
            <span className={styles.circle}>{link.speed}</span>
            </div>
          </CardContent>

          </CardActionArea>
            </Card>
      ))
    }

  </>
);

export default LinkBlogWrapper;