import { useContext } from "react";
import { DataContext } from "../../data/DataProvider/DataProvider";
import BrandCard from "./BrandCard";


const BrandSection = () => {

    const { brandList } = useContext(DataContext);

    return (
        <div>
            <div className="w-full flex justify-center items-center">
                <h2 className="text-7xl tracking-widest text-center text-white bg-black bg-opacity-60 pt-4 px-12 pb-6 rounded-lg inline-block mb-20">Our Brands</h2>
            </div>
            <div className="w-full px-20 lg:px-96 grid grid-cols-1 lg:grid-cols-2 gap-y-8">
                {
                    brandList?.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default BrandSection;