import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';


export const DataContext = createContext();

const DataProvider = ({ children }) => {

    // const [blogList, setBlogList] = useState();
    const [brandList, setBrandList] = useState();
    const [userCartList, setUserCartList] = useState([]);

    useEffect(() => {
        fetch('/data/brands.json')
            .then(res => res.json())
            .then(data => setBrandList(data))
    }, [])

    // useEffect(() => {
    //     fetch('/data/blog.json')
    //         .then(res => res.json())
    //         .then(res => setBlogList(res))
    // }, [])

    const data = {
        brandList,
        userCartList,
        setUserCartList,
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