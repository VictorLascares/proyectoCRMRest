import { obtenerClientes } from "./API.js";

(function () {
  const listado = document.querySelector("#listado-clientes");

  document.addEventListener("DOMContentLoaded", mostrarClientes);

  async function mostrarClientes() {
    const clientes = await obtenerClientes();

    clientes.forEach((cliente) => {
      const { nombre, email, telefono, empresa, id } = cliente;

      const row = document.createElement("tr");

      const columnaNombre = document.createElement("td");
      columnaNombre.classList.add(
        "px-6",
        "py-4",
        "whitespace-no-wrap",
        "border-b",
        "border-gray-200"
      );

      const textoNombre = document.createElement("p");
      textoNombre.classList.add(
        "text-sm",
        "leading-5",
        "font-medium",
        "text-gray-700",
        "text-lg",
        "font-bold"
      );
      textoNombre.textContent = nombre;

      const textoEmail = document.createElement("p");
      textoEmail.classList.add("text-sm", "leading-10", "text-gray-700");
      textoEmail.textContent = email;

      columnaNombre.appendChild(textoNombre);
      columnaNombre.appendChild(textoEmail);

      const columnaTelefono = document.createElement("td");
      columnaTelefono.classList.add(
        "px-6",
        "py-4",
        "whitespace-no-wrap",
        "border-b",
        "border-gray-200"
      );

      const textoTelefono = document.createElement("p");
      textoTelefono.classList.add("text-gray-700");
      textoTelefono.textContent = telefono;

      columnaTelefono.appendChild(textoTelefono);

      const columnaEmpresa = document.createElement("td");
      columnaEmpresa.classList.add(
        "px-6",
        "py-4",
        "whitespace-no-wrap",
        "border-b",
        "border-gray-200",
        "leading-5",
        "text-gray-700"
      );

      const textoEmpresa = document.createElement("p");
      textoEmpresa.classList.add("text-gray-600");
      textoEmpresa.textContent = empresa;

      columnaEmpresa.appendChild(textoEmpresa);

      const columnaAcciones = document.createElement("td");
      columnaAcciones.classList.add(
        "px-6",
        "py-4",
        "whitespace-no-wrap",
        "border-b",
        "border-gray-200",
        "text-sm",
        "leading-5"
      );

      const enlaceEditar = document.createElement("a");
      enlaceEditar.classList.add(
        "text-teal-600",
        "hover:text-teal-900",
        "mr-5"
      );
      enlaceEditar.href = `editar-cliente.html?id=${id}`;
      enlaceEditar.textContent = "Editar";

      const enlaceEliminar = document.createElement("a");
      enlaceEliminar.classList.add(
        "text-red-600",
        "hover:text-red-900",
        "eliminar"
      );
      enlaceEliminar.href = "#";
      enlaceEliminar.textContent = "Eliminar";
      enlaceEliminar.dataset.cliente = id;

      columnaAcciones.appendChild(enlaceEditar);
      columnaAcciones.appendChild(enlaceEliminar);

      row.appendChild(columnaNombre);
      row.appendChild(columnaTelefono);
      row.appendChild(columnaEmpresa);
      row.appendChild(columnaAcciones);

      listado.appendChild(row);
    });
  }
})();
