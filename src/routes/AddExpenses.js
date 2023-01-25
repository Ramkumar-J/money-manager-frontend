import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
function AddExpenses() {
  const [expenses, setNewexpenses] = useState([]);
  let totalexpense = 0;
  let formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      expense: "",
      expensetype: "",
      price: "",
      description: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.date) {
        errors.date = "Date is required";
      }
      if (!values.time) {
        errors.time = "Time is required";
      }
      if (!values.expense) {
        errors.expense = "Expense is required";
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
          "https://money-manager-backend-one.vercel.app/AddExpenses",
          values,
          {
            headers: {
              Authorization: window.localStorage.getItem("myapptoken"),
            },
          }
        );
      } catch (error) {
        console.log(error);
        alert("something went wrong");
      }
    },
  });

  useEffect(() => {
    async function fetchExpensedata() {
      try {
        let expensedata = await axios.get(
          "https://money-manager-backend-one.vercel.app/AddExpenses",
          {
            headers: {
              Authorization: window.localStorage.getItem("myapptoken"),
            },
          }
        );
        setNewexpenses(expensedata.data);
      } catch (error) {
        console.log(error);
        alert("something went wrong");
      }
    }
    fetchExpensedata();
  });

  let handledelete = async (id) => {
    try {
      let ask = window.confirm(
        "Are you sure, do you want to delete this data?"
      );
      if (ask) {
        await axios.delete(
          `https://money-manager-backend-one.vercel.app/AddExpenses/${id}`,
          {
            headers: {
              Authorization: window.localStorage.getItem("myapptoken"),
            },
          }
        );
      }
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };

  return (
    <div className="container">
      <h2 className="mt-3 fw-bolder text-center text-danger fst-italic">
        Add Your Expenses
      </h2>
      <div className="row mt-3">
        <div className="col-lg-12">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xl-6">
                <label>Date</label>
                <input
                  className="form-control"
                  type={"date"}
                  name="date"
                  onChange={formik.handleChange}
                  value={formik.values.date}
                ></input>
                <span style={{ color: "red" }}>{formik.errors.date}</span>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xl-6">
                <label>Time</label>
                <input
                  className="form-control"
                  type={"time"}
                  name="time"
                  onChange={formik.handleChange}
                  value={formik.values.time}
                ></input>
                <span style={{ color: "red" }}>{formik.errors.time}</span>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xl-6">
                <label>Expense</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  name="expense"
                  onChange={formik.handleChange}
                  value={formik.values.expense}
                >
                  <option selected>None</option>
                  <option>Cash</option>
                  <option>Account</option>
                </select>
                <span style={{ color: "red" }}>{formik.errors.expense}</span>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xl-6">
                <label>Expense Type</label>
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
                  <option>Education</option>
                  <option>Health</option>
                  <option>Savings</option>
                  <option>Others</option>
                </select>
                <span style={{ color: "red" }}>
                  {formik.errors.expensetype}
                </span>
              </div>
              <div className="row mt-2">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xl-6">
                  <label>Price(₹)</label>
                  <input
                    className="form-control"
                    type={"number"}
                    name="price"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                  ></input>
                  <span style={{ color: "red" }}>{formik.errors.price}</span>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xl-6">
                  <label>Description</label>
                  <input
                    className="form-control"
                    type={"text"}
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                  ></input>
                </div>
              </div>
              <div className="row">
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
      <div className="row mt-3">
        <div class="col-lg-12 table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Expense</th>
                <th scope="col">Expense type</th>
                <th scope="col">Price(₹)</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {expenses.length > 0 ? (
              <tbody>
                {expenses.map((e) => {
                  totalexpense += e.price;
                  return (
                    <tr>
                      <td>{e.date}</td>
                      <td>{e.time}</td>
                      <td>{e.expense}</td>
                      <td>{e.expensetype}</td>
                      <td>{e.price}</td>
                      <td>{e.description}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger ms-2"
                          onClick={() => handledelete(e._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <p>Loading...</p>
            )}
          </table>
        </div>
        <p className="fw-bold">Total - ₹{totalexpense}</p>
      </div>
    </div>
  );
}

export default AddExpenses;
