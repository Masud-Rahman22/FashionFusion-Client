import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/NavBar/NavBar";
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;