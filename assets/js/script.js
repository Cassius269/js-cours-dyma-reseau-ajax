// Rechercher une ressource todo à l'ID 1 et affichage de l'objet
fetch('https://jsonplaceholder.typicode.com/todos/1') // on obtient une promesse
// .then( response => response.json()) // convertir la promesse en objet JSON
.then( response => response.json()) // convertir la promesse en objet JSON
.then( data => {// Traitement de la donnée reccueillie
    console.log(data);
})
.catch(error => {
    console.log(error);
})


// Création d'une fonction asynchrone de récupération de ressource
async function getRessource(ressource){
    try {
        const promise = await fetch(ressource);
        const data = await promise.json();
    
        console.log(data);
    } catch (error) {
        console.error("Erreur lors de la récupération de la ressource", error);
    }
   
}

getRessource('https://jsonplaceholder.typicode.com/users/1');