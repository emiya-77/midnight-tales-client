import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {

    const { image, brandTitle, brandDescription, brandId } = brand || {};

    return (
        <div>
            <Link to={`/brand-products/${brandId}`}>
                <div className="cursor-pointer bg-gray-900 bg-opacity-80 h-full text-white rounded-lg shadow-md p-4 m-4 transform transition-transform hover:scale-105">
                    <div className="overflow-hidden">
                        <img src={image} alt={brandTitle} className="w-full h-72 object-cover transform transition-transform hover:scale-95" />
                    </div>
                    <div className="p-4">
                        <h3 className="text-2xl font-bold mb-2">{brandTitle}</h3>
                        <p className="text-sm">{brandDescription}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

BrandCard.propTypes = {
    brand: PropTypes.object.isRequired
}

export default BrandCard;