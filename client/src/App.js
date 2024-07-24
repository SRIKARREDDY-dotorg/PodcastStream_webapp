import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./index.css";
import { lightTheme, darkTheme } from "./utils/Themes";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
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
          <Frame>Podstream</Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
