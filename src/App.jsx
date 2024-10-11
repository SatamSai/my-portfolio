import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailSection from './components/ProjectDetailSection';
import HomePage from './pages/HomePage';
import AboutPage from './components/AboutPage';
import { ThemeContext } from './context/themeContext';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { GlobalStyles } from './components/styles';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {

  const [theme, setTheme] = useState("dark")

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme == "dark" ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetailSection />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
