


// import React from "react";
// import ConfirmationDialog from "./ConfirmationDialog";



// import { Modal, Button } from "antd";
// import React, { useState } from "react";

// const ConfirmationDialog = ({ title, content, onConfirm, onCancel }) => {
//   const [visible, setVisible] = useState(false);

//   const showModal = () => {
//     setVisible(true);
//   };

//   const handleOk = () => {
//     onConfirm(); // Call the onConfirm function passed as prop
//     setVisible(false);
//   };

//   const handleCancel = () => {
//     onCancel(); // Call the onCancel function passed as prop
//     setVisible(false);
//   };

//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         Open Confirmation Dialog
//       </Button>
//       <Modal title={title} visible={visible} onOk={handleOk} onCancel={handleCancel}>
//         <p>{content}</p>
//       </Modal>
//     </>
//   );
// };

// export default ConfirmationDialog;



// const MyComponent = () => {
//   const handleConfirm = () => {
//     // Logic to execute when the user confirms
//     console.log("Confirmed");
//   };

//   const handleCancel = () => {
//     // Logic to execute when the user cancels
//     console.log("Cancelled");
//   };

//   return (
//     <div>
//       <h1>My Component</h1>
//       <ConfirmationDialog
//         title="Confirmation"
//         content="Are you sure you want to proceed?"
//         onConfirm={handleConfirm}
//         onCancel={handleCancel}
//       />
//     </div>
//   );
// };

// export default MyComponent;
