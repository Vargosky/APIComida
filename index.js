//importar dependencia
const connection = require("./database/connection.js")
const express = require("express");
const cors = require("cors")

//creamos el servidor

const app = express();
//const port = 3001;
const port = process.env.PORT || 4000;
//consfigurar el cors

// app.use(cors());
// Configurar CORS
app.use(cors({
    origin: '*',
    credentials: true,
}));


//convertir todo a json

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//conexion a la bd

// console.log("BIENVENIDO A LA API")
connection();

//rutas
const userRoutes = require("./routes/pathUser.js");
const mmppRoutes= require("./routes/routeMateriaPrima");
// const subProductosRoutes = require("./routes/routeSubproducto");
// const produccionRoutes = require("./routes/routeProduccion");

console.log(userRoutes);

app.use("/api/user", userRoutes);
app.use("/api/mmpp/", mmppRoutes);
// app.use("/api/subproducto/", subProductosRoutes);
// app.use("/api/make/",produccionRoutes);

app.get("/", (req, res) => {
    res.send("la pagina de Inicio");
});



//hacer que escuche

module.exports = app;


