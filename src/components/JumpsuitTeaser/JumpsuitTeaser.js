import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';

export default () => (
  <StaticQuery
    query={graphql`
      query jumpsuitQuery {
        imageOne: file(relativePath: { eq: "doit.png" }) {
        childImageSharp {
            fluid(maxWidth: 1000) {
            src
            ...GatsbyImageSharpFluid
            }
         }
       }
      }
    `}
    render={data => (
      <Img fluid={data.imageOne.childImageSharp.fluid} />
    )}
  />
)

