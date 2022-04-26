import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";

function AddIncomes() {
  let formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      income: "",
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
        alert("data deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h3 className="mt-3 fw-bolder">Add Your Incomes</h3>
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
                <th scope="col">Income</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {incomes.map((e) => {
                return (
                  <tr>
                    <td>{e.date}</td>
                    <td>{e.time}</td>
                    <td>{e.income}</td>
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

export default AddIncomes;
