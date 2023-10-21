import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
    const { id, title, imageSrc, date, description } = movie || {};
    return (
        <div className="bg-gray-800 dark:bg-opacity-80 bg-opacity-20 shadow-xl overflow-hidden w-80 md:w-96 m-4" data-aos={id % 3 == 1 ? 'fade-right' : id % 3 == 0 ? 'fade-left' : ''} >
            <img src={imageSrc} alt={title} className="w-full h-40 object-cover hover:scale-105 transition-transform" />
            <div className="p-4">
                <h3 className="text-xl font-semibold dark:text-white text-black">{title}</h3>
                <p className="dark:text-gray-400 text-black text-sm mb-2">{date}</p>
                <p className="dark:text-gray-300 text-black text-sm">{description}</p>
                <a href="#" className="dark:text-dim-red-400 dark:hover:text-dim-red-300 text-black dark:text-white dark:font-normal font-medium text-sm mt-2 inline-block">
                    Read more
                </a>
            </div>
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired
}

export default MovieCard;