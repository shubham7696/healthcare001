export let docData = [
  {
    id: 0,
    name: "Dr. Arvind Kumar",
    email: "arvindk@gmail.com",
    number: "9876543210",
    specialist: "NEURO"
  },
  {
    id: 1,
    name: "Dr. Vijay Kumar",
    email: "vijay@gmail.com",
    number: "9876543211",
  },
  {
    id: 2,
    name: "Dr. Rahul Kumar",
    email: "rahul@gmail.com",
    number: "9876543212",
  },
  {
    id: 3,
    name: "Dr. Ambedker Kumar",
    email: "ambedker@gmail.com",
    number: "9876543213",
  },
  {
    id: 4,
    name: "Dr. Lovely Kumar",
    email: "lovely@gmail.com",
    number: "9876543214",
  },
];




// Function to get all docs
export const getAllDoc = () => {
  return docData;
};