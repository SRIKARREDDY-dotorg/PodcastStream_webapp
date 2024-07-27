import React from "react";
import styled from "styled-components";
import {
  HomeRounded,
  CloseRounded,
  SearchRounded,
  FavoriteRounded,
  CloudUploadRounded,
  LightModeRounded,
  LogoutRounded,
  DarkModeRounded,
} from "@mui/icons-material";
import LogoImage from "../images/Logo.png";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  flex: 0.5;
  flex-direction: column;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  position: fixed;
  z-index: 1000;
  width: 100%;
  max-width: 400px;
  left: ${({ menuOpen }) => (menuOpen ? "0" : "-100%")};
  transition: 0.3s ease-in-out;
  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

const Image = styled.img`
  height: 40px;
`;

const Flex = styled.div`
  display: flex;
  padding: 0px 12px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: bold;
  font-size: 20px;
  margin: 16px 0px;
  width: 100%;
`;

const Close = styled.div`
  @media (max-width: 2000px) {
    display: flex;
  }
  margin-right: 30px;
  padding: 8px;
  border-radius: 50%;
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary + 50};
  }
`;

const Elements = styled.div`
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  width: calc(100% - 32px);
  overflow: hidden;
  text-decoration: none !important;
  cursor: pointer;
  color: ${({ theme }) => theme.text_secondary};
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary + 50};
    border-radius: 28px; /* Smooth corners on hover */
  }
`;

const NavText = styled.div`
  padding: 12px 0px;
  text-decoration: none !important;
`;

const HR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.text_secondary + 50};
  margin: 10px 0px;
`;

const StyledLink = styled(Link)`
  width: 100%;
  display: block;
  text-decoration: none;
`;

const Sidebar = ({ menuOpen, setMenuOpen, setDarkMode, darkMode }) => {
  console.log("Menu Open " + menuOpen);

  const menuItems = [
    {
      link: "/",
      name: "Dashboard",
      icon: <HomeRounded />,
    },
    {
      link: "/search",
      name: "Search",
      icon: <SearchRounded />,
    },
    {
      link: "/favourites",
      name: "Favourites",
      icon: <FavoriteRounded />,
    },
  ];

  const button = [
    {
      fun: () => alert("Upload"),
      name: "Upload",
      icon: <CloudUploadRounded />,
    },
    {
      fun: () => setDarkMode(!darkMode),
      name: darkMode ? "Light Mode" : "Dark Mode",
      icon: darkMode ? <LightModeRounded /> : <DarkModeRounded />,
    },
    {
      fun: () => alert("Log Out"),
      name: "Log Out",
      icon: <LogoutRounded />,
    },
  ];

  return (
    <MenuContainer menuOpen={menuOpen}>
      <Flex>
        <Logo>
          <Image src={LogoImage} />
          PODSTREAM
        </Logo>
        <Close
          onClick={() => {
            setMenuOpen(false);
            console.log("Menu click");
          }}
          style={{ cursor: "pointer" }}
        >
          <CloseRounded />
        </Close>
      </Flex>
      {menuItems.map((item) => (
        <StyledLink to={item.link}>
          <Elements>
            {item.icon}
            <NavText>{item.name}</NavText>
          </Elements>
        </StyledLink>
      ))}
      <HR />
      {button.map((item) => (
        <Elements onClick={item.fun}>
          {item.icon}
          <NavText>{item.name}</NavText>
        </Elements>
      ))}
    </MenuContainer>
  );
};

export default Sidebar;
