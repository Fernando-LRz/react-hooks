// import { memo } from 'react';
import React from 'react';

export const Small = React.memo(({ value }) => {

    console.log('Me volvía a dibujar')

    return (
        <small>{ value }</small>
    );
});