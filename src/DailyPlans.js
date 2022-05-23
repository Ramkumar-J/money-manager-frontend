import axios from "axios";
import React, { useEffect, useState } from "react";

function DailyPlans() {
  const [dailyplans, setDailyplans] = useState([]);
  useEffect(() => {
    async function fetchDailydata() {
      try {
        let daily = await axios.get(
          "https://moneymanager-nodeapp.herokuapp.com/DailyPlans"
        );
        setDailyplans(daily.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDailydata();
  });
// Note
  let handledelete = async (id) => {
    try {
      let ask = window.confirm(
        "Are you sure, do you want to delete this data?"
      );
      if (ask) {
        await axios.delete(
          `https://moneymanager-nodeapp.herokuapp.com/DailyPlans/${id}`
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
        <h6 className="m-0 font-weight-bold text-primary">Daily list</h6>
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
                <th>Date</th>
                <th>Income</th>
                <th>Expense</th>
                <th>Expense Type</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dailyplans.map((dailyplan) => {
                return (
                  <tr>
                    <td>{dailyplan.date}</td>
                    <td>{dailyplan.income}</td>
                    <td>{dailyplan.expense}</td>
                    <td>{dailyplan.expensetype}</td>
                    <td>{dailyplan.price}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger mx-1"
                        type="button"
                        onClick={() => handledelete(dailyplan._id)}
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

export default DailyPlans;
