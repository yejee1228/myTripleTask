import React, { useState, useEffect } from 'react';
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
    let stepTime = Math.abs(Math.floor((2000 / end)))

    useEffect(() => {
        let timer=null
        if (count > end * 0.9){
            stepTime *= 4
        }

        if (count < end) {
            timer = setInterval(() => {
                setCount(state => state + 1)
            }, stepTime)
        } else {
            timer = setInterval(() => {
                setCount(count)
            })
        }
        return () => {
            clearInterval(timer)
        }
    }, [count, stepTime])

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