// Stworzenie aplikacji która pozwoli na zapisanie całego obiektu do pliku. Z wykorzystaniem funkcji 
// pozwalającej na przekonwertowanie obiektu na postać tekstową (JSON.stringify).
// Obiekt do zapisu:
const fs = require('fs');

const user = {
    name: 'Jan',
    lastName: 'Nowak'
};


fs.writeFileSync('user.json', JSON.stringify(user));


// Wynik zapisać do pliku user.json