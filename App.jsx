// // // src/App.js

// // import React from 'react';
// // import QrCode from './QrCode';

// // const App = () => {
// //     return (
// //         <div className="App">
// //             <QrCode />
// //         </div>
// //     );
// // };

// // export default App;

// import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal';

// const UpdatePopup = ({ isOpen, onClose, data, onUpdate }) => {
//   const [formData, setFormData] = useState(data);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     setFormData(data);
//   }, [data]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email) {
//       setError('Name and Email are required.');
//       return;
//     }
//     setError('');
//     onUpdate(formData);
//     onClose();
//   };

//   return (
//     <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
//       <h2>Update User Data</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           ID:
//           <input type="text" value={formData.id} readOnly />
//         </label>
//         <br />
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             style={error ? { borderColor: 'red' } : {}}
//           />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             style={error ? { borderColor: 'red' } : {}}
//           />
//         </label>
//         <br />
//         <label>
//           Age:
//           <input
//             type="number"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button type="submit">Update</button>
//         <button type="button" onClick={onClose}>Cancel</button>
//       </form>
//     </Modal>
//   );
// };

// export default UpdatePopup;

