let leInput = document.getElementsByTagName('input')[0]
let buttonAjouter = document.getElementsByTagName('button')[0]
let laListe = document.getElementById('laListe')

let laTache;

let creatCheck = document.createElement('div')
let creatTextCheck = document.createElement('p')
let creatButtonCheck = document.createElement('button')

let creationTache = ()=>{
    laListe.appendChild(creatCheck,laListe)
    creatCheck.className = 'border border-dark px-3 py-3 my-3 text-uppercase'
    creatCheck.appendChild(creatTextCheck,creatCheck)
    creatTextCheck.innerText = laTache
    creatTextCheck.className = 'd-inline espace-text-button'
    creatCheck.appendChild(creatButtonCheck,creatCheck)
    creatButtonCheck.innerHTML = "valider"
}




buttonAjouter.addEventListener('click',()=>{
    creationTache()
    console.log(laTache)
})

leInput.addEventListener('focusout',()=>{
    laTache = event.target.value
})