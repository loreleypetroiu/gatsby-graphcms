/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Theme from '../Theme';
import { GlobalStyles } from '../Theme/GlobalStyles';

import Header from "./Header"
import "./layout.css"

const Wrapper = styled.div`
display: flex;
min-height: 100vh;
flex-direction: column;
`
const Content = styled.div`
padding: 3rem;
background: #fff;
margin: auto;
max-width: 100rem;
flex: 1;
`
const Footer = styled.div`
padding: 1rem 2rem;
background: #f3f3f3;
color: #ccc;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Theme>
        <GlobalStyles />
        <Wrapper>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <Content>
            <main>{children}</main>
          </Content>
          <Footer>© {new Date().getFullYear()}</Footer>
        </Wrapper>
      </Theme>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout