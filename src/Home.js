import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row mt-5">
            <div class="col-lg-4 offset-2">
              <div class="card mb-4 rounded-3 shadow-sm border-success">
                <div class="card-header py-3 text-white bg-success border-success">
                  <h4 class="my-0 fw-normal text-center">Daily Plan</h4>
                </div>
                <div class="card-body text-center">
                  <h2 class="card-title pricing-card-title">Plan Details</h2>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Date</li>
                    <li>Income</li>
                    <li>Expense</li>
                    <li>Expense type</li>
                    <li>Price</li>
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
            <div class="col-lg-4">
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
            </div>
            <div class="col-lg-4 offset-2">
              <div class="card mb-4 rounded-3 shadow-sm border-danger">
                <div class="card-header py-3 text-white bg-danger border-danger">
                  <h4 class="my-0 fw-normal text-center">Monthly Plan</h4>
                </div>
                <div class="card-body text-center">
                  <h2 class="card-title pricing-card-title">Plan Details</h2>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Month</li>
                    <li>Income</li>
                    <li>Expense</li>
                    <li>Expense type</li>
                    <li>Price</li>
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
            <div class="col-lg-4">
              <div class="card mb-4 rounded-3 shadow-sm border-info">
                <div class="card-header py-3 text-white bg-info border-info">
                  <h4 class="my-0 fw-normal text-center">Yearly Plan</h4>
                </div>
                <div class="card-body text-center">
                  <h2 class="card-title pricing-card-title">Plan Details</h2>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Year</li>
                    <li>Income</li>
                    <li>Expense</li>
                    <li>Expense type</li>
                    <li>Price</li>
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
