import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled'; 

const IconsList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;

    li {
        display: flex;
        img {
            margin-right: 1rem;
        }
    }
`;

const Icons = ({ bathrooms, parking, rooms }) => {
    
    const { icons } = useStaticQuery(graphql`
        query {
            icons: allFile(filter: { relativeDirectory: { eq: "icons" } }) {
                edges {
                    node {
                        id
                        publicURL
                    }
                }
            }
        }
    `);

    // console.log(icons);

    const Iconsimages = icons.edges;

    return ( 
        <IconsList>
            <li>
                <img src={Iconsimages[2].node.publicURL} alt="bedroom icon" />
                <p>{bathrooms}</p>
            </li>
            <li>
                <img src={Iconsimages[1].node.publicURL} alt="parking icon" />
                <p>{parking}</p>
            </li>
            <li>
                <img src={Iconsimages[0].node.publicURL} alt="room icon" />
                <p>{rooms}</p>
            </li>
        </IconsList>
    );
}
 
export default Icons;