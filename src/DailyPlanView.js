import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function DailyPlanView(props){
  let params=useParams();
  // let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      expensetype: "",
      price: "",
      description: "",
    },
    validate: (values) => {
      const errors = {};
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
          "https://moneymanager-nodeapp.herokuapp.com/DailyPlanView",
          values
        );
        // navigate("/DailyPlans");
      } catch (error) {
        console.log(error);
      }
    },
  });
    const[viewDatas,setViewDatas]=useState([]);
    useEffect(() => {
        async function fetchViewdata() {
          try {
            let viewPlan = await axios.get(
              "https://moneymanager-nodeapp.herokuapp.com/DailyPlanView"
            );
            setViewDatas(viewPlan.data);
            // console.log(viewDatas);
          } catch (error) {
            console.log(error);
          }
        }
        fetchViewdata();
      });
      const[view,setView]=useState([]);
      useEffect(() => {
        async function fetchDailydata() {
          try {
            let viewdata = await axios.get(
              `https://moneymanager-nodeapp.herokuapp.com/DailyPlans/${params.id}`
            );
            setView(viewdata.data);
          } catch (error) {
            console.log(error);
          }
        }
        fetchDailydata();
      });
    return(
        <div className="container">
            <h1 className="text-center text-primary mt-3">Daily Budget Plan</h1>
            <div className="row mt-3">
            <div className="offset-2 col-lg-5">
            <p>Date:{view.date}</p>
            <p>Budget:{view.budget}</p>
            <p>Available Balance:100</p>
            <p>Expense:300</p>
            </div>
            {/* <div className="col-lg-5">
            <img className="img-fluid" src="undraw_To_do_list_re_9nt7.png"></img>
            </div> */}
            </div>
            <form onSubmit={formik.handleSubmit}>
            <div className="row mt-3">
            <div className="col-lg-4">
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
            <div className="col-lg-4">
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
            <div className="col-lg-4">
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
            <div className="row mt-3">
            <div className="col-lg-12">
            <input
                    className="btn btn-primary mt-2"
                    type={"submit"}
                    value="Submit"
                  ></input>
            </div>
            </div>
            </form>
            <div className="row mt-3">
            <div className="col-lg-12">
             <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Expense Type</th>
                <th>Price</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {viewDatas.map((viewData) => {
                 return (
                  <tr>
                    {/* <td>{dailyplan.date}</td>
                    <td>{dailyplan.income}</td>
                    <td>{dailyplan.expense}</td>
                    <td>{dailyplan.expensetype}</td>
                    <td>{dailyplan.price}</td> */}
                    <td>{viewData.expensetype}</td>
                    <td>{viewData.price}</td>
                    <td>{viewData.description}</td>
                    <td>
                    {/* <button
                        className="btn btn-sm btn-danger mx-1"
                        type="button"
                        onClick={() => handledelete(dailyplan._id)}
                      >
                        View
                      </button> */}
                      <button
                        className="btn btn-sm btn-danger mx-1"
                        type="button"
                        // onClick={() => handledelete(dailyplan._id)}
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
            </div>
        </div>
    )
}
export default DailyPlanView;