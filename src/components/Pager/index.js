import React from 'react';
import { Link } from 'gatsby'
import styled from "styled-components"

const Pager = ({ pageContext }) => {

    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
        <Pagination>
            {!isFirst && <Link to={`/${prevPage}`} rel="prev">← Previous</Link>}
            <ul>
                {Array.from({ length: numPages }, (_, i) => (
                    <li key={`pagination-number${i + 1}`}>
                        <Link to={`/${i === 0 ? "" : i + 1}`}>{i + 1}</Link>
                    </li>
                ))}
            </ul>

            {!isLast && <Link to={`/${nextPage}`} rel="next">Next →</Link>}

        </Pagination>
    )
}

export default Pager

const Pagination = styled.div`
    display: flex;
    align-items:center;
    ul {
        margin: 0 1rem;
        li {
            display: inline-block;
            a {
                display: block;
                padding: 0.5rem;
            }
        }
    }

`