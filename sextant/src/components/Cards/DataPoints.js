import React from 'react';
import styled from 'styled-components';

const StyledRoot = styled.div`
  padding: 50px 12px;
`
const StyledContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: auto;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 36%, rgba(0,212,255,1) 100%);
`

const DataPoint = () => {
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

export default DataPoint;