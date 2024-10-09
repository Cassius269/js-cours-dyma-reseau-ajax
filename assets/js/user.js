/********  CRÉATION ET ENVOI D'UN NOUVEL UTILISATEUR A UN SERVEUR API *******/
const user = {
    name: "Tintin",
    email: "tintin@example.com"
}

console.log(user);

// 1ère méthode avec la méthode fetch classique 
let chargeUtileUser = JSON.stringify(user);// Transformer un objet classique au format JSON
console.log(chargeUtileUser);

fetch('https://jsonplaceholder.typicode.com/users/',{
    method: 'POST', // création d'une nouvelle donnée
    headers: { 
        'Content-Type': 'application/json'// Envoi d'un objet au format JSON
    },
    body: chargeUtileUser
})
.then(response => response.json())// depuis la réponse, transformer l'objet JSON nouvellement créé au format d'objet classique
.then (data => console.log('Donnée envoyée au serveur API :',data))
.catch(error => console.log('erreur', error));

//2ème méthode l'utilisation d'async/await
// Création d'une fonction asynchrone : code non bloquant
async function createNewUser(chargeUtile){
    try {
      const promise = await fetch('https://jsonplaceholder.typicode.com/users/',{
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: chargeUtileUser
    });

    const data = await promise.json();

    console.log( 'data envoyée au serveur API :', data);
    } catch (error) {
        console.log('erreurr :', error);
    }
}


createNewUser(chargeUtileUser); // Création d'un nouvel utilisateur
