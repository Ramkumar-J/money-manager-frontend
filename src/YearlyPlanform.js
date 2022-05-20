import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function YearlyPlanform() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      year: "",
      income: "",
      expense: "",
      expensetype: "",
      price: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.year) {
        errors.year = "Year is required";
      }
      if (!values.income) {
        errors.income = "Income is required";
      }
      if (!values.expense) {
        errors.time = "Time is required";
      }
      if (!values.expensetype) {
        errors.expensetype = "Expense type is required";
      }
      if (!values.price) {
        errors.price = "Price is required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://moneymanager-nodeapp.herokuapp.com/YearlyPlanform",
          values
        );
        navigate("/YearlyPlans");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="container">
      <h2 className="mt-3 fw-bolder text-center  text-danger fst-italic">
        Yearly Budget
      </h2>
      <div className="row mt-3">
        <div className="col-lg-12">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <label>Year</label>
                <input
                  className="form-control"
                  type={"number"}
                  name="year"
                  onChange={formik.handleChange}
                  value={formik.values.year}
                ></input>
                <span style={{ color: "red" }}>{formik.errors.year}</span>
              </div>
              <div className="col-lg-6">
                <label>Income</label>
                <input
                  className="form-control"
                  type={"number"}
                  name="income"
                  onChange={formik.handleChange}
                  value={formik.values.income}
                ></input>
                <span style={{ color: "red" }}>{formik.errors.income}</span>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <label>Expense</label>
                <input
                  className="form-control"
                  type={"number"}
                  name="expense"
                  onChange={formik.handleChange}
                  value={formik.values.expense}
                ></input>
                <span style={{ color: "red" }}>{formik.errors.expense}</span>
              </div>
              <div className="col-lg-6">
                <label>Expense type</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  name="expensetype"
                  onChange={formik.handleChange}
                  value={formik.values.expensetype}
                >
                  <option selected>None</option>
                  <option>Food</option>
                  <option>Fuel</option>
                  <option>Cloths</option>
                  <option>Electronics</option>
                  <option>Entertainment</option>
                  <option>Savings</option>
                </select>
                <span style={{ color: "red" }}>
                  {formik.errors.expensetype}
                </span>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6">
                  <label>Price</label>
                  <input
                    className="form-control"
                    type={"number"}
                    name="price"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                  ></input>
                  <span style={{ color: "red" }}>{formik.errors.price}</span>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-12">
                  <input
                    className="btn btn-primary mt-2"
                    type={"submit"}
                    value="Submit"
                  ></input>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default YearlyPlanform;
