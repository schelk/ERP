import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
const AddClientes = ({ modal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div className="form-container">
      <FaWindowClose onClick={modal} className="close" />
      <form onSubmit={handleSubmit} className="general-forms">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <GiConfirmed type="submit" className="close" onClick={modal} />
      </form>
    </div>
  );
};
export default AddClientes;
