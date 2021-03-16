
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
        <h1>GI Blog</h1>
      </div>
    </Layout>
  )
}

export default IndexPage

