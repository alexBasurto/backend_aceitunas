const nombresAceitunas = [
    "Manzanilla",
    "Gordal",
    "Verdial",
    "Hojiblanca",
    "Frantoio"
];

let aceitunas = [];
let maxId = 1;
for (let i = 0; i < 5; i++) {
    const newAceituna = {
        id: maxId++,
        nombre: nombresAceitunas[i],
        peso: Math.floor(Math.random()*256),
    }
    aceitunas.push(newAceituna);
};

const getAll = (req,res) => {
    // Falta la parte de conseguir los datos de la bbdd.
    res.json(aceitunas);
};

const getById = (req,res) => {
    const id = req.params.id;
    try{
        res.json(aceitunas.find(element => element.id==id));
    }
    catch(e) {
        res.status(400).send("Algo ha fallado, asegúrate de que el id existe.");
    }
}

const create = (req,res) => {
    const {tipo, peso} = req.body;
    if (tipo === undefined || peso === undefined){
        return res.status(400).send("Falta el 'tipo' y/o el 'peso'.");
    }
    const aceituna = {
        id: maxId++,
        tipo,
        peso
    };
    aceitunas.push(aceituna);
    res.json(aceituna);
}

const update = (req,res) => {
    const id = req.params.id;
    const {tipo, peso} = req.body; //req.body.tipo, req.body.peso...
    //con put o pash la información nos viene en req.body
    if (tipo === undefined || peso === undefined){
        return res.status(400).send("Falta el 'tipo' y/o el 'peso'.");
    }
    try {
        const aceituna = aceitunas.find(element => element.id==id);
        aceituna.tipo = tipo;
        aceituna.peso = peso;
        res.json(aceituna);
    }
    catch(e) {
        res.status(400).send("Algo ha fallado, asegúrate de que el id existe y de que envías los datos de 'tipo' y 'peso'.");
    }
};

const remove = (req,res) => {
    const id = req.params.id;
    try {
        const aceituna = aceitunas.find(element => element.id==id);
        aceitunas = aceitunas.filter(element => element.id!=id);
        res.json(aceituna);
    }
    catch(e) {
        res.status(400).send("Algo ha fallado, asegúrate de que el id existe.");
    }
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
};