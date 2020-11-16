import React from "react"
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import heroCSS from '../css/hero.module.css';

import useHome from '../hooks/useHome';
import Layout from '../components/layout';
import Find from '../components/find';
import EstatesList from '../components/estatesList';
import SEO from "../components/seo"

const BgImage = styled(BackgroundImage)`
    height: 600px;
`;

const Index = () => {
  const home = useHome();
  const { name, content, image } = home[0];

  return ( 
    <Layout>
        <SEO title="Home" />
        <BgImage
            tag="section"
            fluid={image.sharp.fluid}
            fadeIn="soft"
        >
            <div className={heroCSS.bgimage}>
                <h1 className={heroCSS.title}>Sale of exclusive houses and apartments</h1>
            </div>
        </BgImage>
        <main>
            <div
                css={css`
                    max-width: 800px;
                    margin: 0 auto;
                `}
            >
                <h1>{name}</h1>
                <p
                    css={css`
                        text-align: center;
                    `}
                >{content}</p>
            </div>
        </main>

        <Find />
        <EstatesList />
    
    </Layout>
  );
}

export default Index;
