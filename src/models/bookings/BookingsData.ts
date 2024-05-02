export let bookingsData = [
  {
    id: 0,
    name: "Rahul Kumar",
    email: "rahul@gmail.com",
    number: "9876543210",
    specialist: "NEURO",
    date: "",
    time: "14:01",
    doctor: ""
  },
  {
    id: 1,
    name: "Hari Parsad",
    email: "Hari@gmail.com",
    number: "9876543210",
    specialist: "NEURO",
    date: "2024-05-01",
    time: "14:01",
    doctor: ""
  },
  {
    id: 2,
    name: "Lalu Kumar",
    email: "lalu@gmail.com",
    number: "9876543210",
    specialist: "NEURO",
    date: "2024-05-01",
    time: "14:01",
    doctor: ""
  },
]
// Function to get new booking ID
export const getNewBookingId = () => {
  return bookingsData.length;
}

// Function to add a new booking
export const addBooking = (booking) => {
    const existingBooking = bookingsData.find((b) => b.id === booking.id);
  if (existingBooking) {
    // Update existing booking
    Object.assign(existingBooking, booking);
  } else {
    // Add new booking
    bookingsData.push(booking);
  }
};

// check with number and date
export const checkBookingExists = (booking) => {
  // check if booking found with same number and date.
  // const existingUser = bookingsData.find((emp) => emp.email === email);
  // return existingUser ? true : false;
};

export function getTodaysBookings() {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in "YYYY-MM-DD" format
    const todayBookings = bookingsData.filter(booking => {
        return booking.date === today; // Filter bookings for today's date
    });

    const bookingsWithDateTime = todayBookings.filter(booking => {
        return booking.time && booking.time.trim() !== ""; // Filter bookings with time
    });

    const bookingsWithoutDateTime = todayBookings.filter(booking => {
        return !booking.time || booking.time.trim() === ""; // Filter bookings without time
    });

    // Sort bookings with time
    bookingsWithDateTime.sort((a, b) => {
        const timeA = new Date(`2000-01-01T${a.time}`);
        const timeB = new Date(`2000-01-01T${b.time}`);
        return timeA - timeB;
    });

    // Concatenate bookings with time and bookings without time
    return bookingsWithDateTime.concat(bookingsWithoutDateTime);
}