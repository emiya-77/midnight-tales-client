import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider/AuthProvider";
import MyCartCard from "./MyCartCard";
import { DataContext } from "../../data/DataProvider/DataProvider";


const MyCart = () => {

    const { user } = useContext(AuthContext);
    const { userCartList } = useContext(DataContext);
    const productsList = useLoaderData();
    const [userProduct, setUserProduct] = useState([]);

    useEffect(() => {
        fetch(`https://midnight-tales-server.vercel.app/user-shows/${user.uid}`)
            .then(res => res.json())
            .then(data => setUserProduct(data.updatedUserCartList))
    }, [user, userCartList])

    console.log('productsList: ', productsList);
    console.log('userProduct: ', userProduct);


    if (!productsList) {
        return <span className="loading loading-dots loading-lg block max-w-sm mx-auto py-48"></span>;
    }

    const filteredProductCartList = productsList.filter(product => userProduct.includes(product._id));

    console.log('f: ', filteredProductCartList);

    return (
        <div className="w-full pt-40 bg-cover bg-center bg-fixed" style={{
            backgroundImage: `url(/img/product-bg1.jpg)`
        }}>
            <div className="lg:container lg:mx-auto min-h-[551px]">
                <div>
                    <h2 className="text-4xl text-white md:text-5xl font-light text-center mb-6 tracking-wider">My Cart</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 md:p-20 gap-8">
                        {
                            filteredProductCartList?.map(product => <MyCartCard key={product._id} product={product}></MyCartCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;