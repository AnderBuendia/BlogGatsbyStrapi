import { graphql, useStaticQuery } from 'gatsby';

const useEstates = () => {
    const res = useStaticQuery(graphql`
        query {
            allStrapiEstates {
                nodes {
                    name
                    description
                    id
                    bathrooms
                    price
                    parking
                    rooms
                    category {
                        name
                    }
                    agents {
                        name
                        phone
                        email
                    }
                    image {
                        sharp: childImageSharp {
                            fluid( maxWidth: 600, maxHeight: 400 ) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `);

    // console.log(res);

    return res.allStrapiEstates.nodes.map(estate => ({
        name: estate.name,
        description: estate.description,
        image: estate.image,
        id: estate.id,
        bathrooms: estate.bathrooms,
        parking: estate.parking,
        rooms: estate.rooms,
        agents: estate.agents,
        price: estate.price,
        category: estate.category
    }))
}

export default useEstates;