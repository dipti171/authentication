import React, { useState } from 'react' 
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import toast from 'react-hot-toast';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
import AxiosToastError from '../utils/AxiosToastError';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [data, setData] = useState({
        full_name: "",
        email_address: "",
        password: "",
        phone_number: "",
        company_name: "",
        isAgency: null, // Add isAgency field
    });

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData((prev) => ({
            ...prev,
            [name]: name === 'isAgency' ? value === 'true' : value, // Convert isAgency to boolean
        }));
    };

    const valideValue = Object.values(data).every(el => el !== null && el !== "");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Axios({
                ...SummaryApi.register,
                data: data,
            });

            if (response.data.error) {
                toast.error(response.data.message);
            }

            if (response.data.success) {
                toast.success(response.data.message);
                setData({
                    full_name: "",
                    email_address: "",
                    password: "",
                    phone_number: "",
                    company_name: "",
                    isAgency: null,
                });
                navigate("/login");
            }
        } catch (error) {
            AxiosToastError(error);
        }
    };

    return (
        <section className='w-full container mx-auto px-2'>
            <div className='bg-white my-4 w-full max-w-lg mx-auto rounded p-7'>
                <p>Create your PopX account</p>

                <form className='grid gap-4 mt-6' onSubmit={handleSubmit}>
                    <div className='grid gap-1'>
                        <label htmlFor='name'> Full Name :</label>
                        <input
                            type='text'
                            id='name'
                            autoFocus
                            className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
                            name='full_name'
                            value={data.full_name}
                            onChange={handleChange}
                            placeholder='Enter your full name'
                        />
                    </div>
                    <div className='grid gap-1'>
                        <label htmlFor='phone_number'> Phone number :</label>
                        <input
                            type='tel'
                            id='phone_number'
                            className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
                            name='phone_number'
                            value={data.phone_number}
                            onChange={handleChange}
                            placeholder='Enter your phone number'
                        />
                    </div>
                    <div className='grid gap-1'>
                        <label htmlFor='email_address'>Email address :</label>
                        <input
                            type='email'
                            id='email_address'
                            className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
                            name='email_address'
                            value={data.email_address}
                            onChange={handleChange}
                            placeholder='Enter your email address'
                        />
                    </div>
                    <div className='grid gap-1'>
                        <label htmlFor='password'>Password :</label>
                        <div className='bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-200'>
                            <input
                                type={showPassword ? "text" : "password"}
                                id='password'
                                className='w-full outline-none'
                                name='password'
                                value={data.password}
                                onChange={handleChange}
                                placeholder='Enter your password'
                            />
                            <div onClick={() => setShowPassword((prev) => !prev)} className='cursor-pointer'>
                                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                            </div>
                        </div>
                    </div>
                    <div className='grid gap-1'>
                        <label htmlFor='company_name'> Company name :</label>
                        <input
                            type='text'
                            id='company_name'
                            className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
                            name='company_name'
                            value={data.company_name}
                            onChange={handleChange}
                            placeholder='Enter your company name'
                        />
                    </div>
                    <div className='grid gap-1'>
                        <label>Are you an agency?</label>
                        <div className='flex gap-4'>
                            <label className='flex items-center'>
                                <input
                                    type='radio'
                                    name='isAgency'
                                    value='true'
                                    checked={data.isAgency === true}
                                    onChange={handleChange}
                                    className='mr-2'
                                />
                                Yes
                            </label>
                            <label className='flex items-center'>
                                <input
                                    type='radio'
                                    name='isAgency'
                                    value='false'
                                    checked={data.isAgency === false}
                                    onChange={handleChange}
                                    className='mr-2'
                                />
                                No
                            </label>
                        </div>
                    </div>
                    <button
                        disabled={!valideValue}
                        className={`${valideValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"} text-white py-2 rounded font-semibold my-3 tracking-wide`}
                    >
                        Create Account
                    </button>
                </form>

                {/* <p>
                    Already have an account? <Link to={"/login"} className='font-semibold text-green-700 hover:text-green-800'>Login</Link>
                </p> */}
            </div>
        </section>
    );
};

export default Register;
