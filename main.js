let leInput = document.getElementsByTagName('input')[0]
let buttonAjouter = document.getElementsByTagName('button')[0]
let laListe = document.getElementById('laListe')

let laTache;
let saveInput;

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
    let creatButtonSave = document.createElement ('i')
    
    // IMPLANTATION DES BALISE + CLASS
    laListe.appendChild(creatCheck,laListe)
    creatCheck.className = 'border border-dark px-3 py-3 my-3 text-uppercase'
    creatCheck.appendChild(creatTextCheck,creatCheck)
    creatTextCheck.innerText = laTache
    creatTextCheck.className = 'd-inline'
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
    creatButtonSave.className = 'fas fa-save text-info'
    // LES BOOLEAN
    let editor = true




    // EVENT  DES DIFFERENTS BUTTON DE MODIFICATION
    let lesButtonModif = document.getElementsByTagName('a')
    for(let i=0;i<lesButtonModif.length;i++){
        lesButtonModif[i].addEventListener('click',()=>{
            // LE BOUTON CHECK
            if(lesButtonModif[i].id == "check" && creatButtonCheck==event.target){
                console.log(event.currentTarget)
                event.currentTarget.parentNode.classList.toggle('bg-success')
                event.target.className = 'fas fa-minus-circle text-danger'
                editor=false
            // LE BOUTON EDITOR
            } else if(lesButtonModif[i].id=="edit" && editor == true && creatButtonEdit==event.target){
                let creatInput = document.createElement('input')
                creatInput.value = creatTextCheck.innerText
                event.currentTarget.parentNode.firstElementChild.replaceWith(creatInput)
                event.currentTarget.nextSibling.classList.add("d-none")
                event.currentTarget.previousSibling.classList.add("d-none")
                event.target.replaceWith(creatButtonSave)
                creatInput.addEventListener('focusout',()=>{
                    saveInput = event.target.value
                    console.log(saveInput)
                })
                creatLienEdit.addEventListener('click',()=>{  
                    creatLienCheck.classList.remove('d-none')
                    creatLienDelete.classList.remove('d-none')
                    creatTextCheck.innerText = saveInput
                    creatInput.replaceWith(creatTextCheck)
                    creatButtonSave.replaceWith(creatButtonEdit)
                    
                })
                // LE BOUTON DELETE
            } else if(lesButtonModif[i].id=="delete" && creatButtonDelete==event.target){
                reponse = prompt("Entrer votre mdp :")
                if(reponse=="hello"){
                    creatCheck.remove()  
                } else {
                    alert("Va t'en imposteur")
                }
            }
        })
    }
    
}





buttonAjouter.addEventListener('click',()=>{
    creationTache()
    leInput.value = ""
    console.log(laTache)
})

leInput.addEventListener('focusout',()=>{
    laTache = event.target.value
})