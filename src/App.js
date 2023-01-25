import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import DailyPlanform from "./components/DailyPlanform";
import MonthlyPlanform from "./components/MonthlyPlanform";
import YearlyPlanform from "./components/YearlyPlanform";
import Plans from "./routes/Plans";
import DailyPlans from "./routes/DailyPlans";
import MonthlyPlans from "./routes/MonthlyPlans";
import YearlyPlans from "./routes/YearlyPlans";
import AddExpenses from "./routes/AddExpenses";
import AddIncomes from "./routes/AddIncomes";
import Register from "./routes/Register";
import Login from "./routes/Login";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper" className="home-bg">
        <Navbar></Navbar>
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/AddExpenses" element={<AddExpenses />} />
            <Route path="/AddIncomes" element={<AddIncomes />} />
            <Route path="/Plans" element={<Plans />} />
            <Route path="/DailyPlans" element={<DailyPlans />} />
            <Route path="/MonthlyPlans" element={<MonthlyPlans />} />
            <Route path="/YearlyPlans" element={<YearlyPlans />} />
            <Route path="/DailyPlanform" element={<DailyPlanform />} />
            <Route path="/MonthlyPlanform" element={<MonthlyPlanform />} />
            <Route path="/YearlyPlanform" element={<YearlyPlanform />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
