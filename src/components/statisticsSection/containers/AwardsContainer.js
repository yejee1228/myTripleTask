import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';

const AwardsContainerDiv = styled.div`
    margin: 50px 0px 140px 623px;
    white-space: nowrap;
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
const AwardItemDiv = styled.div`
    display: inline-block;
    font-family: sans-serif;
    background-position: left top;
    background-repeat: no-repeat;
    color: rgba(58, 58, 58, 0.8);
    font-weight: bold;
    background-size: 54px 54px;
    height: 54px;
    padding: 5px 0px 5px 62px;
    font-size: 14px;
    line-height: 22px;
    margin-right: 39px;
`
const AwardsContainer = ({delay}) => {
    const [className, setClassName] = useState('fade-enter')
    useEffect(()=>{
        setTimeout(()=>setClassName('fade-enter-active'), delay)
    },[])
    return (
        <AwardsContainerDiv className={className}>
            <AwardItemDiv style={{backgroundImage:'url(/images/play-store2x.png)'}}>2018 구글 플레이스토어<br/>올해의 앱 최우수상 수상</AwardItemDiv>
            <AwardItemDiv style={{backgroundImage:'url(/images/badge-apple4x.png)'}}>2018 애플 앱스토어<br/>오늘의 여행앱 선정</AwardItemDiv>
        </AwardsContainerDiv>
    );
};

export default AwardsContainer;