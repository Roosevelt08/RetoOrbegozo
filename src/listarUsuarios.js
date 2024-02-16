const axios = require("axios");

const listarUsuarios = async (event) => {
  try {
    // Obtener datos de SWAPI
    const response = await axios.get("https://swapi.dev/api/people/");
    const usuarios = response.data.results;

    return {
      statusCode: 200,
      body: JSON.stringify(usuarios),
    };
  } catch (error) {
    console.error("Error al listar usuarios:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error interno del servidor" }),
    };
  }
};

module.exports = {
  listarUsuarios,
};

