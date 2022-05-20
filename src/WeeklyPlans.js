import React, { useEffect, useState } from "react";
import axios from "axios";

function WeeklyPlans() {
  const [weeklyplans, setweeklyplans] = useState([]);
  useEffect(() => {
    async function fetchWeeklydata() {
      try {
        let weekly = await axios.get(
          "https://moneymanager-nodeapp.herokuapp.com/WeeklyPlans"
        );
        setweeklyplans(weekly.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchWeeklydata();
  });

  let handledelete = async (id) => {
    try {
      let ask = window.confirm(
        "Are you sure, do you want to delete this data?"
      );
      if (ask) {
        await axios.delete(
          `https://moneymanager-nodeapp.herokuapp.com/WeeklyPlans/${id}`
        );
        alert("data deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Weekly list</h6>
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
                <th>From Date</th>
                <th>To Date</th>
                <th>Income</th>
                <th>Expense</th>
                <th>Expense Type</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {weeklyplans.map((weeklyplan) => {
                return (
                  <tr>
                    <td>{weeklyplan.fromdate}</td>
                    <td>{weeklyplan.todate}</td>
                    <td>{weeklyplan.income}</td>
                    <td>{weeklyplan.expense}</td>
                    <td>{weeklyplan.expensetype}</td>
                    <td>{weeklyplan.price}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger mx-1"
                        type="button"
                        onClick={() => handledelete(weeklyplan._id)}
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

export default WeeklyPlans;
