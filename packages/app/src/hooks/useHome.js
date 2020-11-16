import { graphql, useStaticQuery } from 'gatsby'

const useHome = () => {
    
    const res = useStaticQuery(
        graphql`
            query {
                allStrapiPages( filter: { name: { eq: "Home" } } ){
                nodes {
                    id
                    name
                    content
                    image {
                        sharp: childImageSharp {
                            fluid( maxWidth: 1200 duotone: {
                                highlight: "#222222", shadow: "#192550", opacity: 30
                            } ) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
          }
        `
    );

    return res.allStrapiPages.nodes.map(home => ({
        name: home.name,
        content: home.content,
        image: home.image
    }))

}
 
export default useHome;