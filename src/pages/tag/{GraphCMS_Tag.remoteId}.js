import * as React from "react"
import {  graphql } from "gatsby"
import ArticleList from '../../components/ArticleList'
import Layout from "../../components/layout"
import SEO from "../../components/seo"


const Tag = ({ data }) => {

  const tag = data.graphCmsTag;

  return (
    <Layout>
      <SEO title="Article" />
      <h3>Posts tagged <b>{tag.name}</b></h3>
      <ArticleList articles={tag.articles} />
    </Layout>
  )
}

export default Tag

export const tag = graphql`
  query($remoteId: ID){
    graphCmsTag(remoteId: { eq: $remoteId}) {
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
