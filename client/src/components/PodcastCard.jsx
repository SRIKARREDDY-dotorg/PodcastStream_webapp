import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeadphonesIcon from '@mui/icons-material/Headphones';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const PlayIcon = styled.div`
    padding: 10px;
    border-radius: 50%;
    z-index: 100;
    display: flex;
    align-items: center;
    background: #9000ff !important;
    color: white !important;
    backdrop-filter: blur(4px);
    position: absolute !important;
    top: 45%;
    right: 10%;
    display: none;
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 16px 4px #9000ff50 !important;
`;

const Card = styled.div`
  position: relative;
  text-decoration: none;
  background-color: ${({ theme }) => theme.card};
  max-width: 220px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    filter: brightness(1.3);
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
  }

  &:hover ${PlayIcon} {
    display: flex;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 150px;
`;

const CardImage = styled.img`
  object-fit: cover;
  width: 220px;
  height: 140px;
  border-radius: 6px;
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.4);
  }
`;

const CardInformation = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 450;
  padding: 14px 0px 0px 0px;
  width: 100%;
`;

const Favorite = styled(IconButton)`
  color: white;
  top: 8px;
  right: 6px;
  padding: 6px !important;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.text_secondary + 95} !important;
  color: white !important;
  position: absolute !important;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 16px 6px #222423 !important;
`;

const MainInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`;

const Title = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_primary};
`;

const Description = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  font-size: 12px;
  color: ${({ theme }) => theme.text_primary};
`;

const CreatorsInfo = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 6px;
`;

const Creator = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const CreatorName = styled.div`
  white-space: nowrap;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary};
`;

const Views = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.text_secondary};
  width: max-content;
  margin-top: 7px;
`;

const PodcastCard = () => {
  return (
    <Card>
      <div>
        <Top>
          <Favorite>
            <FavoriteIcon style={{ width: "16px", height: "16px" }} />
          </Favorite>
          <CardImage src="https://media.wired.com/photos/613bb0daa755c6a4b550bac8/master/w_2240,c_limit/Gear-Podcast-Hearing-Loss-1279654034.jpg" />
        </Top>
        <CardInformation>
          <MainInfo>
            <Title>The Tim Ferris Show as sdskdsjcndkcndsk</Title>
            <Description>
              This podcast is hosted by Srikar on talking about the content
              writing to audience
            </Description>
            <CreatorsInfo>
              <Creator>
                <Avatar style={{ width: "26px", height: "26px" }}>R</Avatar>
                <CreatorName>Srikar Reddy</CreatorName>
              </Creator>
              <Views> • 1000 Views</Views>
            </CreatorsInfo>
          </MainInfo>
        </CardInformation>
      </div>
      <PlayIcon>
        {/* #TODO fix based on backend */}
        {"video" === "video" ? (
            <PlayArrowIcon style={{width: "28px", height: "28px"}}/>
        ) : (
            <HeadphonesIcon style={{width: "28px", height: "28px"}}/>
        )
        }
      </PlayIcon>
    </Card>
  );
};

export default PodcastCard;
