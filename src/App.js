import React, { Component } from 'react'
import logo from './logo.svg';
import Navigation from './sections/Navigation'
import TitlesAndIcons from './sections/TitlesAndIcons';
import AboutSection from './sections/AboutSection';
import SkillSection from './sections/SkillSection';
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "./components/useDarkMode";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import Toggle from "./components/Toggler"
import './App.css';
import SnowStorm from 'react-snowstorm';

const App = () => {

    const [theme, themeToggler, mountedComponent] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    if(!mountedComponent) return <div/>

        return(
            <ThemeProvider theme={themeMode}>
                <>
                        <GlobalStyles/>
              <div className="App">
                  <SnowStorm />
                  <Navigation/>
                  <TitlesAndIcons/>
                  <Toggle theme={theme} toggleTheme={themeToggler} />
                  <AboutSection/>
                  <SkillSection/>
              </div>
                    </>
            </ThemeProvider>
        );

}
export default App;
