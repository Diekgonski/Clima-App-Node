const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/*
lugar.getLugarLatLng(argv.direccion)
    .then(console.log);*/

/*
clima.getClima(4.6, -74.08)
    .then(console.log);*/

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coords.respuesta.latitud, coords.respuesta.longitud);
        return `El clima de ${coords.respuesta.direccion} es de ${temperatura} grados centigrados`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);