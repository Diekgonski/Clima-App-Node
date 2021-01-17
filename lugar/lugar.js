const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);

    try {

        const opciones = axios.create({
            baseURL: 'http://api.weatherapi.com/v1/current.json',
            params: {
                key: '9696a1a40c184e90b92172017211601',
                q: encodeUrl
            }
        });

        const resp = await opciones.get();

        if (resp.data.error) {
            throw new Error(`No hay resultados para ${dir}`);
        }

        const data = resp.data.current;
        const direccion = resp.data.location;
        const respuesta = {
            latitud: direccion.lat,
            longitud: direccion.lon,
            direccion: `${direccion.name}, ${direccion.region}, ${direccion.country}`
        };


        return {
            respuesta
        };
    } catch (error) {
        return `La dirección ${dir} no es valida`;
    }
};

module.exports = {
    getLugarLatLng
};