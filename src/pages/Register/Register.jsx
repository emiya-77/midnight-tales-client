import { useContext, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [success, setSuccess] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState();
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // reset error and success
        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password must be at least 6 characters or longer');
            toast.warn(registerError, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password must have at least one upper case character.');
            toast.warn(registerError, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        } else if (!/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/.test(password)) {
            setRegisterError('Password must have at least one special character.');
            toast.warn(registerError, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }

        // create user in firebase
        createUser(email, password)
            .then(result => {
                setSuccess('User Created Successfully');
                e.target.reset();

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => console.log('profile updated'))

                toast.success('Registration complete!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                navigate('/');
            })
            .catch(error => {
                setRegisterError(error.message);
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
    }

    return (
        <>
            <div className="w-full h-screen flex justify-center pt-20 md:pt-0 bg-cover bg-center items-center" style={{ backgroundImage: `url(/img/add-product-bg1.jpg)`, backgroundSize: 'cover' }} >

                <div className="container min-h-96 w-72 mx-auto md:min-h-[400px] md:w-[400px] bg-gray-900 bg-opacity-80 shadow-5xl backdrop-blur-sm px-2 pb-5 md:pb-5">
                    <form onSubmit={handleRegister} className="h-full flex flex-col justify-start items-center p-2 md:p-5 mb-3 md:mb-5">
                        <div className="text-4xl font-extralight tracking-widest text-white my-5 md:mb-5">Register</div>
                        <input className="input-text mb-3 md:mb-6" type="text" name="name" placeholder="Name" required />
                        <input className="input-text mb-3 md:mb-6" type="text" name="photo" placeholder="Photo URL" />
                        <input className="input-text mb-3 md:mb-6" type="email" name="email" placeholder="E-mail" required />
                        <div className='relative inline-block w-full'>
                            <input className="input-text mb-7 md:mb-14" type={!showPassword ? "password" : "text"} name="password" placeholder="Password" required />
                            <span onClick={() => setShowPassword(!showPassword)} className='absolute text-white font-semibold top-3 right-4 cursor-pointer'>
                                {
                                    !showPassword ? <FaEyeSlash></FaEyeSlash>
                                        : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                        <input className="cursor-pointer text-xl font-medium px-5 py-[6px] bg-white bg-opacity-80 border-2 hover:bg-opacity-0 hover:border-2 hover:text-white transition duration-300 ease-in-out" type="submit" value="Register" />
                    </form>
                    <p className='text-center text-sm ml-2 md:text-base text-white opacity-60 font-extralight tracking-wider'>Already have an account? <Link to='/login' className="font-medium opacity-100 underline">Login</Link></p>
                </div>

            </div >
            <ToastContainer className="z-10"></ToastContainer>
        </>
    );
};

export default Register;