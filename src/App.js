import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import DailyPlanform from "./DailyPlanform";
import WeeklyPlanform from "./WeeklyPlanform";
import MonthlyPlanform from "./MonthlyPlanform";
import YearlyPlanform from "./YearlyPlanform";
import DailyPlans from "./DailyPlans";
import WeeklyPlans from "./WeeklyPlans";
import MonthlyPlans from "./MonthlyPlans";
import YearlyPlans from "./YearlyPlans";
import AddExpenses from "./AddExpenses";
import AddIncomes from "./AddIncomes";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Navbar></Navbar>
        <div class="container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/DailyPlanform" element={<DailyPlanform />} />
            <Route path="/WeeklyPlanform" element={<WeeklyPlanform />} />
            <Route path="/MonthlyPlanform" element={<MonthlyPlanform />} />
            <Route path="/YearlyPlanform" element={<YearlyPlanform />} />
            <Route path="/DailyPlans" element={<DailyPlans />} />
            <Route path="/WeeklyPlans" element={<WeeklyPlans />} />
            <Route path="/MonthlyPlans" element={<MonthlyPlans />} />
            <Route path="/YearlyPlans" element={<YearlyPlans />} />
            <Route path="/AddExpenses" element={<AddExpenses />} />
            <Route path="/AddIncomes" element={<AddIncomes />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
