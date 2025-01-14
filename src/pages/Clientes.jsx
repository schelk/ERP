import React, { useState } from "react";
import "../styles/AddClientes.css";
import "../styles/Clientes.css";
import cliente from "../components/AddClientes";
import AddClientes from "../components/AddClientes";

// import AddClientes from "../components/AddClientes";

const Clientes = () => {
  const [cliente, setCliente] = useState([]);
  const [id, setId] = useState(1);

  const [modal, setModal] = useState(false);
  const DefineModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div className="cadastra-cliente">
        <button onClick={DefineModal}>CADASTRAR CLIENTE</button>
        <button onClick={() => console.log(cliente)}>AAAAA</button>
      </div>
      {modal && (
        <div className="modal">
          <AddClientes
            modal={DefineModal}
            cliente={cliente}
            setCliente={setCliente}
            id={id}
            setId={setId}
          />
        </div>
      )}

      <div className="resumo-cliente">
        <h1>Resumo de clientes</h1>
        <div>
          <ul>
            {cliente.map((cliente) => (
              <li key={cliente.id}>Nome: {cliente.nome}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
