// Rozszerzenie aplikacji z zadania 7 o dynamiczne wprowadzanie danych które chcemy zapisać do pliku. Do wykorzystania zewnętrzny moduł yargs.
// Przykład uruchomienia aplikacji

// node app.js --name=Adam --lastName=Mickiewicz
const yargs = require("yargs");
const fs = require('fs');

const user = {
    name: yargs.argv.name,
    lastName: yargs.argv.lastName,
}

console.log(`Name: ${yargs.argv.name}, LastName: ${yargs.argv.lastName}`)
fs.writeFileSync('user.json', JSON.stringify(user));
