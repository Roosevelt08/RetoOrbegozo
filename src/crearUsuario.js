const axios = require("axios");
const { v4 } = require("uuid");

const crearUsuario = async (event) => {
  try {
    const { name, height, mass } = JSON.parse(event.body);

    // Validación de campos obligatorios
    if (!name || !height || !mass) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Campos obligatorios faltantes" }),
      };
    }

    // Crear un nuevo objeto de usuario con datos de SWAPI
    const id = v4();
    const fechaCreacion = new Date().toISOString();
    const usuario = { id, name, height, mass, fechaCreacion };

    return {
      statusCode: 201,
      body: JSON.stringify(usuario),
    };
  } catch (error) {
    console.error("Error al crear usuario:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error interno del servidor" }),
    };
  }
};

module.exports = {
  crearUsuario,
};


