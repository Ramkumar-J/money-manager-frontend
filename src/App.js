import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import DailyPlanform from "./DailyPlanform";
import MonthlyPlanform from "./MonthlyPlanform";
import YearlyPlanform from "./YearlyPlanform";
import Plans from "./Plans";
import DailyPlans from "./DailyPlans";
import MonthlyPlans from "./MonthlyPlans";
import YearlyPlans from "./YearlyPlans";
import AddExpenses from "./AddExpenses";
import AddIncomes from "./AddIncomes";
import DailyPlanView from "./DailyPlanView";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper" className="home-bg">
        <Navbar></Navbar>
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/DailyPlanform" element={<DailyPlanform />} />
            <Route path="/MonthlyPlanform" element={<MonthlyPlanform />} />
            <Route path="/YearlyPlanform" element={<YearlyPlanform />} />
            <Route path="/Plans" element={<Plans />} />
            <Route path="/DailyPlans" element={<DailyPlans />} />
            <Route path="/MonthlyPlans" element={<MonthlyPlans />} />
            <Route path="/YearlyPlans" element={<YearlyPlans />} />
            <Route path="/AddExpenses" element={<AddExpenses />} />
            <Route path="/AddIncomes" element={<AddIncomes />} />
            <Route path="/DailyPlanView" element={<DailyPlanView />} />
            <Route path="/DailyPlanView/:id" element={<DailyPlanView />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
