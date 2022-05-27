//lev1_2: Objects
const person = {
    name: "Jenny",
    alter: 25
};

let sagNameAlter = () => {
    alert(person);
}

//========================================================
//lev1_4: Objects Accessing
// let unsereHaustiere = [
//     {
//     tiertyp: "Katze",
//     names: [
//         "Gipsy",
//         "Nala",
//         "Dinky"
//     ]
//     },
//     {
//     tiertyp: "Hunde",
//     names: [
//         "Knöpfchen",
//         "Pinselchen",
//         "Droopy"
//     ]
//     }
// ];


// console.log(unsereHaustiere.names[1]); //Nala
// console.log(unsereHaustiere.names[2]); //Droopy

//========================================================
//lev1_5: Objects Accessing
// let unserLager = {
//     schreibtisch: {
//         schublade: "Hefter"
//     },
//     schrank: {
//         "Obere Schublade": {
//         Ordner1: "Dokumente",
//         Ordner2: "Geheimnisse"
//     },
//     "Untere Schublade": "Cola"
//     }
// };

// console.log(unserLager.schrank["Obere Schublade"].Ordner2);
// console.log(unserLager.schrank["Untere Schublade"]);

//========================================================
//lev1_6: Objects Arrays Accessing
let myMusic = [
    {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true
    },
    {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true
    },
    {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true
    },
    {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true
    },
    {
    artist: "Artist",
    title: "Title",
    release_year: 1996,
    medium: ["Download"],
    gold: true
    }
];


console.log(myMusic[0].artist); //The Beatles
console.log(myMusic[1].medium[3]); // Von Pink Floyd: "Download"
console.log(myMusic[1].gold); // Von Pink Floyd: true
console.log(myMusic[2].release_year + " und " + myMusic[3].release_year); // 1971 und 1983
console.log(myMusic[3].medium[2]); // Von Metallica: "MC"
//console.log(myMusic[3].title.find("Ride")); 
console.log(myMusic[3].title.slice(17,21));// Von Metallica das Wort: Ride
console.log(myMusic[2].title.slice(-2));// Von Led Zeppelin das Wort: IV:
console.log(myMusic[1].artist.slice(5));// Von Pink Floyd das Wort: Floyd

//========================================================
//lev1_7: Objects Arrays Loop Accessing

let myMusic1 = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

//In dieser Übung lernen wir, wie man auf die Objekte mit Hilfe von forEach() zugreift.
// Verwende den Code aus dem Kommentarbereich.
// Greife auf die Eigenschaften des Objekts zu und gib folgende Werte mit forEach() 
// im HTML aus:
// Alle “artist” 
// Alle “title”
// Alle “medium”

myMusic1.forEach(ele => {
    console.log(ele.artist);
    console.log(ele.title);
    console.log(ele.medium);
})

// Bonus Aufgabe:
// Gib alle “release_year” älter als 1975 aus

// myMusic1.forEach(ele => {
//     console.log(release_year < 1975);
// })

//========================================================
//lev1_8: Objects Arrays Loop Accessing

let studentData = [
    {
      name: "Alex",
      age: 23,
      coop: false,
      address: {
        street: "Don Valley Business Park",
        city: "Toronto",
        postalCode: "ONM3C3E5"
      },
      emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
      name: "Sandra",
      age: 22,
      coop: true,
      address: {
        street: "34 Lawrence Ave",
        city: "Toronto",
        postalCode: "ONM3C0E5"
      },
      emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

//  Verwende den Code aus dem Kommentarbereich.
// Greife mithilfe von forEach() oder map() auf Eigenschaften dieses Objekts zu.
// Schreibe Methoden für das Objekt, die in der Console folgendes ausgeben:
// name
// coop
// city
// emails

studentData.forEach(ele => {
    console.log(ele.name); //name
    console.log(ele.coop); //coop
    console.log(ele.address.city); //city
    console.log(ele.emails); //emails
})