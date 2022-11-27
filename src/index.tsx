import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ResetCss from "./styles/ResetCss";
import Dashboard from "./pages/Dashboard";
import AddCompanyForm from "./pages/AddCompanyForm";
import CompanyPage from "./pages/CompanyPage";


render(
  <BrowserRouter>
    <ResetCss />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="company-add" element={<AddCompanyForm/>} />
        <Route path="company/:id" element={<CompanyPage/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);