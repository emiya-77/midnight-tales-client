import { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import BrandSection from "./BrandSection";
import LatestMovies from "./LatestMovies/LatestMovies";
import NewsLetter from "./NewsLetter";
import { DataContext } from "../../data/DataProvider/DataProvider";

const Home = () => {

    const { darkMode } = useContext(DataContext);

    return (
        <>
            <div className="bg-cover bg-center bg-fixed pb-32 space-y-32" style={{
                backgroundImage: `${darkMode ? 'url(/img/home-bg4.jpg)' : 'url(/img/bg-cloud.jpg)'}`
            }}>
                <Banner></Banner>
                <BrandSection></BrandSection>
                <NewsLetter></NewsLetter>
                <LatestMovies></LatestMovies>
            </div>
        </>
    );
};

export default Home;