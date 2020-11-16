import React from 'react';
import Icons from './icons';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import Layout from './layout';

/** Page generates dynamically with gatsby-node
 *  It's not necessary import useStaticQuery */
import { graphql } from 'gatsby';

const Description = styled.p`
    width: 95%;
    align-items: center;
    max-width: 1200px;
    margin: 2rem auto;
`;

const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

const Sidebar = styled.aside`
    .price {
        font-size: 2rem;
        color: #75AB00;
    }
    .agent {
        margin-top: 4rem;
        border-radius: 2rem;
        background-color: #75AB00;
        padding: 3rem;
        color: #FFF;
        p {
            margin: 0;
        }
    }
`;

export const query = graphql`
    query($id: String!) {
        allStrapiEstates( filter: { id: { eq: $id } } ) {
            nodes {
                name
                description
                bathrooms
                parking
                rooms
                price
                agents {
                    name
                    phone
                    email
                }
                image {
                    sharp: childImageSharp {
                        fluid(maxWidth: 1200) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`;

const Estates = ({data: { allStrapiEstates: { nodes } }}) => {
    
    const { 
        name, 
        description, 
        bathrooms, 
        agents,
        parking, rooms, image, price } = nodes[0];

    // console.log(data);

    return (  
        <Layout>
            <h1>{name}</h1>
            <Content>
                <main>
                    <Img 
                        fluid={image.sharp.fluid}
                    />
                    
                </main>
                <Sidebar>
                    <p className="price">{price} €</p>
                    <Icons 
                        bathrooms={bathrooms}
                        parking={parking}
                        rooms={rooms}
                    />

                    <div className="agent">
                        <h2>Vendedor</h2>
                        <p>{agents.name}</p>
                        <p>{agents.phone}</p>
                        <p>{agents.email}</p>
                    </div>
                </Sidebar>
            </Content>
            <Description>{description}</Description>
        </Layout>
    );
}
 
export default Estates;