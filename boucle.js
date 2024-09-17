for (let pas = 0; pas < 5; pas++) {
    // Ceci sera exécuté 5 fois
    // À chaque éxécution, la variable "pas" augmentera de 1
    // Lorsque'elle sera arrivée à 5, le boucle se terminera.
    // console.log("Faire " + pas + " pas vers l'est");
}

// let i = 0

// do {
//     i += 1;

//     console.log(i);
// } while (i < 5);



let i = 0;
let j = 8;

vérifIetJ: while (i < 4) {
    console.log("i : " + i);
    i += 1;

    vérifJ: while (j > 4) {
        console.log("j : " + j);
        j -= 1;
        if (j % 2 === 0) {
            continue vérifJ;
        }
        console.log(j + " est impaire.");
    }
    console.log("i = " + i);
    console.log("j = " + j);
}
