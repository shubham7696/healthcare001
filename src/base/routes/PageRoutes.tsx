import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/authentication/LoginPage";
import AdminHomePage from "../../pages/admin/AdminHomePage";
import RegisterPage from "../../pages/authentication/RegisterPage";
import NewAppointmentPage from "../../pages/employee/NewAppointmentPage";
import TodayAppointments from "../../pages/employee/TodayAppointments";
import EmployeeListPage from "../../pages/admin/EmployeeListPage";
import AddEmployeePage from "../../pages/admin/AddEmployeePage";
import ErrorPage from "../page/ErrorPage";
import UpcomingAppointments from "../../pages/employee/UpcomingAppointments";
import ErrorBoundary from "../page/ErrorBoundary";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />}>
        {/* {userType === "admin" && 
        <Route path="/" element={<Navigate to="/empList"/>}/>} */}
        <Route path="/todayAppointments" element={<TodayAppointments />} />
        <Route path="/newAppointment" element={<NewAppointmentPage />} />
        <Route path="/" element={<UpcomingAppointments />} />
        {/* this pages are for admin */}
        <Route path="/empList" element={<EmployeeListPage />} />
        <Route path="/addEmployee" element={<AddEmployeePage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/adminHomePage" element={<AdminHomePage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<ErrorBoundary>
            <HomePage />
          </ErrorBoundary>
        }
      />
    </Route>
  )
);

export default AppRoutes;
