import { useContext } from "react";
import { DataContext } from "../../../data/DataProvider/DataProvider";
import MovieCard from "./MovieCard";


const LatestMovies = () => {

    const { movieList } = useContext(DataContext);

    return (
        <section className="w-full dark:bg-red-700 bg-blue-400 dark:text-white text-black bg-opacity-60 backdrop-filter backdrop-blur-sm py-12 mb-40">
            <div className="container mx-auto">
                <h2 className="text-5xl font-normal text-center mb-6 tracking-wider">Latest Movies</h2>
                <div className="flex flex-wrap justify-center gap-10">
                    {
                        movieList?.map(movie => <MovieCard key={movie.id} movie={movie}></MovieCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default LatestMovies;