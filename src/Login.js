import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      }
      if (!values.password) {
        errors.password = "Required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      let logindata = await axios.post(
        "https://money-manager-backend-one.vercel.app/login",
        values
      );
      window.localStorage.setItem("myapptoken", logindata.data.jwtToken);
      navigate("/home");
    },
  });
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-lg-12">
          <h1 className="text-center text-primary fw-bold fst-italic">
            Login and Go🏃‍♂️
          </h1>
        </div>
      </div>
      <div className="row mt-1">
        <div className="col-lg-6">
          <img
            className="img-fluid bg-secondary"
            src="https://static.vecteezy.com/system/resources/previews/005/006/044/non_2x/risk-management-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
          ></img>
        </div>

        <div className="col-lg-6 d-flex  justify-content-center align-items-center fs-6">
          <form onSubmit={formik.handleSubmit}>
            <div className="row mt-3">
              <div className="col-lg-12">
                <label for="email">Email Address</label>
                <input
                  className="form-control border-primary mt-1 box"
                  type={"email"}
                  id="email"
                  placeholder="Email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                ></input>
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </div>
            </div>
            <div className="row mt-3 mb-0">
              <div className="col-lg-12">
                <label for="password">Password</label>
                <input
                  className="form-control  border-primary mt-1 box"
                  type={"password"}
                  id="password"
                  placeholder="Password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                ></input>
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}
              </div>
            </div>
            <div className="row mt-0">
              <div className="col-lg-12">
                <sub className="text-dark">
                  Are you Not Registered{" "}
                  <Link className="text-danger fs-5" to="/register">
                    Register
                  </Link>
                </sub>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-12">
                <input
                  className="form-control btn btn-success btn-sm box"
                  type={"submit"}
                  value="Submit"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;