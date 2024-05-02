import React from 'react'
import "./SideMenu.css"
import { Link } from 'react-router-dom';
import { PatientSideMenu } from '../../models/SideMenu';


function SideMenu = ({type}) => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h6>Patients</h6>
      </div>
      <hr />
      
<div className="menu">
  {type === "admin" ? (
    // Render admin menu items
    <>
      {/* Admin menu items */}
    </>
  ) : type === "emp" ? (
    // Render emp menu items
    <>
      {/* Emp menu items */}
    </>
  ) : (
    // Render patient menu items
    PatientSideMenu.map((menu) => {
      const isActive = location.pathname === menu.path;
      return (
        <div className={`menu-item ${isActive && "active"}`} key={menu.key}>
          <i className={menu.icon}></i>
          <Link to={menu.path}>{menu.name}</Link>
        </div>
      );
    })
  )}
</div>
    </div>
  );
}

export default SideMenu
