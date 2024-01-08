// import React, { useState } from "react";
// // import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import Cards from "react-credit-cards";
// import "react-credit-cards/es/styles-compiled.css";
// // import { useNavigate, useLocation } from "react-router-dom";
// import "./PaymentForm.scss";

// const PaymentForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     cardNumber: "",
//     expiryDate: "",
//     cvc: "",
//     focus: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     name: "",
//     email: "",
//     cardNumber: "",
//     expiryDate: "",
//     cvc: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//     setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
//   };

//   const submitForm = () => {
//     // Perform client-side validation
//     const errors = {};

//     if (!formData.name.trim()) {
//       errors.name = "Name is required";
//     }

//     if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
//       errors.email = "Invalid email address";
//     }

//     if (!formData.cardNumber.trim() || formData.cardNumber.length !== 16) {
//       errors.cardNumber = "Card number must be 16 digits";
//     }

//     if (
//       !formData.expiryDate.trim() ||
//       !/^\d{2}\/\d{2}$/.test(formData.expiryDate)
//     ) {
//       errors.expiryDate = "Invalid expiry date (MM/YY)";
//     }

//     if (!formData.cvc.trim() || formData.cvc.length !== 3) {
//       errors.cvc = "CVC must be 3 digits";
//     }

//     if (Object.keys(errors).length > 0) {
//       // Update state with errors
//       setFormErrors(errors);
//     } else {
//       // If no errors, proceed with further actions
//       alert("Booking successful! Payment details submitted.");
//       // You would typically send the data to a server and process the payment securely.
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="col-md-6 offset-md-3">
//         <Cards
//           cvc={formData.cvc}
//           expiry={formData.expiryDate}
//           focused={formData.focus}
//           name={formData.name}
//           number={formData.cardNumber}
//         />

//         <form>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">
//               Name:
//             </label>
//             <input
//               type="text"
//               className={`form-control ${formErrors.name && "is-invalid"}`}
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               onFocus={(e) =>
//                 setFormData({ ...formData, focus: e.target.name })
//               }
//               required
//             />
//             {formErrors.name && (
//               <div className="invalid-feedback">{formErrors.name}</div>
//             )}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email:
//             </label>
//             <input
//               type="email"
//               className={`form-control ${formErrors.email && "is-invalid"}`}
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               onFocus={(e) =>
//                 setFormData({ ...formData, focus: e.target.name })
//               }
//               required
//             />
//             {formErrors.email && (
//               <div className="invalid-feedback">{formErrors.email}</div>
//             )}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="cardNumber" className="form-label">
//               Card Number:
//             </label>
//             <input
//               type="text"
//               className={`form-control ${
//                 formErrors.cardNumber && "is-invalid"
//               }`}
//               id="cardNumber"
//               name="cardNumber"
//               value={formData.cardNumber}
//               onChange={handleChange}
//               onFocus={(e) =>
//                 setFormData({ ...formData, focus: e.target.name })
//               }
//               maxLength="16"
//               required
//             />
//             {formErrors.cardNumber && (
//               <div className="invalid-feedback">{formErrors.cardNumber}</div>
//             )}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="expiryDate" className="form-label">
//               Expiry Date:
//             </label>
//             <input
//               type="text"
//               className={`form-control ${
//                 formErrors.expiryDate && "is-invalid"
//               }`}
//               id="expiryDate"
//               name="expiryDate"
//               placeholder="MM/YY"
//               value={formData.expiryDate}
//               onChange={handleChange}
//               onFocus={(e) =>
//                 setFormData({ ...formData, focus: e.target.name })
//               }
//               required
//             />
//             {formErrors.expiryDate && (
//               <div className="invalid-feedback">{formErrors.expiryDate}</div>
//             )}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="cvc" className="form-label">
//               CVV:
//             </label>
//             <input
//               type="text"
//               className={`form-control ${formErrors.cvc && "is-invalid"}`}
//               id="cvc"
//               name="cvc"
//               value={formData.cvc}
//               onChange={handleChange}
//               onFocus={(e) =>
//                 setFormData({ ...formData, focus: e.target.name })
//               }
//               maxLength="3"
//               required
//             />
//             {formErrors.cvc && (
//               <div className="invalid-feedback">{formErrors.cvc}</div>
//             )}
//           </div>

//           <button
//             type="button"
//             className="btn btn-primary"
//             onClick={submitForm}
//           >
//             Book Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PaymentForm;
