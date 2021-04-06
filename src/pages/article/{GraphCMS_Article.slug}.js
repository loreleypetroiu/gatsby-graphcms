import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ReactMarkdown from 'react-markdown'
import styled from "styled-components"
import dayjs from "dayjs";
import Layout from "../../components/layout"
import SEO from "../../components/seo"


const Article = ({ data }) => {

  const article = data.graphCmsArticle;
  const image = getImage(article.featuredImage);
  const writerImage = getImage(article.writer.picture);

  return (
    <Layout>
      <SEO title={article.title} />
      <h2 className='text-center'>{article.title}</h2>

      <AuthorInfo>
        {article.writer && (
          <>
            { article.writer.picture && <GatsbyImage image={writerImage} alt={`image for ${article.writer.name}`} />}
            <div className='authorName'><Link to={`/writer/${article.writer.remoteId}`}>{article.writer.name}</Link></div>
          </>
        )}
        <div className='publishedAt'>{dayjs(article.publishedAt).format('MMM D, YYYY')}</div>
      </AuthorInfo>

      {article.featuredImage && <GatsbyImage image={image} alt={`image for ${article.title}`} />}

      <ArticleContent>
        <ReactMarkdown source={article.content.markdown} />
      </ArticleContent>
    </Layout>
  )
}

export default Article

export const article = graphql`
  query($slug: String){
    graphCmsArticle(slug: { eq: $slug}) {
        id
        title
        slug
        content {
          markdown
        }
        featuredImage {
          gatsbyImageData(layout: CONSTRAINED)
        }
        writer {
            id
            remoteId
            name
            picture {
              gatsbyImageData(layout: FIXED, width: 30)
            }
        }
    }
  }
`;


const AuthorInfo = styled.header`
  display: flex;
  align-items:center;
  margin-bottom: 2rem;
  justify-content: center;
  img {
    border-radius: 50%;
  }
  .authorName {
    margin: 0 1rem;
  }
  .publishedAt {
    color: ${({ theme }) => theme.colors.muted};
  }
`
const ArticleContent = styled.section`
  max-width: 75rem;
  margin: 2rem auto;
  h1 {
    text-align:center;
    font-size: 2.6rem;
  }
  iframe {
    margin: 3rem auto;
    display: block;
  }
  img {
    display: block;
    margin: 1rem auto;
  }
`