import * as React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleList from '../components/ArticleList';
import Pager from '../components/Pager';

const ListArticles = ({ data, pageContext }) => {

  return (
    <Layout>
      <SEO title="Blog" />
      <h2>Articles</h2>
      <ArticleList articles={data.allGraphCmsArticle.nodes} />
      {pageContext.numPages > 1 && <Pager pageContext={pageContext} />}
    </Layout>
  )

};

export default ListArticles

export const pageQuery = graphql`
query($skip: Int, $limit: Int) {
  allGraphCmsArticle(skip: $skip, limit: $limit, filter: { stage: { eq: PUBLISHED } }) {
    nodes {
        id
        title
        slug
        featuredImage {
            gatsbyImageData(layout: CONSTRAINED)
        }
        writer {
          id
          name
        }
      }
  }
}
`;