const url = "http://localhost:4000/clientes";

const nuevoCliente = async (cliente) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// Obtiene todos los clientes
const obtenerClientes = async () => {
  try {
    const respuesta = await fetch(url);
    const clientes = await respuesta.json();
    return clientes;
  } catch (error) {
    console.log(error);
  }
};

// Eliminar cliente
const eliminarCliente = async (cliente) => {
  try {
    await fetch(`${url}/${cliente}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

const obtenerCliente = async (id) => {
  try {
    const respuesta = await fetch(`${url}/${id}`);
    const cliente = await respuesta.json();
    return cliente;
  } catch (error) {
    console.log(error);
  }
};

const actualizarCliente = async (cliente) => {
  try {
    await fetch(`${url}/${cliente.id}`, {
      method: "PUT",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export { nuevoCliente, obtenerClientes, eliminarCliente, obtenerCliente, actualizarCliente };
