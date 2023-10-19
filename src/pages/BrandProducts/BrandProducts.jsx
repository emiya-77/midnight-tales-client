import { useLoaderData, useParams } from "react-router-dom";
import BrandProductCard from "./BrandProductCard";


const BrandProducts = () => {

    const brandProducts = useLoaderData();

    const brandP = useParams();

    const filteredBrandProducts = brandProducts.filter(product => product.brand.toLowerCase() == brandP.brand);

    return (
        <div className="w-full pt-40 bg-cover bg-center bg-fixed" style={{
            backgroundImage: `url(/img/product-bg1.jpg)`
        }}>
            <div className="lg:container lg:mx-auto min-h-[551px]">
                <div className="">
                    <div className="grid grid-cols-3 p-20">
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