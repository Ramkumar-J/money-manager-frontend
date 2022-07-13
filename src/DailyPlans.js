import axios from "axios";
import React, { useEffect, useState } from "react";

function DailyPlans() {
  const [dailyplans, setDailyplans] = useState([]);
  useEffect(() => {
    async function fetchDailydata() {
      try {
        let daily = await axios.get(
          "https://moneymanager-nodeapp.herokuapp.com/DailyPlans",
          {
            headers: {
              Authorization: window.localStorage.getItem("myapptoken"),
            },
          }
        );
        setDailyplans(daily.data);
        console.log(dailyplans);
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    }
    fetchDailydata();
  });
  let handledelete = async (id) => {
    try {
      let ask = window.confirm(
        "Are you sure, do you want to delete this data?"
      );
      if (ask) {
        await axios.delete(
          `https://moneymanager-nodeapp.herokuapp.com/DailyPlans/${id}`,
          {
            headers: {
              Authorization: window.localStorage.getItem("myapptoken"),
            },
          }
        );
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h4 className="m-0 fw-bold text-primary">Daily list</h4>
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
                <th>Budget</th>
                <th>Expense Type</th>
                <th>Price(₹)</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dailyplans.map((dailyplan) => {
                return (
                  <tr>
                    <td>{dailyplan.date}</td>
                    <td>{dailyplan.budget}</td>
                    <td>{dailyplan.expensetype}</td>
                    <td>{dailyplan.price}</td>
                    <td>{dailyplan.description}</td>
                    <td>
                      {/* <Link
                        className="btn btn-sm"
                        type="button"
                        to={`/DailyPlanView/${dailyplan._id}`}
                      >
                        <img
                          className="img-fluid"
                          src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/20/external-view-user-interface-kmg-design-glyph-kmg-design.png"
                        ></img>
                      </Link> */}
                      <button
                        className="btn btn-sm"
                        type="button"
                        onClick={() => handledelete(dailyplan._id)}
                      >
                        <img
                          className="img-fluid"
                          src="https://img.icons8.com/windows/20/delete-forever.png"
                          alt="delete-icon"
                        ></img>
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
