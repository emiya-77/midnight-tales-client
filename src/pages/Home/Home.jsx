import Banner from "../../components/Banner/Banner";
import BrandSection from "./BrandSection";
import LatestMovies from "./LatestMovies/LatestMovies";
import NewsLetter from "./NewsLetter";

const Home = () => {
    return (
        <>
            <div className="bg-cover bg-center bg-fixed pb-32 space-y-32" style={{
                backgroundImage: `url(/img/home-bg4.jpg)`
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