import React from 'react';
import styled from 'styled-components';
import IPAdd from './IPAdd'

const StyledRoot = styled.div`
  padding: 50px 12px;
`
const StyledContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: auto;
`

const Card = () => {
    return (
        <StyledRoot>
            <StyledContainer>
                
                <IPAdd
                    title = "IPAddress Details"
                    description = "The IP address is : "
                />
            </StyledContainer>
        </StyledRoot>
    )
}

export default Card;