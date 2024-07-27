import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 0.6rem;
    padding: 1rem;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);
    &:hover {
        cursor: pointer;
        transform: translateY(-8px);
        transition: all 0.4s ease-in-out;
        box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.5);
        filter: brightness(1.3);
    }
    @media (max-width: 768px) {
        width: 250px;
    }
    // overflow: hidden;
`;

const FlexContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

const DefaultCardText = styled.div`
    color: ${({theme}) => theme.text_primary};
    font-size:1.4rem;
    font-weight: 540;
`;

const DefaultCardImg = styled.img`
    object-fit: cover;
    height: 90px;
    width: 80px;
    clip-path: polygon(0 0, 100% 0, 100% 66%, 0 98%);
    transform:rotate(20deg);
`;

const DefaultCard = ({category}) => {
  return (
    <Card>
        <DefaultCardText>{category.name}</DefaultCardText>
        <FlexContainer>
            <DefaultCardImg src={category.img}/>
        </FlexContainer>
    </Card>
  )
}

export default DefaultCard