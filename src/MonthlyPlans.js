import React, { useEffect, useState } from "react";
import axios from "axios";

function MonthlyPlans() {
  const [monthlyplans, setMonthlyplans] = useState([]);
  useEffect(() => {
    async function fetchMonthlydata() {
      try {
        let monthly = await axios.get(
          "https://moneymanager-nodeapp.herokuapp.com/MonthlyPlans"
        );
        setMonthlyplans(monthly.data);
      } catch (error) {
        console.log(error);
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
          `https://moneymanager-nodeapp.herokuapp.com/MonthlyPlans/${id}`
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
        <h6 className="m-0 font-weight-bold text-primary">Monthly list</h6>
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
                <th>Income</th>
                <th>Expense</th>
                <th>Expense Type</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {monthlyplans.map((monthlyplan) => {
                return (
                  <tr>
                    <td>{monthlyplan.month}</td>
                    <td>{monthlyplan.income}</td>
                    <td>{monthlyplan.expense}</td>
                    <td>{monthlyplan.expensetype}</td>
                    <td>{monthlyplan.price}</td>
                    <td>
                      <button
                        className="btn btn-danger mx-1"
                        type="button"
                        onClick={() => handledelete(monthlyplan._id)}
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

export default MonthlyPlans;
