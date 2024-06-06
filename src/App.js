import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"
import { lightTheme } from "./components/Themes";
// import { Route , Routes } from "react-router";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import MySkillsPage from "./components/MySkillsPage";
import WorkPage from "./components/WorkPage";
import ExperiencePage from "./components/ExperiencePage";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponent/SoundBar";

function App() {

  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />

            <Route path="/about" element={<AboutPage />} />

            <Route path="/skills" element={<MySkillsPage />} />

            <Route path="/work" element={<WorkPage />} />

            <Route path="/experience" element={<ExperiencePage />} />

            <Route path="*" element={<Main />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
    
}

export default App

