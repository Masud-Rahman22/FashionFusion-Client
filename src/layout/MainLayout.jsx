import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/NavBar/NavBar";
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={`${darkMode ? 'bg-black': ''}`}>
            <ThemeContext.Provider value={{darkMode,setDarkMode}}>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            </ThemeContext.Provider>
        </div>
    );
};

export default MainLayout;