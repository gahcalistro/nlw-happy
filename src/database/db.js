const database = require('sqlite-async')

function execute(db) {
    // Creating tables
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}

module.exports =
    // Init database and if not exists, it creates a new one
    database.open(__dirname + '/database.sqlite')
    .then(execute)