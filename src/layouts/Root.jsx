import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between items-center">
            <div className="w-full">
                <div className="w-full">
                    <Navbar></Navbar>
                </div>
                <div className="w-full">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;