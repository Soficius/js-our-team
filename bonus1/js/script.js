// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// # MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// # MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// # MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// # BONUS 1:
// Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)
// # BONUS 2:
// Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato

// * prendo gli elementi dal dom per stampare in pagina
const ourTeam = document.getElementById('OurTeam')


// * creare un array di oggetti con le informazioni fornite
const team =[
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon ',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    { 
        nome: 'Scott Estrada ',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    { 
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
]

//* Stampare su console le informazioni di nome, ruolo e la stringa della foto
for(let key in team){
    console.log(team[key])
}
//* Stampare le stesse informazioni su DOM sottoforma di stringhe
function createElementFromContact(contact){
    const container = document.createElement('div')
    const nome = document.createElement('p')
    const ruolo = document.createElement('p')
    const foto = document.createElement('img')

    nome.innerText = contact.nome
    ruolo.innerText = contact.ruolo
    foto.src = 'img/'+contact.foto

    container.appendChild(foto)
    container.appendChild(nome)
    container.appendChild(ruolo)
    return container
}

for(let i = 0; i < team.length; i++){
    ourTeam.appendChild(createElementFromContact(team[i]))
}