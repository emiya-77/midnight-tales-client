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
        fetch(`https://midnight-tales-server-7jy6jc73m-golam-kibrias-projects.vercel.app/user-shows/${user.uid}`)
            .then(res => res.json())
            .then(data => setUserProduct(data.updatedUserCartList))
    }, [user, userCartList])

    const filteredProductCartList = productsList.filter(product => userProduct.includes(product._id));

    console.log('f: ', filteredProductCartList);

    return (
        <div className="w-full pt-40 bg-cover bg-center bg-fixed" style={{
            backgroundImage: `url(/img/product-bg1.jpg)`
        }}>
            <div className="lg:container lg:mx-auto min-h-[551px]">
                <div className="">
                    <div className="grid grid-cols-3 p-20">
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