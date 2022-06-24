import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ContentLogoDiv = styled.div`
    box-sizing: border-box;
    background-image: url(/images/triple2x.png);
    background-repeat: no-repeat;
    text-align: center;
    font-family: sans-serif;
    color: rgba(58, 58, 58, 0.7);
    position: absolute;
    top: 150px;
    width: 400px;
    height: 338px;
    background-size: 400px 338px;
    padding-top: 280px;
    font-size: 15px;
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

const ContentLogo = () => {
    const [className, setClassName] = useState('fade-enter')
    useEffect(()=>{
        setTimeout(()=>setClassName('fade-enter-active'), 200)
    },[])
    return (
        <ContentLogoDiv className={className}>
            2021년 12월 기준
        </ContentLogoDiv>
    );
};

export default ContentLogo;