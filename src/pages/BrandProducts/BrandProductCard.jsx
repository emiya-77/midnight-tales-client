import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandProductCard = ({ product }) => {

    const { _id, name, brand, price, type, image, rating } = product || {};

    return (
        <>
            <div className="max-w-sm bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg relative group bg-opacity-80 backdrop-blur-sm">
                <div className="h-[250px] relative pb-2/3 group-hover:transform group-hover:scale-105 transition-transform duration-300 flex justify-center items-center">
                    <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="pb-2">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{name}</div>
                        <p className="text-sm text-gray-400">{brand}</p>
                        <p className="text-sm text-gray-400">{type}</p>
                    </div>
                    <div className="px-6 flex justify-between items-center">
                        <span className="text-xl font-bold">${price}</span>
                        <div className="flex items-center space-x-1">
                            <span className="text-yellow-400">★</span>
                            <span className="text-gray-400">{rating}</span>
                        </div>
                    </div>
                    <div className="px-6 py-4 flex justify-between">
                        <Link to={`/product-details/${_id}`}>
                            <button className="bg-red-600 hover:bg-red-800 text-white font-semibold tracking-wider py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Details
                            </button>
                        </Link>
                        <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold tracking-wider py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

BrandProductCard.propTypes = {
    product: PropTypes.object.isRequired
}

export default BrandProductCard;