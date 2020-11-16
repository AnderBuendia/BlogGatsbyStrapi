/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 * 
 * Nodejs Code
 */

const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allStrapiPages {
                nodes {
                    name
                    id
                    path
                }
            }
            allStrapiEstates {
                nodes {
                    name
                    id
                }
            }
        }
    `);

    // console.log(JSON.stringify(resultado.data.allStrapiEstates));

    /* Si no hay resultados */
    if (result.errors) {
        reporter.panic('There is no found results', resultado.errors);
    }

    /* If result, generate static files */
    const pages = result.data.allStrapiPages.nodes;
    const estates = result.data.allStrapiEstates.nodes;
    // console.log(estates);

    /* Create templates for pages */
    pages.forEach(page => {
        actions.createPage({
            path: urlSlug(page.path),
            component: require.resolve('./src/components/pages.js'),
            context: {
                id: page.id
            }
        })
    })   

    /* Create templates for estates */
    estates.forEach(estate => {
        // console.log( urlSlug(estate.name));
        actions.createPage({
            path: urlSlug(estate.id),
            component: require.resolve('./src/components/estates.js'),
            context: {
                id: estate.id
            }
        })
    })   
}
