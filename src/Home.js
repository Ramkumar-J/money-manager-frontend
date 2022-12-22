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
          "https://money-manager-backend-one.vercel.app/AddIncomes",
          {
            headers: {
              Authorization: window.localStorage.getItem("myapptoken"),
            },
          }
        );
        setNewincomes(incomedata.data);
        // setTotal(total+incomedata.data.amount)
      } catch (error) {
        console.log(error);
        alert("Kindly Please Login");
      }
    }
    fetchIncomedata();
  });
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
          "https://money-manager-backend-one.vercel.app/AddExpenses",
          {
            headers: {
              Authorization: window.localStorage.getItem("myapptoken"),
            },
          }
        );
        setNewexpenses(expensedata.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchExpensedata();
  });
  return (
    <div className="container">
      <div className="row mt-3 ms-5 me-5">
        <div className="col-sm-4 col-md-4 col-lg-4 fw-bold fs-3 text-center">
          <p>Income</p>
          <p className="text-success">₹{totalIncome}</p>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4 fw-bold fs-3 text-center">
          <p>Expense</p>
          <p className="text-danger">₹{totalExpense}</p>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4 fw-bold fs-3 text-center">
          <p>Balance</p>
          <p className="text-primary">₹{totalIncome - totalExpense}</p>
        </div>
      </div>
      <div className="row mt-2">
        <div class="col-lg-12 p-0 table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Income/Expense</th>
                <th>Income Type/Expense Type</th>
                <th>Price(₹)</th>
                <th>Description</th>
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
