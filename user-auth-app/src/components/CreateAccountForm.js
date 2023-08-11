// import React, { useState } from "react";
// import axios from "axios"; 
// import "./CreateAccountForm.css";


// const CreateAccountForm = () => {
//   const [formData, setFormData] = useState({
//     fName: "",
//     LName: "",
//     eMail: "",
//     address1: "",
//     address2: "",
//     city: "",
//     stateProvince: "",
//     country: "",
//     phoneNum: "",
//     creditCard: "",
//     expiration: "",
//     password: "",
//   });

// //   const [addressValidationFailed, setAddressValidationFailed] = useState(false);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
// //         console.log(apiKey);
// //       const addressLines = [formData.address1];
// //       if (formData.address2) {
// //         addressLines.push(formData.address2);
// //       }
// //       const url = "https://addressvalidation.googleapis.com/v1:validateAddress?key=" + apiKey;

// //       const requestData = {
// //         address: {
// //           regionCode: formData.country,
// //           locality: formData.city, 
// //           addressLines: addressLines,
// //         },
       
// //       };
      
// //       console.log(requestData);
// //       const response = await axios.post(url, requestData);

// //       if (response.data.isValid) {        
// //         setAddressValidationFailed(false);        
// //         try {
// //           const res = await axios.post("../server/routes/user.js", formData);
// //           console.log("saved to database");
// //         } catch (error) {
// //           return(error);
// //         }

// //       } else {
// //         // Address validation failed
// //         setAddressValidationFailed(true);
// //       }
// //     } catch (error) {
// //       console.error('Error validating address:', error);
// //     }
// //   };

// // const handleSubmit = async (e) => {
// //     e.preventDefault();
  
// //     try {
// //       const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
// //       const url = `https://addressvalidation.googleapis.com/v1:validateAddress?key=${apiKey}`;
  
// //       const addressLines = [formData.address1];
// //       if (formData.address2) {
// //         addressLines.push(formData.address2);
// //       }
  
// //       const requestData = {
// //         address: {
// //           regionCode: formData.country,
// //           locality: formData.city, 
// //           addressLines: addressLines,
// //         }
// //       };
  
// //       const options = {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(requestData),
// //       };
  
// //       const response = await fetch(url, options);
// //       if (response.ok) {
// //         const responseData = await response.json();
        
// //         if (responseData.isValid) {
        
// //           setAddressValidationFailed(false);
  
// //           try {
          
// //             const res = await axios.post("/create", formData);
// //             console.log("saved to database");
// //           } catch (error) {
// //             console.error('Error saving user data:', error);
// //           }
// //         } else {
       
// //           setAddressValidationFailed(true);
// //         }
// //       } else {
      
// //         console.error('Request failed:', response.statusText);
// //       }
// //     } catch (error) {
// //       console.error('Error:', error);
// //     }
// //   };
  

//   return (
//     <form className="create-account-form" onSubmit={handleSubmit}>
            
//       <input type="text" name="fName" value={formData.fName} onChange={handleInputChange} placeholder="First Name" required />
// <input type="text" name="LName" value={formData.LName} onChange={handleInputChange} placeholder="Last Name" required />
// <input type="email" name="eMail" value={formData.eMail} onChange={handleInputChange} placeholder="Email" required />
// <input type="text" name="address1" value={formData.address1} onChange={handleInputChange} placeholder="Address Line 1" required />
// <input type="text" name="address2" value={formData.address2} onChange={handleInputChange} placeholder="Address Line 2" />
// <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" required />
// <input type="text" name="stateProvince" value={formData.stateProvince} onChange={handleInputChange} placeholder="State/Province" required />
// <input type="text" name="country" value={formData.country} onChange={handleInputChange} placeholder="Country" required />
// <input type="tel" name="phoneNum" value={formData.phoneNum} onChange={handleInputChange} placeholder="Phone Number" />
// <input type="text" name="creditCard" value={formData.creditCard} onChange={handleInputChange} placeholder="Credit Card Number" />
// <input type="text" name="expiration" value={formData.expiration} onChange={handleInputChange} placeholder="Expiration Date" />
// <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" required />
      
   
//       <button type="submit">Create Account</button>
//       {addressValidationFailed && (
//         <p className="error-message">Address validation failed. Please check your address or contact support.</p>
//       )}
//     </form>
//   );
// };

// export default CreateAccountForm;

import React, { useState } from "react";
import axios from "axios";
import "./CreateAccountForm.css";

const CreateAccountForm = () => {
  const [formData, setFormData] = useState({
    fName: "",
    LName: "",
    eMail: "",
    address1: "",
    address2: "",
    city: "",
    stateProvince: "",
    country: "",
    phoneNum: "",
    creditCard: "",
    expiration: "",
    password: "",
  });

  const handleChange = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/create", formData);
      console.log("saved to database");
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <form className="create-account-form" onSubmit={handleChange}>
      <input type="text" name="fName" value={formData.fName} onChange={handleChange} placeholder="First Name" required />
      <input type="text" name="LName" value={formData.LName} onChange={handleChange} placeholder="Last Name" required />
      <input type="email" name="eMail" value={formData.eMail} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="address1" value={formData.address1} onChange={handleChange} placeholder="Address Line 1" required />
      <input type="text" name="address2" value={formData.address2} onChange={handleChange} placeholder="Address Line 2" />
      <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
      <input type="text" name="stateProvince" value={formData.stateProvince} onChange={handleChange} placeholder="State/Province" required />
      <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" required />
      <input type="tel" name="phoneNum" value={formData.phoneNum} onChange={handleChange} placeholder="Phone Number" />
      <input type="text" name="creditCard" value={formData.creditCard} onChange={handleChange} placeholder="Credit Card Number" />
      <input type="text" name="expiration" value={formData.expiration} onChange={handleChange} placeholder="Expiration Date" />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />

      <button type="submit">Create Account</button>
    </form>
  );
};

export default CreateAccountForm;
