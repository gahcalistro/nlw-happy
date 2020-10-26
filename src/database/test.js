const database = require('./db');
const saveOrphanage = require('./saveOrphanage');

// ASYNC AWAIT => Allows you to not use .then and a function inside anymore. You can only use await.
database.then(async db => {
    const data = {
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Lar das Meninos",
        about: " Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "012365478963",
        images: [
            "https://images.unsplash.com/photo-1459535653751-d571815e906b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80"
        ].toString(), // Transform into string
        instructions: "Venha se sentir a vontade e traga muito amor e paciência para dor.",
        opening_hours: "Horário de visitas das 8h às 18h",
        open_on_weekends: "0"
    }

    // Insert data into the table
    //await saveOrphanage(db, data);

    // Consult data from table
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // Consult data by id
    //const orphanage = await db.all("SELECT * FROM orphanages WHERE id = '4'")
    //console.log(orphanage)

    // Remove data from table
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))
})