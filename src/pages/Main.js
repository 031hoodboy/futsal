import React from 'react';
import styled from 'styled-components'

const Main = () => {
    return(
        <Circle/>
    )    
}


const Circle = styled.div`
    width: 200px;
    height: 200px;
    background: blue;
    border-radius: 100px;
`;

export default Main;