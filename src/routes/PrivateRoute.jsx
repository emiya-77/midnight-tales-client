import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-dots loading-lg block max-w-sm mx-auto py-48"></span>;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivateRoute;