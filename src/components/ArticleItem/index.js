import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import dayjs from 'dayjs'

const Article = ({ article }) => {

    const image = getImage(article.featuredImage)

    return (
        <ArticleItem>
            <Link to={`/article/${article.slug}`}>
                {article.featuredImage && <GatsbyImage image={image} alt={article.title} />}
                <Meta>
                    {article.writer && <span>By {article.writer.name}</span>}
                    <p>{dayjs(article.publishedAt).format('MMM D, YYYY')}</p>
                </Meta>
                <h3>{article.title}</h3>
            </Link>
        </ArticleItem>
    )
}


const ArticleItem = styled.article`
    a {
        color: ${({ theme }) => theme.colors.text};
    }
    &:hover {
        h3 {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }
`

const Meta = styled.div`
   font-size: 1.25rem;
   margin-bottom: 0rem;
   display: flex;
   align-items: center;
   justify-content: space-between;
   color: ${({ theme }) => theme.colors.muted};

`

export default Article
