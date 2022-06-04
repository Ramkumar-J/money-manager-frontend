import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container bg-money">
      <p className="text-center text-danger fw-bold fs-3 mt-3 mb-0">"Do not save what is left after spending,
      but spend what is left after saving."</p>
      <p className="text-end text-danger fw-bold fs-3 mt-1 me-5">– Warren Buffett</p>
      <div className="row mt-0 mb-0">
      <div className="col-sm-12 col-md-12 col-lg-6">
              <Link
                class="nav-link btn btn-outline-success text-white btn-sm fw-bold fs-4 mt-3 mx-auto w-50 h-75 p-0"
                to="/AddIncomes"
              >
                <img className="img-fluid mt-0 mb-0" src="https://img.icons8.com/external-prettycons-solid-prettycons/30/external-up-arrow-orientation-prettycons-solid-prettycons.png"></img> Add Incomes
              </Link>  
      </div>
      <div className="col-sm-12 col-md-12 col-lg-6">
      
              <Link
                class="nav-link btn btn-outline-danger text-white btn-sm fw-bold fs-4 mt-3 mx-auto w-50 h-75 p-0"
                to="/AddExpenses"
              >
                <img className="img-fluid mb-0 mt-0" src="https://img.icons8.com/external-prettycons-solid-prettycons/30/external-down-arrow-orientation-prettycons-solid-prettycons.png"></img> Add Expenses
              </Link>
            
      </div>
        <div className="col-lg-12">
          <div className="row mt-5">
            <div class="col-sm-12 col-md-6 col-lg-4">
              <div class="card mb-4 rounded-3 shadow-sm border-primary card-size">
                <div class="card-header py-3 text-white bg-primary border-primary">
                  <h4 class="my-0 fw-normal text-center">Daily Plan</h4>
                </div>
                <div class="card-body text-center">
                  <h2 class="card-title pricing-card-title">Plan Details</h2>
                  <ul class="list-unstyled mt-2 mb-2">
                    <li>Date</li>
                    <li>Budget</li>
                    <li>Expense type</li>
                    <li>Price</li>
                    <li>Description</li>
                  </ul>
                  <Link
                    to="/DailyPlanform"
                    type="button"
                    class="w-50 btn btn-lg btn-primary"
                  >
                    Create
                  </Link>
                </div>
              </div>
            </div>
            {/* <div class="col-lg-4">
              <div class="card mb-4 rounded-3 shadow-sm border-secondary">
                <div class="card-header py-3 text-white bg-secondary border-secondary">
                  <h4 class="my-0 fw-normal text-center">Weekly Plan</h4>
                </div>
                <div class="card-body text-center">
                  <h2 class="card-title pricing-card-title">Plan Details</h2>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>From Date - To Date</li>
                    <li>Income</li>
                    <li>Expense</li>
                    <li>Expense type</li>
                    <li>Price</li>
                  </ul>
                  <Link
                    to="/WeeklyPlanform"
                    type="button"
                    class="w-50 btn btn-lg btn-primary"
                  >
                    Create
                  </Link>
                </div>
              </div>
            </div> */}
            <div class="col-sm-12 col-md-6 col-lg-4">
              <div class="card mb-4 rounded-3 shadow-sm border-secondary">
                <div class="card-header py-3 text-white bg-secondary border-secondary">
                  <h4 class="my-0 fw-normal text-center">Monthly Plan</h4>
                </div>
                <div class="card-body text-center">
                  <h2 class="card-title pricing-card-title">Plan Details</h2>
                  <ul class="list-unstyled mt-2 mb-2">
                    <li>Month</li>
                    <li>Budget</li>
                    <li>Expense type</li>
                    <li>Price</li>
                    <li>Description</li>
                  </ul>
                  <Link
                    to="/MonthlyPlanform"
                    type="button"
                    class="w-50 btn btn-lg btn-primary"
                  >
                    Create
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4">
              <div class="card mb-4 rounded-3 shadow-sm border-primary">
                <div class="card-header py-3 text-white bg-primary border-primary">
                  <h4 class="my-0 fw-normal text-center">Yearly Plan</h4>
                </div>
                <div class="card-body text-center">
                  <h2 class="card-title pricing-card-title">Plan Details</h2>
                  <ul class="list-unstyled mt-2 mb-2">
                    <li>Year</li>
                    <li>Budget</li>
                    <li>Expense type</li>
                    <li>Price</li>
                    <li>Description</li>
                  </ul>
                  <Link
                    to="/YearlyPlanform"
                    type="button"
                    class="w-50 btn btn-lg btn-primary"
                  >
                    Create
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
