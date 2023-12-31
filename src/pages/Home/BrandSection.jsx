import { useContext } from "react";
import { DataContext } from "../../data/DataProvider/DataProvider";
import BrandCard from "./BrandCard";


const BrandSection = () => {

    const { brandList } = useContext(DataContext);

    return (
        <div>
            <div className="w-full flex justify-center items-center">
                <h2 className="text-4xl lg:text-7xl tracking-widest text-center dark:text-white text-black dark:bg-black bg-gray-800 dark:bg-opacity-60 bg-opacity-30 pt-4 px-12 pb-6 rounded-lg inline-block mb-20">Our Brands</h2>
            </div>
            <div className="w-full md:px-4 lg:px-20 xl:px-48 2xl:px-96 grid grid-cols-1 md:grid-cols-2 gap-y-8">
                {
                    brandList?.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default BrandSection;