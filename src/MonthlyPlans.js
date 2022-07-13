import React, { useEffect, useState } from "react";
import axios from "axios";

function MonthlyPlans() {
  const [monthlyplans, setMonthlyplans] = useState([]);
  useEffect(() => {
    async function fetchMonthlydata() {
      try {
        let monthly = await axios.get(
          "https://moneymanager-nodeapp.herokuapp.com/MonthlyPlans",
          {
            headers:{
              Authorization:window.localStorage.getItem("myapptoken")
            }
          }
        );
        setMonthlyplans(monthly.data);
      } catch (error) {
        console.log(error);
        alert("Something went wrong")
      }
    }
    fetchMonthlydata();
  });

  let handledelete = async (id) => {
    try {
      let ask = window.confirm(
        "Are you sure, do you want to delete this data?"
      );
      if (ask) {
        await axios.delete(
          `https://moneymanager-nodeapp.herokuapp.com/MonthlyPlans/${id}`,
          {
            headers:{
              Authorization:window.localStorage.getItem("myapptoken")
            }
          }
        );
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong")
    }
  };
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
      <h4 className="m-0 fw-bold text-primary">Monthly list</h4>
      </div>
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
                <th>month</th>
                <th>Budget</th>
                <th>Expense Type</th>
                <th>Price</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {monthlyplans.map((monthlyplan) => {
                return (
                  <tr>
                    <td>{monthlyplan.month}</td>
                    <td>{monthlyplan.income}</td>
                    <td>{monthlyplan.expensetype}</td>
                    <td>{monthlyplan.price}</td>
                    <td>{monthlyplan.description}</td>
                    <td>
                      <button
                        className="btn btn-sm mx-1"
                        type="button"
                        onClick={() => handledelete(monthlyplan._id)}
                      >
                        <img className="img-fluid" src="https://img.icons8.com/windows/20/delete-forever.png" alt="delete-icon"></img>
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

export default MonthlyPlans;
