export let loggedUser = {
  id: 0,
  name: "",
  email: "",
  password: "",
  type: "",
};

export const getLoggedUser = loggedUser;

export const logoutUser = () => {
  loggedUser = {
    id: 0,
    name: "",
    email: "",
    password: "",
    type: "",
  };
}

export const updateLoggedUser = (user: {
  id: number;
  name: string;
  email: string;
  password: string;
  type: string;
}) => {
  loggedUser = user;
};
