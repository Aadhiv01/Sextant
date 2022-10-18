import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  border: #000;
  padding: 25px 12px 18px;
  height: 6.8rem;
  width: 33rem;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 36%, rgba(0,212,255,1) 100%);
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
    height: 7.4rem;
    width: 35rem;
  }
`

const Title = styled.h2`
  color: #fff;
  font-weight: 900;
  text-aling: center;
  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
`
const Description = styled.p`
  color: #fff;
  font-weight: 760;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`

const IPAdd  = ({
        title,
        description
    }) => (
    <StyledContainer>
    <Title>{title}</Title>
    <Description>
      {description}
    </Description>
  </StyledContainer>
)

export default IPAdd