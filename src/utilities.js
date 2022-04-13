const { herokuUrl, port } = require("./config");

const buildUrl = (endpoint) => {
    return process.env.NODE_ENV === "production" ? herokuUrl + endpoint : `http://localhost:${port}${endpoint}`;
}

module.exports = {
    buildUrl
}