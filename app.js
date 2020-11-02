const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la Ciudad',
        demand: true
    }
}).argv

const serv = require('./servicios/servicios');

const clima = require('./servicios/clima');




const getInfo = (direc) => {

    serv.getCoor(direc)
        .then(data => {

            clima.getClima(data.lat_, data.long_)
                .then(data => {

                    console.log(`El clima de ${direc}  es de  ${data} °C`);
                });
        })

}

getInfo(argv.direccion);
//.then(console.log);