import React, { Children, useEffect } from "react";
import "../styles/PatientLayout.css";
import { AdminSideMenu, PatientSideMenu } from "../models/SideMenu.ts";
import { Link, Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { loggedUser, logoutUser } from "../models/LoggedUserData.ts";
import { useDisplayName } from "../hooks/HeaderHooks";
import EmployeeListPage from "../pages/admin/EmployeeListPage";

export const CommonHomeLayout = ({ data }) => {
  const location = useLocation();

  const navigate = useNavigate();

  const handleLogout = () => {
    // Refresh the page
    navigate("/login");
    logoutUser();
    // window.location.reload();
  };

  useEffect(() => {
    if (userType === "admin") {
      navigate("/empList");
    }
  }, []);

  // useEffect(() => {
  //   const unlisten = history.listen(() => {

  //     if (loggedUser.name == "") {
  //       navigate("/login");
  //     }
  //   });

  //   return () => {
  //     unlisten();
  //   };
  // }, [history]);

  const userType = data;
  // make custom hooks for this
  // also can be put in useEffect
  const menuItems = userType === "admin" ? AdminSideMenu : PatientSideMenu;

  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <h6>{userType === "admin" ? "Employees" : "Patients"}</h6>
            </div>
            <hr />
            <div className="menu">
              {menuItems.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <>
                    <div className={`menu-item ${isActive && "active"}`}>
                      <i className={menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="content">
            <div className="header">
              {/* <h2>{useDisplayName()}</h2> */}
              <h2>{loggedUser.name}</h2>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </div>
            <div className="body">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
