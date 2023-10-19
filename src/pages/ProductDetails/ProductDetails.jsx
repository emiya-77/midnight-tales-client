import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { DataContext } from "../../data/DataProvider/DataProvider";


const ProductDetails = () => {

    const { user } = useContext(AuthContext);
    const { userCartList, setUserCartList } = useContext(DataContext);
    const productDetail = useLoaderData();
    const { _id, name, brand, price, type, rating, image, description } = productDetail || {};

    console.log(userCartList);

    const handleProductDetailsClick = (productId) => {
        if (!userCartList.includes(productId)) {
            const updatedUserCartList = [...userCartList, productId];
            setUserCartList(updatedUserCartList);

            const userId = user.uid;
            const userCart = { userId, updatedUserCartList }

            fetch(`http://localhost:5000/user-shows/${userId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userCart)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Added To Cart Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Warning!',
                text: 'Already Added To Your Cart',
                icon: 'warning',
                confirmButtonText: 'Cool'
            })
        }
    }

    return (
        <div className="w-full pt-36 bg-cover bg-fixed bg-center" style={{
            backgroundImage: `url(/img/product-bg2.jpg)`
        }}>
            <div className="w-full">
                <div className="relative container mx-auto h-[300px] md:h-[600px] rounded-lg overflow-hidden">
                    <div className="h-full flex items-center justify-center">
                        <img className="w-full h-full object-cover" src={image} alt="" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-black h-32 opacity-50">

                    </div>
                    <div className="absolute bottom-9 left-9">
                        <button onClick={() => handleProductDetailsClick(_id)} className='text-xl font-medium tracking-wider transition transform border-2 border-white hover:bg-white hover:text-blue-950 py-4 px-7 text-white rounded'>Add To Cart</button>
                    </div>
                </div>
                <div className="w-full bg-gray-900 mb-20 mt-20 opacity-90 backdrop-blur-sm pt-10 pb-16">
                    <div className="flex items-center justify-center text-center mb-12">
                        <h1 className="text-5xl text-white lg:text-8xl tracking-widest font-medium">{name.toUpperCase()}</h1>
                    </div>
                    <div className="w-[360px] lg:w-full lg:px-96 mx-auto px-8 ">
                        <p className="text-xl text-white tracking-wide font-light">
                            {description}
                        </p>
                    </div>
                </div>



                <div className="bg-gray-900 text-white min-h-screen">
                    <div className="container mx-auto px-8 py-16 flex flex-col md:flex-row items-center ">
                        <div className="md:w-1/2">
                            <img
                                src="https://i.ibb.co/R7jW91b/2.jpg"
                                alt="Website"
                                className="w-full h-auto rounded-lg transform rotate-2 shadow-2xl hover:rotate-0 hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-8">
                            <h2 className="text-5xl font-normal mb-6">{brand}</h2>
                            <p className="text-9xl font-normal tracking-widest mb-6">
                                {type}
                            </p>
                            <div className="flex justify-center items-start">
                                <p className="text-2xl font-extralight tracking-wider mb-6">Rating:</p>
                                <p className="-mt-5 ml-2 text-yellow-300 text-9xl font-normal tracking-widest mb-6">{rating}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-800 text-white">
                        <div className="container mx-auto px-8 py-16 flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 order-2 md:order-1 md:pl-8">
                                <h2 className="text-2xl font-normal mb-6">Only at the price of...</h2>
                                <p className="text-8xl mb-6">
                                    ${price}
                                </p>
                            </div>
                            <div className="md:w-1/2 order-1 md:order-2">
                                <img
                                    src="https://i.ibb.co/3z1vVgQ/1.jpg"
                                    alt="Events"
                                    className="w-full h-auto rounded-lg transform -rotate-2 shadow-2xl hover:rotate-0 hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductDetails;