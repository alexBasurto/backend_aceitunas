import express from "express";

import router from "./routes/router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.send("<h1>LMLA - Liga Mundial de Lanzamiento de Aceitunas</h1>")
})

app.use("/", router);

app.listen(3001, ()=> {
    console.log('Servidor en marcha FOCK. Pto 3001.');
});