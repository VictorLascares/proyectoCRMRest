function mostrarAlerta(mensaje) {
  const alerta = document.querySelector(".bg-red-200");

  if (!alerta) {
    const alerta = document.createElement("p");
    alerta.classList.add(
      "bg-red-200",
      "text-red-700",
      "font-bold",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center"
    );
    alerta.textContent = mensaje;

    const formulario = document.querySelector("#formulario");
    formulario.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function validar(obj) {
  return !Object.values(obj).every((input) => input !== "");
}

export { mostrarAlerta, validar };
