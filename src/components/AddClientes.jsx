import React, { useState } from "react";
import { FaWindowClose, FaRegUser } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { GrClearOption } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const AddClientes = ({ modal }) => {
  return (
    <>
      <div className="form-container">
        <div className="spacing">
          <Link to="/">
            <img src="chilliz.png" alt="logo" className="form-logo" />
          </Link>
        </div>
        <form className="general-forms">
          <div className="inputs-container">
            <label htmlFor="name">
              <FaRegUser />
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome de usuário"
            />
          </div>

          <div className="inputs-container">
            <label htmlFor="email">
              <MdAlternateEmail />
            </label>
            <input type="email" id="email" name="email" placeholder="E-Mail" />
          </div>
          <div className="inputs-container">
            <label htmlFor="password">
              <RiLockPasswordLine />
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
            />
          </div>
          <div className="inputs-container">
            <label htmlFor="name">
              <BsFillTelephoneFill />{" "}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Número de telefone"
            />
          </div>

          <div className="extra-option">
            <GrClearOption className="clear" />
            <GiConfirmed type="submit" className="confirm" onClick={modal} />
          </div>
        </form>
        <FaWindowClose onClick={modal} className="close" />
      </div>
    </>
  );
};
export default AddClientes;
