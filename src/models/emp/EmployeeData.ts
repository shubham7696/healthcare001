export let empData = [
  {
    id: 0,
    name: "Admin",
    email: "admin@gmail.com",
    password: "admin",
    type: "admin"
  },
  {
    id: 1,
    name: "Someone",
    email: "someone@gmail.com",
    password: "someone",
    type: "Employee"
  },
];

// Function to add a new user
export const addEmp = (emp) => {
      const existingEmp = empData.find((b) => b.id === emp.id);
      if (existingEmp) {
        // Update existing employee data
        Object.assign(existingEmp, emp);
      } else {
        // Add new employee
        if (!emp.type || emp.type.trim() === "") {
          // Set type to "Employee" by default
          emp.type = "Employee";
        }
        empData.push(emp);
      }
};

// not is use as of now
// Function to update an existing user
export const updateEmp = (id, updatedEmpData) => {
  empData = empData.map((user) => (user.id === id ? { ...user, ...updatedEmpData } : user));
};

// Function to delete a user
export const deleteEmp = (id) => {
  empData = empData.filter((emp) => emp.id !== id);
};

// Function to get all users
export const getAllEmp = () => {
  return empData;
};

// returns array length which will be used as ID
export const getNewEmpId = () => {
  return empData.length;
};

// check if user exist and then show error
export const checkUserExists = (email) => {
  const existingUser = empData.find((emp) => emp.email === email);
  return existingUser ? true : false;
};

// match email password to confirm a valid user
export const checkValidUser = (email, password) => {
  const existingUser = empData.find((emp) => emp.email === email && emp.password === password);
  return existingUser ? existingUser : null;
};
