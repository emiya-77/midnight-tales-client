

const NoBrandProductMessage = () => {
    return (
        <div className="relative w-full flex justify-center">
            <div className="absolute mt-40 bg-black p-10 rounded-lg bg-opacity-80 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-3xl tracking-widest font-light text-white mb-4">
                        No Movies have been added yet for this brand.
                    </h2>
                    <h2 className="text-5xl tracking-wider text-white">
                        Updates Are Coming Soon...
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default NoBrandProductMessage;