import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Home";

function AddIncomes() {
  let totalincome = 0;
  let formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      income: "",
      incometype: "",
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
      if (!values.income) {
        errors.income = "Income is required";
      }
      if (!values.incometype) {
        errors.incometype = "Income type is required";
      }
      if (!values.price) {
        errors.price = "Price is required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://moneymanager-nodeapp.herokuapp.com/AddIncomes",
          values
        );
      } catch (error) {
        console.log(error);
      }
    },
  });

  const [incomes, setNewincomes] = useState([]);
  useEffect(() => {
    async function fetchIncomedata() {
      try {
        let incomedata = await axios.get(
          "https://moneymanager-nodeapp.herokuapp.com/AddIncomes"
        );
        setNewincomes(incomedata.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchIncomedata();
  });

  let handledelete = async (id) => {
    try {
      let ask = window.confirm(
        "Are you sure, do you want to delete this data?"
      );
      if (ask) {
        await axios.delete(
          `https://moneymanager-nodeapp.herokuapp.com/AddIncomes/${id}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  // let showdate=new Date();
  // let displaydate=showdate.getDate()+"/"+(showdate.getMonth()+1)+"/"+showdate.getFullYear();
  return (
    <div className="container">
      <h2 className="mt-3 fw-bolder text-center text-danger fst-italic">
        Add Your Incomes
      </h2>
      <div className="row mt-3">
        <div className="col-lg-12">
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
                <label>Income</label>
                <select
                  className="form-select"
                  name="income"
                  onChange={formik.handleChange}
                  value={formik.values.income}
                >
                  <option selected>None</option>
                  <option>Cash</option>
                  <option>Account</option>
                </select>
                <span style={{ color: "red" }}>{formik.errors.income}</span>
              </div>
              <div className="col-lg-6">
                <label>Income Type</label>
                <select
                  className="form-select"
                  name="incometype"
                  onChange={formik.handleChange}
                  value={formik.values.incometype}
                >
                  <option selected>None</option>
                  <option>Salary</option>
                  <option>Bonus</option>
                  <option>Incentive</option>
                  <option>PF</option>
                </select>
                <span style={{ color: "red" }}>{formik.errors.incometype}</span>
              </div>
              <div className="row mt-2">
                <div className="col-lg-6">
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
                <div className="col-lg-6">
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
                <th scope="col">Income</th>
                <th scope="col">Income Type</th>
                <th scope="col">Price(₹)</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {
              incomes.length > 0 ?
            <tbody>
              {incomes.map((e) => {
                totalincome += e.price;
                return (
                  <tr>
                    <td>{e.date}</td>
                    <td>{e.time}</td>
                    <td>{e.income}</td>
                    <td>{e.incometype}</td>
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
            </tbody> : <p>Loading...</p>
}
          </table>
        </div>
      </div>
      <p className="fw-bold">Total - ₹{totalincome}</p>
    </div>
  );
}

export default AddIncomes;
