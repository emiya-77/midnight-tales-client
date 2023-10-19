import { useContext } from "react";
import { DataContext } from "../../data/DataProvider/DataProvider";
import BrandCard from "./BrandCard";


const BrandSection = () => {

    const { brandList } = useContext(DataContext);

    return (
        <div className="w-full py-20 px-20 lg:px-96 grid grid-cols-1 lg:grid-cols-2 gap-y-8 bg-cover bg-center bg-fixed" style={{
            backgroundImage: `url(/img/home-bg4.jpg)`
        }}>
            {
                brandList?.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
            }
        </div>
    );
};

export default BrandSection;