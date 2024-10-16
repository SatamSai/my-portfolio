import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    IconGroup,
    NavigationContainer,
    NavigationControls,
    NavigationItem,
    NavigationItems,
    NavigationWrapper,
} from './Navigation.styles';
import {
    HomeRounded,
    Folder,
    AccountCircleRounded,
    Article,
    LightModeRounded,
    DarkModeRounded,
    HomeOutlined,
    AccountCircleOutlined,
    FolderOutlined,
    ArticleOutlined
} from '@mui/icons-material';
import { ThemeContext } from '../../context/themeContext';

const Navigation = () => {
    const [selectedPage, setSelectedPage] = useState("");
    const navigate = useNavigate()

    const { theme, setTheme } = useContext(ThemeContext)

    const handleNavigate = (page) => {
        setSelectedPage(page)
        navigate(`/${page}`)
    }

    return (
        <NavigationWrapper>
            <NavigationContainer>
                <NavigationItems>
                    <Link to="/" onClick={() => handleNavigate("")}>
                        <NavigationItem className={selectedPage === "" ? "selected" : ""}>
                            <HomeOutlined style={{ fontSize: '30px' }} />
                        </NavigationItem>
                    </Link>
                    <Link to="/about" onClick={() => handleNavigate("about")}>
                        <NavigationItem className={selectedPage === "about" ? "selected" : ""}>
                            <AccountCircleOutlined style={{ fontSize: '30px' }} />
                        </NavigationItem>
                    </Link>
                    <Link to="/projects" onClick={() => handleNavigate("projects")}>
                        <NavigationItem className={selectedPage === "projects" ? "selected" : ""}>
                            <FolderOutlined style={{ fontSize: '28px' }} />
                        </NavigationItem>
                    </Link>
                    <Link to="/blogs" onClick={() => handleNavigate("blogs")}>
                        <NavigationItem className={selectedPage === "blogs" ? "selected" : ""}>
                            <ArticleOutlined style={{ fontSize: '26px' }} />
                        </NavigationItem>
                    </Link>
                </NavigationItems>
                <NavigationControls>
                    <NavigationItem onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
                        <IconGroup className={theme}>
                            <DarkModeRounded style={{ fontSize: '28px', height: '40px', width: '40px', padding: '10px', boxSizing: 'border-box' }} />
                            <LightModeRounded style={{ fontSize: '28px', height: '40px', width: '40px', padding: '10px', boxSizing: 'border-box' }} />
                        </IconGroup>
                    </NavigationItem>
                    <a href="https://drive.usercontent.google.com/uc?id=17DhPHQXCFXS_RXFId5PDAqn0mvucKrRN&export=download" style={{ textDecoration: 'none ' }}>
                        <NavigationItem>
                            CV
                        </NavigationItem>
                    </a>
                </NavigationControls>
            </NavigationContainer>
        </NavigationWrapper>
    );
};

export default Navigation;
