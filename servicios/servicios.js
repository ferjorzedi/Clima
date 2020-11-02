const axios = require('axios');

const getCoor = async(ciudad) => {

    const url = `https://geocode.xyz/Hauptstr.,+57632+"${ciudad}"?json=1`;

    const instance = axios.create({
        baseURL: url,
        timeout: 5000

    });

    const rs = await instance.get()

    const city = rs.data.standard.city;
    const long_ = rs.data.longt;
    const lat_ = rs.data.latt;

    return {
        city,
        long_,
        lat_
    }

}


module.exports = {
    getCoor
}