import React, { useState, useEffect } from 'react';
import ContentLogo from './containers/ContentLogo';
import MetricsContainer from './containers/MetricsContainer';
import AwardsContainer from './containers/AwardsContainer';

const StaticsSection = () => {
    
    return (
        <>
            <ContentLogo delay={0}/>
            <MetricsContainer delay={100}/>
            <AwardsContainer delay={200}/>
        </>
    );
};

export default StaticsSection;