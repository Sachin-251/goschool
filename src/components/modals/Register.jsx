import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import styles from './modals.module.css';
import toast from 'react-hot-toast';


const Register = ({closeModal}) => {

    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState("");

    const {
        register,
        trigger,
        handleSubmit,
        setError,
        formState: {errors}
    } = useForm({
        defaultValues: {
            schoolName: "",
            schoolAddress: "",
            city: "",
            state: "",
            email: "",
            phone: "",
        },
        mode: "onChange",
    });

    const onSubmit = async(data) => {
        const isValid = await trigger();
        if(!isValid){
            data.preventDefault();
        }
        const formData = new FormData();

        formData.append("file", image);
        data = {...data, picture: new Date().getTime() + image?.name};
        formData.append("school", JSON.stringify(data));
        console.log(formData);
        try {
           const res = await fetch('/api/schools', {
            method: "POST",
            body: formData,
           })
           if(!res.ok){
            throw new Error("failed");
           }
           toast.success("School Registered Successfully");
           closeModal();
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='w-full h-full'>
        <h1 className='text-3xl text-center font-bold text-green-500'>REGISTER</h1>
        <form className={`${styles.formStyle} flex flex-col py-4 mt-6`} onSubmit={handleSubmit(onSubmit)}>

            <input type="text" className={`p-1 rounded-md border-2 border-green-500`} placeholder='School name' {...register("schoolName", {required: true, maxLength: 150})} />
            {errors.schoolName && (
                <p className="text-red-500 mt-1">
                    {errors.schoolName.type === "required" && "This field is required."}
                    {errors.schoolName.type === "maxLength" && "Max length is 100 chars."}
                </p>
            )}

            <textarea name="schoolAddress" className='p-1 mt-8 rounded-md border-2 border-green-500' placeholder='Address of School' {...register("schoolAddress", {required: true, maxLength: 300})} />
            {errors.schoolAddress && (
                <p className="text-red-500 mt-1">
                    {errors.schoolAddress.type === "required" && "This field is required."}
                    {errors.schoolAddress.type === "maxLength" && "Max length is 100 chars."}
                </p>
            )}

            <div className='flex items-center justify-center gap-4 mt-8'>
                <div className='basis-1/2'>
                    <input type="text" className='p-1 w-full rounded-md border-2 border-green-500 ' placeholder='City' {...register("city", {required: true, maxLength: 60})} />
                    {errors.city && (
                        <p className="text-red-500 mt-1">
                            {errors.city.type === "required" && "This field is required."}
                            {errors.city.type === "maxLength" && "Max length is 60 chars."}
                        </p>
                    )}
                </div>
                
                <div className='basis-1/2'>
                    <input type="text" className='p-1 w-full rounded-md border-2 border-green-500' placeholder='State' {...register("state", {required: true, maxLength: 60})} />
                    {errors.state && (
                        <p className="text-red-500 mt-1">
                            {errors.state.type === "required" && "This field is required."}
                            {errors.state.type === "maxLength" && "Max length is 60 chars."}
                        </p>
                    )}
                </div>
                
            </div>

            <input type="text" className='p-1 rounded-md border-2 border-green-500 mt-8' placeholder='Email' {...register("email", {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,})}/>
            {errors.email && (
                <p className="text-red-500">
                    {errors.email.type === "required" && "This field is required."}
                    {errors.email.type === "pattern" && "Please type a valid email."}
                    {errors.email.message}
                </p>
            )}

            <input type="number" className='p-1 rounded-md border-2 border-green-500 mt-8' placeholder='Contact Number (Do not write country code)' {...register("phone", {required: true, maxLength: 13, minLength: 10, pattern: /^[0-9]{10}$/i})} />
            {errors.phone && (
                <p className="text-red-500 mt-1">
                    {errors.phone.type === "required" && "This field is required."}
                    {errors.phone.type === "maxLength" && "Max length is 13 chars."}
                    {errors.phone.type === "minLength" && "Min length is 10 chars."}
                    {errors.phone.type === "pattern" && "Only numbers are allowed."}
                </p>
            )}
            
            <div className='flex flex-col min-[460px]:flex-row justify-between items-center mt-14 gap-4'>
                <input type="file" id='image' style={{display: "none"}} onChange={(e) => setImage(e.target.files[0])} />
                <button type='button' className='py-1 px-3 w-full min-[460px]:w-fit bg-green-500 border-2 border-blue-400 font-semibold hover:bg-blue-400 transition duration-700 rounded-md text-white'>
                    <label htmlFor='image' style={{cursor: "pointer"}} className='inline-flex justify-center items-center gap-2'>
                        Upload Image <FaArrowUp />
                    </label>
                </button>

                <button type="submit" className='py-1 px-10 w-full min-[460px]:w-fit bg-green-500 border-2 border-blue-400 font-semibold hover:bg-blue-400 transition duration-700 rounded-md inline-flex justify-center items-center gap-2 text-white'>Submit <FaArrowRight /></button>
            </div>
        </form>
    </div>
  )
}

export default Register