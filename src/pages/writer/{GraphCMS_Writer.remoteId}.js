import * as React from "react"
import {  graphql } from "gatsby"
import ArticleList from '../../components/ArticleList'
import Layout from "../../components/layout"
import SEO from "../../components/seo"


const Writer = ({ data }) => {

  const writer = data.graphCmsWriter;

  return (
    <Layout>
      <SEO title="Article" />
      <h2>{writer.name}</h2>
      <ArticleList articles={writer.articles} />
    </Layout>
  )
}

export default Writer

export const writer = graphql`
  query($remoteId: ID){
    graphCmsWriter(remoteId: { eq: $remoteId}) {
        id
        name
        remoteId
        articles {
          title
          slug
          featuredImage {
            gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
          }
        }
        
    }
  }
`;
