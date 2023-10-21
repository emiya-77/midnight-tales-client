

const NewsLetter = () => {
    return (
        <section className="w-full dark:divide-x-2 divide-x-2 divide-blue-400 dark:bg-black bg-blue-400 bg-opacity-50 backdrop-blur-sm py-20 mb-40 flex">
            <div className="w-1/3 flex justify-center items-center">
                <div className="w-[320px] h-[320px] rounded-full overflow-hidden flex justify-center items-center">
                    <img className="w-full h-full object-cover" src="/img/home-bg1.jpg" alt="" />
                </div>
            </div>
            <div className="w-2/3 container mx-auto px-4 flex justify-center items-center">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold dark:text-white text-black mb-4">
                        Subscribe to our Newsletter
                    </h2>
                    <p className="dark:text-gray-300 text-black mb-6">
                        Stay updated with the latest Entertainment and Movie events, new Shows, and
                        updates from MidnightTales.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-60 bg-transparent border-b border-gray-500 dark:text-white text-black dark:placeholder-gray-300 placeholder-gray-600 py-2 focus:outline-none dark:focus:border-red-500 focus:border-blue-600"
                        />
                        <button className="dark:bg-red-500 bg-blue-500 dark:hover:bg-red-600 hover:bg-blue-600 text-white py-2 px-4 transition duration-300 transform hover:scale-105">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;