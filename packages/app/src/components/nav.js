import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

    @media (min-width: 768px) {
        padding: 0;
        flex-direction: row;
    }
`; 

const NavLink = styled(Link)`
    color: #FFF;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    text-decoration: none;
    padding: .5rem;
    margin-right: 1rem;
    /* para que el último enlace del nav no tenga margen derecho */
    &:last-of-type {
        margin-right: 0;
    }
    &.current-page {
        border-bottom: 2px solid #FFF;
    }
`;

const Navigation = () => {
    return (  
        <Nav>
            <NavLink 
                to={'/'}
                activeClassName="current-page"
            >Home</NavLink>
            <NavLink 
                to={'/about-us'}
                activeClassName="current-page"
            >About Us</NavLink>
            <NavLink 
                to={'/our-estates'} 
                activeClassName="current-page"
            >Estates</NavLink>
        </Nav>
    );
}
 
export default Navigation;