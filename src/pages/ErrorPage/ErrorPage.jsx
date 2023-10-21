import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            {/* <div className="w-full text-3xl h-screen flex justify-center items-center">
                error
            </div> */}
            <div className="h-screen bg-gray-800 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center bg-black bg-opacity-80 px-16 py-16 space-y-2 rounded-lg">
                    <h1 className="text-4xl font-semibold text-center text-gray-200">
                        404 - Page Not Found
                    </h1>
                    <p className="text-lg text-gray-500 text-center">
                        Sorry, the page you are looking for doesn&apos;t exist.
                    </p>
                    <Link to="/" >
                        <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">
                            Go Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;