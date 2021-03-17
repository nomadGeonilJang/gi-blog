
import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}:any) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>Geonil's Thoughts </h1>
        <h4>{data.allMarkdownRemark.totalCount}</h4>
        {
          data.allMarkdownRemark.edges.map(({node}:any) => (
            <div key={node.id}>
              <span>{node.frontmatter.title} - {node.frontmatter.date}</span>
              <p>{node.excerpt}</p>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default IndexPage
export const query = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          date(fromNow: false)
          title
        }
        excerpt
      }
    }
    totalCount
  }
}
`
