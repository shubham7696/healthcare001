import React, { Children } from "react";
import "../styles/PatientLayout.css";
import { PatientSideMenu } from "../models/SideMenu";
import { Link, Outlet, useLocation } from "react-router-dom";

export const PatientLayout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <h6>Patients</h6>
            </div>
            <hr />
            <div className="menu">
              {PatientSideMenu.map((menu) => {
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
            <div className="header">Header</div>
            <div className="body">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
