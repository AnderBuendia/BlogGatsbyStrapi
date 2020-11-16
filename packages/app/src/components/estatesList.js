import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import useEstates from '../hooks/useEstates';
import PreviewEstate from './previewEstate';
import estatesListCSS from '../css/estateslist.module.css';
import useFilter from '../hooks/useFilter';

const EstatesList = () => {
    
    const result = useEstates();
    const [estates] = useState(result);
    const [filterEstates, setFilterEstates] = useState([]);
    // console.log(estates); 

    /* Estates filter */
    const { category, FilterUI } = useFilter();

    useEffect(() => {
        if (category) {
            const filter = estates.filter(
                estate => estate.category.name === category);
            setFilterEstates(filter);
        } else {
            setFilterEstates(estates);
        }
    }, [category, estates])

    // console.log(category);

    return ( 
        <>
            <h2
            css={css`
                margin-top: 5rem;
            `}
            >Our Estates</h2>

            {FilterUI()}

            <ul className={estatesListCSS.estates}>
                {filterEstates.map(estate => (
                    <PreviewEstate 
                        key={estate.id}
                        estate={estate}
                    />
                ))}
            </ul>
        </>
    );
}
 
export default EstatesList;