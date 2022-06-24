import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const MetricsItemDiv = styled.div`
    font-size: 36px;
    letter-spacing: -1px;
    margin-bottom: 20px;
    color: rgb(58, 58, 58);
    font-family: sans-serif;
    strong {
        font-weight: bold;
    }
    `

const MetricsItem = ({id}) => {
    const statistics = useSelector( state => state.statistics.statistics )
    const statistic = statistics.filter(value=>value.id === id)

    const [count, setCount] = useState(0)
    const end = statistic[0].value
    let stepTime = useRef(Math.abs(Math.floor(2000 / end)))
    let stepNum = 1
    
    useEffect(() => {
        let timer=null
        stepNum = end < 100 ? 1 : Math.abs(Math.floor(end / 100));
        stepTime.current *= 1.01

        if (count > end * 0.9){
            stepNum = 1
        }

        if (count < end) {
            timer = setInterval(() => {
                setCount(state => state + stepNum)
            }, stepTime.current)
        } else {
            timer = setInterval(() => {
                setCount(count)
            })
        }
        
        return () => {
            clearInterval(timer)
        }
    }, [count, stepTime.current])

    return (
        <MetricsItemDiv>
            <strong>
                <span>
                    {
                        count
                    }
                </span>만 {statistic[0].unit}
            </strong>의 {statistic[0].name}
        </MetricsItemDiv>
    );
};

export default MetricsItem;