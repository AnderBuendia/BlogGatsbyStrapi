import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import heroCSS from '../css/hero.module.css';

const BgImage = styled(BackgroundImage)`
    height: 300px;
`;

const Find = () => {
    
    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "find.jpg"}) {
                sharp: childImageSharp {
                    fluid( maxWidth: 1500 ) {
                       ...GatsbyImageSharpFluid_withWebp 
                    }
                }
            }
        }
    `);

    return (  
        <BgImage
            tag="section"
            fluid={image.sharp.fluid}
            fadeIn="soft"
        >
            <div className={heroCSS.bgimage}>
                <h3 className={heroCSS.title}>Find the home of your dreams</h3>
                <p>15 years of experience</p>
            </div>
        </BgImage>
    );
}
 
export default Find;