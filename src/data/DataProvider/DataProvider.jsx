import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';


export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [movieList, setMovieList] = useState();
    const [brandList, setBrandList] = useState();
    const [userCartList, setUserCartList] = useState([]);

    const initialDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
    const [darkMode, setDarkMode] = useState(initialDarkMode);

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        document.documentElement.classList.toggle('dark', darkMode);
        document.documentElement.classList.toggle('light', !darkMode);
    }, [darkMode]);

    useEffect(() => {
        fetch('/data/brands.json')
            .then(res => res.json())
            .then(data => setBrandList(data))
    }, [])

    useEffect(() => {
        fetch('/data/movies.json')
            .then(res => res.json())
            .then(res => setMovieList(res))
    }, [])

    const data = {
        brandList,
        movieList,
        userCartList,
        setUserCartList,
        darkMode,
        setDarkMode,
    };

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default DataProvider;