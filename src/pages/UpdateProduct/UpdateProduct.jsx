import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {

    const { _id, name, brand, price, type, image, rating, description } = useLoaderData();
    const navigate = useNavigate();

    const handleUpdateProduct = (event, id) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const description = form.description.value;

        const updatedShow = { name, brand, price, type, rating, image, description };

        console.log(updatedShow);

        fetch(`http://localhost:5000/show/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedShow)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Show Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                    navigate(`/brand-products/${brand.toLowerCase()}`)
                }
            })
    }

    return (
        <div>
            <div className="w-full h-[700px] md:h-screen pt-32 pb-10 md:pt-32 flex justify-center items-center bg-cover bg-center px-3" style={{ backgroundImage: `url(/img/add-product-bg1.jpg)`, backgroundSize: 'cover' }} >

                <div className="min-h-96 lg:w-[900px] mx-auto md:min-h-[400px] md:w-[400px] bg-gray-900 bg-opacity-80 shadow-5xl backdrop-blur-sm px-2 pb-5 md:pb-5">
                    <form onSubmit={(event) => handleUpdateProduct(event, _id)} className="h-full w-full flex flex-col justify-start items-center p-2 md:py-5 md:px-14 mb-3 md:mb-5">
                        <div className="text-4xl font-extralight tracking-widest text-white my-10">Update Show</div>
                        <div className="h-[350px] md:h-[300px] flex flex-col justify-start items-center md:gap-12 w-full lg:mb-20">
                            <div className="w-full flex flex-col md:flex-row gap-12">
                                <input className="input-text" type="text" name="name" placeholder="Name" defaultValue={name} required />
                                <input className="input-text" type="text" name="brand" placeholder="Brand Name" defaultValue={brand} />
                            </div>
                            <div className="w-full flex flex-col md:flex-row gap-12">
                                <input className="input-text" type="text" name="type" placeholder="Type" defaultValue={type} required />
                                <input className="input-text" type="text" name="rating" placeholder="Rating" defaultValue={rating} />
                            </div>
                            <div className="w-full flex flex-col md:flex-row gap-12">
                                <input className="input-text" type="text" name="price" placeholder="Price" defaultValue={price} required />
                                <input className="input-text" type="text" name="image" placeholder="Image URL" defaultValue={image} required />
                            </div>
                            <div className="w-full flex gap-12">
                                <input className="input-text" type="text" name="description" placeholder="Short Description" defaultValue={description} required />
                            </div>
                        </div>
                        <input className="cursor-pointer text-xl font-medium px-5 py-[6px] bg-white bg-opacity-80 border-2 hover:bg-opacity-0 hover:border-2 hover:text-white transition duration-300 ease-in-out" type="submit" value="Update" />
                    </form>
                </div>

            </div >
        </div>
    );
};

export default UpdateProduct;