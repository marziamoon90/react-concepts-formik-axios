import React, { useState } from 'react';
import { useFormik } from 'formik';

const initialValues={
    name:'',
    email:'',
    channel:''
};
const onSubmit=values=>{
    console.log(values);
};
const validate=values=>{
    let errors={};
        if(!values.name){
            errors.name="Required the field"
        }
        if(!values.email){
            errors.email="Required the field"
        } 
        else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)){
            errors.email="Invalid email format";
        }
        if(!values.channel){
            errors.channel="Required the field"
        }
    return errors;
}

function YoutubeForm ()  {
    const [formData,setFormData]=useState({})

    const formik=useFormik({
        initialValues,
        onSubmit,
        validate
    });

    // console.log('form values',formik.values)

    return (
        <div className="App">
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                id="name" 
                name="name" 
                onChange={formik.handleChange} 
                value={formik.values.name} 
                />

                <label htmlFor="E-mail">E-mail</label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                onChange={formik.handleChange} 
                value={formik.values.email} 
                />
                
                <label htmlFor="Channel">Channel</label>
                <input 
                type="text" 
                id="channel" 
                name="channel" 
                onChange={formik.handleChange} 
                value={formik.values.channel} 
                />

                <button type='submit'>Submit</button>
            </form>

            <div>
                <h1>{formData.name}</h1>
                <h1>{formData.email}</h1>
                <h1>{formData.channel}</h1>
            </div>
        </div>
    );
};
export default YoutubeForm;