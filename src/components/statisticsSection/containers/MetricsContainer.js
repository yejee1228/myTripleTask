import React, { useState, useEffect } from 'react';
import MetricsItem from './MetricsItem';
import styled from 'styled-components';

const MetricsContainerDiv = styled.div`
    margin-left: 623px;
    padding-top: 150px;
    &.fade-enter{
        opacity: 0;
        transform: translateY(10px);
    }
    &.fade-enter-active{
        opacity : 1;
        transform: translateY(0%);
        transition: all 700ms ease-in-out 500ms;
    }
    `

const MetricsContainer = () => {
    const [className, setClassName] = useState('fade-enter');
    useEffect(()=>{
        setTimeout(()=>setClassName('fade-enter-active'), 200)
    },[]);
    return (
        <MetricsContainerDiv className={className}>
            <MetricsItem id={'touristCount'}/>
            <MetricsItem id={'reviewCount'}/>
            <MetricsItem id={'planCount'}/>
        </MetricsContainerDiv>
    );
};

export default MetricsContainer;