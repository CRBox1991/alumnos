const express = require("express");
const cors = require('cors');
const alumnoRouters = require("./routers/alumno.router");
const errorHanding = require("./error/errorHandling")
const app = express();
const notasRouters = require("./routers/notas.router")


app.set("port", process.env.PORT || 4000);

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(alumnoRouters);
app.use(notasRouters)
app.use(function(req, res, next){

    res.status(400).json({
        error:true,
        codigo: 404,
        mesaage:"Endpoint doesnt found"
    })
})

app.use(errorHanding);

module.exports = app