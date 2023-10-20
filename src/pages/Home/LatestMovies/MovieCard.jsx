import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
    const { id, title, imageSrc, date, description } = movie || {};
    return (
        <div className="bg-gray-800 bg-opacity-80 shadow-xl overflow-hidden w-80 md:w-96 m-4" data-aos={id % 3 == 1 ? 'fade-right' : id % 3 == 0 ? 'fade-left' : ''} >
            <img src={imageSrc} alt={title} className="w-full h-40 object-cover hover:scale-105 transition-transform" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-gray-400 text-sm mb-2">{date}</p>
                <p className="text-gray-300 text-sm">{description}</p>
                <a href="#" className="text-dim-red-400 hover:text-dim-red-300 text-sm mt-2 inline-block">
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