const axios = require('axios');

const getClima = async(latitud, longitud) => {

    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=2862985509b2dfd974d720dd8ae2ec77&units=metric`);

    return respuesta.data.main.temp;

};

module.exports = {
    getClima
}