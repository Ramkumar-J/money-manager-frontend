import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  const [incomes, setNewincomes] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  useEffect(() => {
    let totalIn = 0;
    for (let i = 0; i < incomes.length; i++) {
      totalIn += parseInt(incomes[i].price);
    }
    setTotalIncome(totalIn);
  }, [incomes]);
  useEffect(() => {
    async function fetchIncomedata() {
      try {
        let incomedata = await axios.get(
          "https://moneymanager-nodeapp.herokuapp.com/AddIncomes"
        );
        setNewincomes(incomedata.data);
        // setTotal(total+incomedata.data.amount)
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
  const [expenses, setNewexpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  useEffect(() => {
    let totalEx = 0;
    for (let i = 0; i < expenses.length; i++) {
      totalEx += parseInt(expenses[i].price);
    }
    setTotalExpense(totalEx);
  }, [expenses]);
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

  let handledeletedata = async (id) => {
    try {
      let ask = window.confirm(
        "Are you sure, do you want to delete this data?"
      );
      if (ask) {
        await axios.delete(
          `https://moneymanager-nodeapp.herokuapp.com/AddExpenses/${id}`
        );
        // alert("data deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      {/* <div className="row mt-5 mb-0">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <Link
            class="nav-link btn btn-outline-success text-dark btn-sm fw-bold fs-4 mt-3 mx-auto w-50 h-75 p-0"
            to="/AddIncomes"
          >
            <img
              className="img-fluid mt-0 mb-0"
              src="https://img.icons8.com/external-prettycons-solid-prettycons/30/external-up-arrow-orientation-prettycons-solid-prettycons.png"
            ></img>{" "}
            Add Incomes
          </Link>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <Link
            class="nav-link btn btn-outline-danger text-dark btn-sm fw-bold fs-4 mt-3 mx-auto w-50 h-75 p-0"
            to="/AddExpenses"
          >
            <img
              className="img-fluid mb-0 mt-0"
              src="https://img.icons8.com/external-prettycons-solid-prettycons/30/external-down-arrow-orientation-prettycons-solid-prettycons.png"
            ></img>{" "}
            Add Expenses
          </Link>
        </div>
      </div> */}
      <div className="row mt-3 ms-5 me-5">
        <div className="col-sm-4 col-md-4 col-lg-4 fw-bold fs-5 text-center">
          <p>Income</p>
          <p className="text-success">₹{totalIncome}</p>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4 fw-bold fs-5 text-center">
          <p>Expense</p>
          <p className="text-danger">₹{totalExpense}</p>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4 fw-bold fs-5 text-center">
          <p>Balance</p>
          <p className="text-primary">₹{totalIncome - totalExpense}</p>
        </div>
      </div>
      <div className="row mt-2">
        <div class="col-lg-12 table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Income/Expense</th>
                <th>Income Type/Expense Type</th>
                <th>Price(₹)</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {incomes.map((e) => {
                return (
                  <tr className="table-success">
                    <td>{e.date}</td>
                    <td>{e.time}</td>
                    <td>{e.income}</td>
                    <td>{e.incometype}</td>
                    <td className="text-success fw-bold">{e.price}</td>
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
              {expenses.map((e) => {
                return (
                  <tr className="table-danger">
                    <td>{e.date}</td>
                    <td>{e.time}</td>
                    <td>{e.expense}</td>
                    <td>{e.expensetype}</td>
                    <td className="text-danger fw-bold">{e.price}</td>
                    <td>{e.description}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger ms-2"
                        onClick={() => handledeletedata(e._id)}
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
export default Home;
