import Swal from "sweetalert2";
import { useState } from "react";

const AddProduct = () => {
    const [selectedBrand, setSelectedBrand] = useState("disney"); // Set the default brand

    const handleAddProduct = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const description = form.description.value;

        const newShow = { name, brand: selectedBrand, price, type, rating, image, description };
        console.log(newShow);

        fetch("https://midnight-tales-server.vercel.app/show", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newShow),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Show Added Successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                    form.reset();
                }
            });
    };

    return (
        <div>
            <div
                className="w-full h-[700px] md:h-screen pt-32 pb-10 md:pt-32 flex justify-center items-center bg-cover bg-center px-3"
                style={{ backgroundImage: `url(/img/add-product-bg1.jpg)`, backgroundSize: "cover" }}
            >
                <div className="min-h-96 lg:w-[900px] mx-auto md:min-h-[400px] md:w-[400px] bg-gray-900 bg-opacity-80 shadow-5xl backdrop-blur-sm px-2 pb-5 md:pb-5">
                    <form
                        onSubmit={handleAddProduct}
                        className="h-full w-full flex flex-col justify-start items-center p-2 md:py-5 md:px-14 mb-3 md:mb-5"
                    >
                        <div className="text-4xl font-extralight tracking-widest text-white my-10">Add a Show</div>
                        <div className="h-[350px] md:h-[300px] flex flex-col justify-start items-center md:gap-12 w-full lg:mb-20">
                            <div className="w-full flex flex-col md:flex-row gap-12">
                                <input className="input-text" type="text" name="name" placeholder="Name" required />
                                <select
                                    className="select-box"
                                    name="brand"
                                    value={selectedBrand}
                                    onChange={(e) => setSelectedBrand(e.target.value)}
                                >
                                    <option value="disney">Disney</option>
                                    <option value="warner">Warner</option>
                                    <option value="universal">Universal</option>
                                    <option value="netflix">Netflix</option>
                                    <option value="sony">Sony</option>
                                    <option value="hbo">HBO</option>
                                </select>
                            </div>
                            <div className="w-full flex flex-col md:flex-row gap-12">
                                <input className="input-text" type="text" name="type" placeholder="Type" required />
                                <input className="input-text" type="text" name="rating" placeholder="Rating" />
                            </div>
                            <div className="w-full flex flex-col md:flex-row gap-12">
                                <input className="input-text" type="text" name="price" placeholder="Price" required />
                                <input className="input-text" type="text" name="image" placeholder="Image URL" required />
                            </div>
                            <div className="w-full flex gap-12">
                                <input className="input-text" type="text" name="description" placeholder="Short Description" required />
                            </div>
                        </div>
                        <input
                            className="cursor-pointer text-xl font-medium px-5 py-[6px] bg-white bg-opacity-80 border-2 hover:bg-opacity-0 hover:border-2 hover:text-white transition duration-300 ease-in-out"
                            type="submit"
                            value="Add Show"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
