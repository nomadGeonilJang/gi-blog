
import * as React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";



const IndexPage = ( { data }:any ) => {
  console.log( data );
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1> 장건일 블로그 </h1>
        <h4>{data.allMarkdownRemark.totalCount}</h4>
        {
          data.allMarkdownRemark.edges.map( ( { node }:any ) => (
            <div key={node.id}>
              <BlogLink to={node.fields.slug}>
                <BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle>
              </BlogLink>
              <p>{node.excerpt}</p>
              
            </div>
          ) )
        }
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
query {
  allMarkdownRemark(sort:{fields:[frontmatter___date], order:DESC}) {
    edges {
      node {
        id
        frontmatter {
          date(fromNow: false)
          title
        }
        fields{
          slug
        }
        excerpt
      }
    }
    totalCount
  }
}
`;

const BlogLink = styled( Link )`
  text-decoration:none;
`;

const BlogTitle = styled.h3`
  margin-bottom:20px;
  color:blue
`;