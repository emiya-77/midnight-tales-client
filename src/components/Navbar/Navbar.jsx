import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider/AuthProvider";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { DataContext } from "../../data/DataProvider/DataProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const { displayName, photoURL } = user || {};
    const { darkMode, setDarkMode } = useContext(DataContext);
    console.log(user);


    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('user logged out');
            })
            .catch(error => {
                console.log(error);
            })
    }

    const smNavLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/add-product'>Add Product</NavLink></li>
        <li><NavLink to='/my-cart'>My Cart</NavLink></li>
        {
            user
                ? <li><Link to='/login'>
                    <button onClick={handleLogOut} className="">Log Out</button>
                </Link></li>
                : <><li><NavLink to='/register'>Register</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li></>
        }
    </>

    const navLinks = <>
        <li><NavLink className={({ isActive }) => {
            return (
                isActive
                    ? 'nav-list bg-white bg-opacity-20'
                    : 'nav-list bg-white bg-opacity-0'
            );
        }} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => {
            return (
                isActive
                    ? 'nav-list bg-white bg-opacity-20'
                    : 'nav-list bg-white bg-opacity-0'
            );
        }} to='/add-product'>Add Product</NavLink></li>
        <li><NavLink className={({ isActive }) => {
            return (
                isActive
                    ? `nav-list bg-white bg-opacity-20`
                    : 'nav-list bg-white bg-opacity-0'
            );
        }} to='/my-cart'>My Cart</NavLink></li>
    </>

    const logLinks = <>
        <li><NavLink className={({ isActive }) => {
            return (
                isActive
                    ? 'nav-list bg-white bg-opacity-20'
                    : 'nav-list bg-white bg-opacity-0'
            );
        }} to='/login'>Login</NavLink></li>
        <li><NavLink className={({ isActive }) => {
            return (
                isActive
                    ? 'nav-list bg-white bg-opacity-20'
                    : 'nav-list bg-white bg-opacity-0'
            );
        }} to='/register'>Register</NavLink></li>
    </>

    const loginLinks = <>
        <div className="flex items-center justify-center gap-2">
            <div className="text-xl dark:font-light font-normal dark:tracking-widest tracking-wider dark:text-white text-black">
                {displayName ? displayName : ''}
            </div>
            <div className="w-12 h-12 flex justify-center items-center bg-white rounded-full overflow-hidden">
                <img src={photoURL ? photoURL : ''} className="w-full h-full object-cover" alt="" />
            </div>
        </div>
        <li><Link to='/login'>
            <button onClick={handleLogOut} className="nav-list bg-white bg-opacity-0">Log Out</button>
        </Link></li>
    </>

    return (
        <div className="fixed w-full z-10">
            <nav className="list-none w-full xl:w-full xl:px-16 h-20 md:h-28 mx-auto px-4 lg:px-10 md:px-12 bg-white dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-70 flex justify-between items-center backdrop-filter backdrop-blur-sm shadow-xl">
                <div className="lg:hidden w-full flex justify-between items-center lg:flex-none">
                    <div className="w-[100px]">
                        <img className="w-full h-full object-cover" src={darkMode ? "/img/global/mt-logo-light.png" : "/img/global/mt-logo-dark.png"} alt="" />
                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick={() => {
                            setDarkMode(!darkMode);
                        }} className="cursor-pointer">
                            {
                                darkMode ? <BsSunFill className="w-8 h-8 text-white"></BsSunFill>
                                    : <BsMoonFill className="w-6 h-6 text-black"></BsMoonFill>
                            }
                        </button>
                        <div className="dropdown lg:hidden">
                            <label tabIndex={0} className="lg:hidden">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 dark:text-white text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow dark:bg-gray-800 bg-white bg-opacity-60 dark:text-white text-black backdrop-filter backdrop-blur rounded-br-3xl rounded-tl-3xl w-52">
                                {smNavLinks}
                            </ul>
                        </div></div>
                </div>
                <div className="hidden lg:flex lg:w-[150px] xl:w-[170px]">
                    <img className="w-full h-full object-cover" src={darkMode ? "/img/global/mt-logo-light.png" : "/img/global/mt-logo-dark.png"} alt="" />
                </div>
                <div className="hidden lg:flex justify-center items-center gap-4">
                    {navLinks}
                </div>
                <div className="hidden lg:flex justify-center items-center gap-4">
                    <button onClick={() => {
                        setDarkMode(!darkMode);
                    }} className="cursor-pointer">
                        {
                            darkMode ? <BsSunFill className="w-8 h-8 text-white"></BsSunFill>
                                : <BsMoonFill className="w-6 h-6 text-black"></BsMoonFill>
                        }
                    </button>
                    {user ? loginLinks : logLinks}
                </div>

            </nav>
        </div >
    );
};

export default Navbar;