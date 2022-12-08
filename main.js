// function tamagotchi() {
//     document.getElementById('tamagotchiGender').innerHTML = " ";
//     let textmessage = " ";
//     let sexe = prompt("Quel est le genre de votre tamagotchi ?", "male/femelle"); // reset text

//     if (sexe == "male") {
//         textmessage = "Votre tamagotchi est un " + sexe;
//     }
//     else if (sexe == "femelle") {
//         textmessage = "Votre tamagotchi est une " + sexe;
//     }
//     else {
//         tamagotchi(); 
//     }

//     document.getElementById('tamagotchiGender').innerHTML += textmessage;
// }


function tamagotchi() {
    document.getElementById('tamagotchiGender').innerHTML = " "; // reset text
    let textmessage = " ";
    let sexeInput = prompt("Quel est le genre de votre tamagotchi ?", "male/femelle"); 
    let sexeOutput = sexeInput.toLowerCase();
    sexeOutput = sexeOutput.replace("â", "a");

    if (sexeOutput == "male") {
        textmessage = "Votre tamagotchi est un " + sexeOutput;
    }
    else if (sexeOutput == "femelle") {
        textmessage = "Votre tamagotchi est une " + sexeOutput;
    }
    else {
        tamagotchi(); 
    }

    document.getElementById('tamagotchiGender').innerHTML += textmessage;
    return console.log("OK");
}
