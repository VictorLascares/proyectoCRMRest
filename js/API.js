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

export { nuevoCliente };
