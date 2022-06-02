import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-primary bg-dark">
      <div class="container-fluid">
        <Link
          class="navbar-brand fs-3 fw-bolder text-uppercase text-warning font"
          to="/"
        >
          <img className="img-fluid" src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/50/external-money-saving-economy-flatart-icons-flat-flatarticons.png"></img> Money Manager
        </Link>
        <button
          class="navbar-toggler btn-primary bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"><img className="img-fluid img-center img-white" src="https://img.icons8.com/ios-filled/20/stripped-patterns.png"></img></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
            <li class="nav-item">
              <Link class="nav-link active fs-5 text-white" aria-current="page" to="/Home">
                Home
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle fs-5 text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Budget Plan
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link class="dropdown-item" to="/DailyPlans">
                    Daily Plans
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                {/* <li>
                  <Link class="dropdown-item" to="/WeeklyPlans">
                    Weekly Plans
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li> */}
                <li>
                  <Link class="dropdown-item" to="/MonthlyPlans">
                    Monthly Plans
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <Link class="dropdown-item" to="/YearlyPlans">
                    Yearly Plans
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link active fs-5 text-white" aria-current="page" to="/MoneyInfo">
                Tracker
              </Link>
            </li>
            {/* <li class="nav-item ms-3 fs-5">
              <Link
                class="nav-link btn btn-outline-success text-white btn-sm fs-5 m-1 p-1"
                to="/AddIncomes"
              >
                Add Incomes
              </Link>
            </li>
            <li class="nav-item ms-3 fs-5">
              <Link
                class="nav-link btn btn-outline-danger text-white btn-sm fs-5 m-1 p-1"
                to="/AddExpenses"
              >
                Add Expenses
              </Link>
            </li> */}
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
