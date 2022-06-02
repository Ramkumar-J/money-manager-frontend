import React, { useEffect, useState } from "react";
import axios from "axios";

function YearlyPlans() {
  const [yearlyplans, setMonthlyplans] = useState([]);
  useEffect(() => {
    async function fetchYearlydata() {
      try {
        let yearly = await axios.get(
          "https://moneymanager-nodeapp.herokuapp.com/YearlyPlans"
        );
        setMonthlyplans(yearly.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchYearlydata();
  });

  let handledelete = async (id) => {
    try {
      let ask = window.confirm(
        "Are you sure, do you want to delete this data?"
      );
      if (ask) {
        await axios.delete(
          `https://moneymanager-nodeapp.herokuapp.com/YearlyPlans/${id}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Yearly list</h6>
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
                <th>Year</th>
                <th>Budget</th>
                <th>Expense Type</th>
                <th>Price(₹)</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {yearlyplans.map((yearlyplan) => {
                return (
                  <tr>
                    <td>{yearlyplan.year}</td>
                    <td>{yearlyplan.budget}</td>
                    <td>{yearlyplan.expensetype}</td>
                    <td>{yearlyplan.price}</td>
                    <td>{yearlyplan.description}</td>
                    <td>
                      <button
                        className="btn btn-sm mx-1"
                        type="button"
                        onClick={() => handledelete(yearlyplan._id)}
                      >
                        <img className="img-fluid" src="https://img.icons8.com/windows/20/delete-forever.png"></img>
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

export default YearlyPlans;
