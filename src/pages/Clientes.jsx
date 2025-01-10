import React, { useState } from "react";
import "../styles/clientes.css";
import AddClientes from "../components/AddClientes";
// import AddClientes from "../components/AddClientes";

const Clientes = () => {
  const [modal, setModal] = useState(false);
  const DefineModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div className="cadastra-cliente">
        <button onClick={DefineModal}>CADASTRAR CLIENTE</button>
      </div>
      {modal && (
        <div className="modal">
          <AddClientes modal={DefineModal} />
        </div>
      )}
    </div>
  );
};

export default Clientes;
