import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./index.css";
import { lightTheme, darkTheme } from "./utils/Themes";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Favourites from "./pages/Favourites";
import Profile from "./pages/Profile";
import PodcastDetails from "./pages/PodcastDetails";
import DisplayPodcast from "./pages/DisplayPodcast";

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  padding-left: ${({ sidebarOpen }) => (sidebarOpen ? "400px" : "0")};
  transition: padding-left 0.3s ease-in-out;
  overflow-y: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.bgLight};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

function App() {
  // hooks
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          <Sidebar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            setDarkMode={setDarkMode}
            darkMode={darkMode}
          />
          <Frame sidebarOpen={menuOpen}>
            <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Routes>
              <Route path="/" exact element={<Dashboard/>}/>
              <Route path="/search" exact element={<Search/>}/>
              <Route path="/favourites" exact element={<Favourites/>}/>
              <Route path="/profile" exact element={<Profile/>}/>
              <Route path="/podcast/:id" exact element={<PodcastDetails/>}/>
              <Route path="/showpodcasts/:type" exact element={<DisplayPodcast/>}/>
            </Routes>
          </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
