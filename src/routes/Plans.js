import React from "react";
import { Link } from "react-router-dom";

function Plans() {
  return (
    <div className="container">
      <p className="text-center text-danger fw-bold fs-3 mt-3 mb-0">
        "Do not save what is left after spending, but spend what is left after
        saving."
      </p>
      <p className="text-end text-danger fw-bold fs-3 mt-1 me-5">
        – Warren Buffett
      </p>
      <div className="col-lg-12">
        <div className="row mt-5">
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card mb-4 rounded-3 shadow-sm border-success card-size">
              <div class="card-header py-3 text-white bg-success border-success">
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
            <div class="card mb-4 rounded-3 shadow-sm border-danger">
              <div class="card-header py-3 text-white bg-danger border-danger">
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
  );
}

export default Plans;
