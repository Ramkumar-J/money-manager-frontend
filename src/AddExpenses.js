import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
function AddExpenses() {
  let formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      expensetype: "",
      price: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.date) {
        errors.date = "Date is required";
      }
      if (!values.time) {
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
          "https://moneymanager-nodeapp.herokuapp.com/AddExpenses",
          values
        );
      } catch (error) {
        console.log(error);
      }
    },
  });

  const [expenses, setNewexpenses] = useState([]);
  useEffect(() => {
    async function fetchExpensedata() {
      try {
        let expensedata = await axios.get(
          "https://moneymanager-nodeapp.herokuapp.com/AddExpenses"
        );
        setNewexpenses(expensedata.data);
      } catch (error) {
        console.log(error);
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
          `https://moneymanager-nodeapp.herokuapp.com/AddExpenses/${id}`
        );
        alert("data deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h3 className="mt-3 fw-bolder">Add Your Expenses</h3>
      <div className="row mt-3">
        <div className="col-lg-6">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
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
              <div className="col-lg-6">
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

        <div class="col-lg-6">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Expense type</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((e) => {
                return (
                  <tr>
                    <td>{e.date}</td>
                    <td>{e.time}</td>
                    <td>{e.expensetype}</td>
                    <td>{e.price}</td>
                    <td>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => handledelete(e._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AddExpenses;
