import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const SearchedCard = styled(Link)`
    width: 390px;
    height: 300px;
    display: flex;
    flex-direction: column;
    padding: 18px 18px 30px 18px;
    border-radius: 6px;
    gap: 4px;
    text-decoration: none;
    background: ${({theme}) => theme.card};
    cursor: pointer;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
    &:hover {
        cursor: pointer;
        transform: translateY(-8px);
        transition: all 0.4s ease-in-out;
        box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
        filter: brightness(1.3);
    }
    @media (max-width: 768px) {
        width: 290px;
    }
`;

const PodcastImage = styled.img`
    object-fit: cover;
    border-radius: 6px;
    width: 50%;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.4);
`;

const PodcastTitle = styled.div`
    color: ${({theme}) => theme.text_primary};
    display: -webkit-box;
    font-size: 20px;
    font-weight: 520;
`;

const UploadInfo = styled.div`
    display: flex;
    width: 100%;
    gap: 26px;
    justify-content: space-between;
    padding: 10px 0px 10px 10px;
`;

const Time = styled.div`
    color: ${({theme}) => theme.text_secondary};
    font-size: 14px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
    @media (max-width: 560px) {
        font-size: 10px;
    }
`;

const CreatorName = styled.div`
    color: ${({theme}) => theme.text_primary};
    font-size: 14px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
    @media (max-width: 560px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
    color: ${({theme}) => theme.text_secondary};
    display: -webkit-box;
    max-width: 100%;
    font-size: 14px;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const TopResult = ({podcast}) => {
  return (
    <SearchedCard >
        <PodcastImage src="https://media.wired.com/photos/613bb0daa755c6a4b550bac8/master/w_2240,c_limit/Gear-Podcast-Hearing-Loss-1279654034.jpg"/>
        <PodcastTitle>
            All about web dev
        </PodcastTitle>
        <UploadInfo>
            <Time>• 1000 Views</Time>
            <Time>• 10 Months Ago</Time>
            <CreatorName>Srikar Reddy Pochana</CreatorName>
        </UploadInfo>
        <Description>This podcast is hosted by Srikar on talking about the content
        writing to audience to provide insights on the TedTalks and audience</Description>
    </SearchedCard>
  )
}

export default TopResult