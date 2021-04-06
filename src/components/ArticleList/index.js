import * as React from "react"
import ArticleItem from '../ArticleItem';
import styled from "styled-components"

const ArticleList = ({ articles }) => {

    return (
        <ArticlesGrid>
            {
                articles.map(article =>
                    <ArticleItem key={article.slug } article={article} />
                )
            }
        </ArticlesGrid>
    )
}

const ArticlesGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
grid-gap: 32px;
grid-auto-flow: dense;
`

export default ArticleList
