let leInput = document.getElementsByTagName('input')[0]
let buttonAjouter = document.getElementsByTagName('button')[0]
let laListe = document.getElementById('laListe')

let laTache;

let creationTache = ()=>{
    // CREATION DE BALISE
    let creatCheck = document.createElement('div') 
    let creatTextCheck = document.createElement('p')
    let creatLienCheck = document.createElement('a')
    let creatLienEdit = document.createElement('a')
    let creatLienDelete = document.createElement('a')
    let creatButtonCheck = document.createElement ('i')
    let creatButtonEdit = document.createElement ('i')
    let creatButtonDelete = document.createElement ('i')
    // IMPLANTATION DES BALISE + CLASS
    laListe.appendChild(creatCheck,laListe)
    creatCheck.className = 'border border-dark px-3 py-3 my-3 text-uppercase'
    creatCheck.appendChild(creatTextCheck,creatCheck)
    creatTextCheck.innerText = laTache
    creatTextCheck.className = 'd-inline espace-text-button'
    creatCheck.appendChild(creatLienCheck,creatCheck)
    creatLienCheck.className = 'px-3'
    creatLienCheck.id= 'check'
    creatCheck.appendChild(creatLienEdit,creatCheck)
    creatLienEdit.className = 'px-3'
    creatLienEdit.id= 'edit'
    creatCheck.appendChild(creatLienDelete,creatCheck)
    creatLienDelete.className = 'px-3'
    creatLienDelete.id = 'delete'
    creatLienCheck.appendChild(creatButtonCheck,creatLienCheck)
    creatLienEdit.appendChild(creatButtonEdit,creatLienEdit)
    creatLienDelete.appendChild(creatButtonDelete,creatLienDelete)
    // INSERTION DES ICONES SUR LES LIENS
    creatButtonCheck.className = 'fas fa-check-circle text-success'
    creatButtonEdit.className = 'fas fa-edit text-warning'
    creatButtonDelete.className = 'fas fa-trash-alt text-danger'
    // EVENT  DES DIFFERENTS BUTTON DE MODIFICATION
    let lesButtonModif = document.getElementsByTagName('a')
    for(let i=0;i<lesButtonModif.length;i++){
        lesButtonModif[i].addEventListener('click',()=>{
            if(lesButtonModif[i].id == "check"){
                creatCheck.classList.add('bg-success')
                creatButtonCheck.className = 'fas fa-minus-circle text-danger'
            } else if(lesButtonModif[i].id=="edit"){
                let creatInput = document.createElement('input')
                creatTextCheck.replaceWith(creatInput)
                creatInput.className = "espace-input-button"
            }
        })
    }
    
}





buttonAjouter.addEventListener('click',()=>{
    creationTache()
    console.log(laTache)
})

leInput.addEventListener('focusout',()=>{
    laTache = event.target.value
})