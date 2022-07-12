import { useFormik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function Register() {
    let navigate=useNavigate();
    let formik=useFormik({
        initialValues:{
            username:"",
            email:"",
            password:"",
        },
        validate:(values) => {
          const errors={};
          if(!values.username){
            errors.username="Required"
          }
          if(!values.email){
            errors.email="Required"
          }
          if(!values.password){
            errors.password="Required"
          }
          return errors;
        },
        onSubmit:async (values) => {
        await axios.post("https://moneymanager-nodeapp.herokuapp.com/register",values);
        navigate("/login");
        }
    })
  return (
    <div className='container'>
        <div className='row mt-2'>
            <div className='col-lg-6'>
                <img className='img-fluid' src="https://static.vecteezy.com/system/resources/previews/005/006/044/non_2x/risk-management-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"></img>
            </div>

            <div className='col-lg-6 d-flex  justify-content-center align-items-center fs-6'>
                <form onSubmit={formik.handleSubmit}>
                <div className='row mt-3'>
                    <div className='col-lg-12'>
                        <label for="username">User Name<sup className='text-danger fs-6'>*</sup></label>
                        <input className='form-control border-primary mt-1 box' type={"text"} id="username" placeholder='Name' name="username" onChange={formik.handleChange} value={formik.values.username}></input>
                        {
                            formik.touched.username && formik.errors.username ? (<div className='text-danger'>{formik.errors.username}</div>) : null
                        }
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-12'>
                        <label for="email">Email Address</label>
                        <input className='form-control border-primary mt-1 box' type={"email"} id="email" placeholder='Email' name="email" onChange={formik.handleChange} value={formik.values.email}></input>
                        {
                            formik.touched.email && formik.errors.email ? (<div className='text-danger'>{formik.errors.email}</div>) : null
                        }
                    </div>
                </div>
                <div className='row mt-3 mb-0'>
                    <div className='col-lg-12'>
                        <label for="password">Password</label>
                        <input className='form-control  border-primary mt-1 box' type={"password"} id="password" placeholder='Password' name="password" onChange={formik.handleChange} value={formik.values.password}></input>
                        {
                            formik.touched.password && formik.errors.password ? (<div className='text-danger'>{formik.errors.password}</div>) : null
                        }
                    </div>
                </div>
                <div className='row mt-0'>
                    <div className='col-lg-12'>
                       <sub className='text-dark'>Are you already Registered <Link className='text-danger fs-6' to="/login">Login</Link></sub>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-12'>
                        <input className='form-control btn btn-success btn-sm box' type={"submit"} value="Submit"></input>
                    </div> 
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register;