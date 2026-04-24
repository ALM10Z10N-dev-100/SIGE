const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db("calificacionesDB");
        const alumnosCollection = db.collection("alumnos");

        const nombresNiña = ["Sofía", "Valentina", "Camila", "Lucía", "Isabella", "Renata", "Ximena", "Mariana", "Regina", "Ana"];
        const nombresNiño = ["Mateo", "Emiliano", "Diego", "Santiago", "Leonardo", "Daniel", "Sebastián", "Alejandro", "Luis", "Carlos"];

        const apellidosNiña = ["García", "Martínez", "López", "Flores", "Torres", "Ramírez", "Mendoza", "Castillo", "Silva", "Reyes"];
        const apellidosNiño = ["Hernández", "Gómez", "Pérez", "Rodríguez", "Morales", "Vargas", "Cruz", "Ortega", "Ramos", "Fernández"];

        const edades = [3, 4, 5];
        const alumnos = [];

        for (let i = 1; i <= 206; i++) {
            const edad = edades[Math.floor(Math.random() * edades.length)];
            const genero = i % 2 === 0 ? "Niño" : "Niña";
            const grupo = `Grupo ${String.fromCharCode(65 + (i % 5))}`;

            const listaNombres = genero === "Niña" ? nombresNiña : nombresNiño;
            const listaApellidos = genero === "Niña" ? apellidosNiña : apellidosNiño;

            const nombre = listaNombres[Math.floor(Math.random() * listaNombres.length)];
            const apellido = listaApellidos[Math.floor(Math.random() * listaApellidos.length)];

            const grados = ["1", "2", "3"];
            const grado = grados[Math.floor(Math.random() * grados.length)];

            alumnos.push({
                nombre,
                apellido,
                edad,
                genero,
                grupo,
                grado
            });
        }

        const resultado = await alumnosCollection.insertMany(alumnos);
        console.log(`✅ Se insertaron ${resultado.insertedCount} alumnos correctamente`);
    } catch (error) {
        console.error("❌ Error al insertar alumnos:", error);
    } finally {
        await client.close();
    }
}

run();
