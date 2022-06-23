import React, { useState, useEffect } from 'react';
import ContentLogo from './containers/ContentLogo';
import MetricsContainer from './containers/MetricsContainer';
import AwardsContainer from './containers/AwardsContainer';

const StaticsSection = () => {
    const [enter, setEnter] = useState(0);
    
    useEffect(() => {
        let timer=null
        if (enter < 3) {
            timer = setInterval(() => {
                setEnter(enter => enter + 1)
            }, 100)
        } else {
            timer = setInterval(() => {
                setEnter(enter)
            })
        }
        return () => {
            clearInterval(timer)
        }
    }, [enter])
    return (
        <>
            {enter > 0 && <ContentLogo />}
            {enter > 1 && <MetricsContainer />}
            {enter > 2 && <AwardsContainer />}
        </>
    );
};

export default StaticsSection;