import React from 'react';
import styled from 'styled-components';

const BarTitleContainer = styled.div`
        width: 21vw;
        height: 4vw;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-right-radius: 0.7vw;
        border-bottom-right-radius: 0.7vw;

        h3{
            font-size: 3.5vw;
            font-family: 'BebaNeue';
            letter-spacing: 0.3vw;
            padding-top: 0.4vw;
        }
`;

const BarTitle = ({bgcolor, colorText, children}) => {
    return (
        <BarTitleContainer  style={{ backgroundColor: bgcolor}}>

            <h3 style={{ color: colorText}}>

                {children}

            </h3>
            
        </BarTitleContainer>
    )
}

export default BarTitle;
