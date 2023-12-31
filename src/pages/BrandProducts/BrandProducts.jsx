import { useLoaderData, useParams } from "react-router-dom";
import BrandProductCard from "./BrandProductCard";
import BrandBanner from "../../components/Banner/BrandBanner";
import NoBrandProductMessage from "./NoBrandProductMessage";


const BrandProducts = () => {

    const brandProducts = useLoaderData();
    const brandP = useParams();

    console.log('brandProducts:', brandProducts);

    if (!brandProducts) {
        return <span className="loading loading-dots loading-lg block max-w-sm mx-auto py-48"></span>;
    }
    console.log(brandProducts.length);

    const filteredBrandProducts = brandProducts.filter(product => product.brand.toLowerCase() == brandP.brand);

    return (
        <div className="w-full bg-cover bg-center bg-fixed" style={{
            backgroundImage: `url(/img/product-bg1.jpg)`
        }}>
            <BrandBanner></BrandBanner>
            {
                (filteredBrandProducts.length === 0) ? <NoBrandProductMessage></NoBrandProductMessage> : ''
            }
            <div className="lg:container lg:mx-auto min-h-[551px]">
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-20 gap-8">
                        {
                            filteredBrandProducts?.map(product => <BrandProductCard key={product._id} product={product}></BrandProductCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandProducts;