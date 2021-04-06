const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const resultArticles = await graphql(
        `
        {
          articles: allGraphCmsArticle {
            edges {
              node {
                id
              }
            }
          }
        }
      `
    );

    if (resultArticles.errors) {
        throw resultArticles.errors;
    }

    const posts = resultArticles.data.articles.edges
    const postsPerPage = 2
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/` : `/${i + 1}`,
            component: path.resolve("./src/templates/list_articles.js"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1
            },
        })
    });

};
