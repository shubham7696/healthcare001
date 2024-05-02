import { icons } from "antd/es/image/PreviewGroup";


export const AdminSideMenu = [
  {
    name: "Home",
    path: "/empList",
    icon: "fa-solid fa-house",
  },
  {
    name: "Add Employee",
    path: "/addEmployee",
    icon: "fa-solid fa-plus",
  },
];


export const PatientSideMenu = [
  {
    name: "Appointments",
    path: "/",
    icon: "fa-solid fa-list",
  },
  {
    name: "Today",
    path: "/todayAppointments",
    icon: "fa-solid fa-clock-rotate-left",
  },
  {
    name: "New Appointment",
    path: "/newAppointment",
    icon: "fa-solid fa-plus",
  },
];



export const EmpSideMenu = [
  {
    name: "Home",
    path: "/",
    icon: "fa-solid fa-house",
  },
  {
    name: "All EM",
    path: "/appointment",
    icon: "fa-solid fa-list",
  },
  {
    name: "Today",
    path: "/today",
    icon: "fa-solid fa-clock-rotate-left",
  },
  {
    name: "New Appointment",
    path: "/newAppointment",
    icon: "fa-solid fa-plus",
  },
];

