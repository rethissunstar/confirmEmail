import React, { useState } from "react";
import "./CreateAccountForm.css"; // Import the CSS file for styling

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any necessary validation or submission logic here
  };

  return (
    <form className="create-account-form" onSubmit={handleSubmit}>
      
      <input type="text" name="fName" value={formData.fName} onChange={handleInputChange} placeholder="First Name" required />
<input type="text" name="LName" value={formData.LName} onChange={handleInputChange} placeholder="Last Name" required />
<input type="email" name="eMail" value={formData.eMail} onChange={handleInputChange} placeholder="Email" required />
<input type="text" name="address1" value={formData.address1} onChange={handleInputChange} placeholder="Address Line 1" required />
<input type="text" name="address2" value={formData.address2} onChange={handleInputChange} placeholder="Address Line 2" />
<input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" required />
<input type="text" name="stateProvince" value={formData.stateProvince} onChange={handleInputChange} placeholder="State/Province" required />
<input type="text" name="country" value={formData.country} onChange={handleInputChange} placeholder="Country" required />
<input type="tel" name="phoneNum" value={formData.phoneNum} onChange={handleInputChange} placeholder="Phone Number" />
<input type="text" name="creditCard" value={formData.creditCard} onChange={handleInputChange} placeholder="Credit Card Number" />
<input type="text" name="expiration" value={formData.expiration} onChange={handleInputChange} placeholder="Expiration Date" />
<input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" required />
      <button type="submit">Create Account</button>
    </form>
  );
};

export default CreateAccountForm;
