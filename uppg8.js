

function uppg8() {
    // Skapa en array med fem personobjekt
    let persons = [
        { name: "Kristina", age: 27 },
        { name: "Anna", age: 28 },
        { name: "Mohi", age: 29 },
        { name: "Tina", age: 30 },
        { name: "Nilo", age: 31 }
    ];

    // Skapa en funktion som filtrerar personer över 30 år
    function filterOlderThan30(personArray) {
        personArray.forEach(person => {
            if (person.age > 30) {
                console.log(person.name);
            }
        });
    }

    // Anropa funktionen och skicka med arrayen som argument
    filterOlderThan30(persons);
}

 uppg8();
 
module.exports = { uppg8 };