let leInput = document.getElementsByTagName('input')[0]
let buttonAjouter = document.getElementsByTagName('button')[0]
let laListe = document.getElementById('laListe')
let leTrie = document.querySelectorAll('#le-trie button')
let laTache;
let laTacheEnter;
let saveInput;
let saveOver;
let elemPri;
let tabTermine=[]

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
    creatCheck.className = 'border border-dark px-3 py-3 my-3 text-uppercase bg-blanc'
    creatCheck.setAttribute('draggable','true')
    creatCheck.draggable = "true"
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
                event.target.classList.toggle('text-danger')
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
                reponse = prompt("Taper OUI si vous voulez supprimer cette tâche")
                if(reponse=="OUI"){
                    creatCheck.remove()  
                } else {
                    alert("Vous l'avez mal ecrit, veuillez réeesayer avec des majuscules!")
                }
            }
        })
    }
    let checkDone = []
    let checkNoDone = []
    // LE TRIE
    /// LE BOUTON A FAIRE
    leTrie[1].addEventListener('click',()=>{
        if(creatCheck.classList[7]=="bg-success"){
            creatCheck.classList.add('done')
        }
        event.preventDefault()
    })
    
    /// LE BOUTON TERMINER
    leTrie[2].addEventListener('click',()=>{
        if(creatCheck.classList[7]=="bg-success"){
            creatCheck.classList.remove('nodone')
        } else {
            creatCheck.classList.add('nodone')
        }
    })
    // LES FONCTIONS
    let dragStart = ()=>{
        console.log('start')
        setTimeout(()=>(creatCheck.className='invisible'),0)
        elemPri = event.currentTarget
       
    }
    let dragEnd = ()=>{
        console.log('end')
        creatCheck.classList.remove('invisible') 
        creatCheck.className = 'border border-dark px-3 py-3 my-3 text-uppercase bg-blanc'
        laListe.classList.remove('invisible')
    }
    let dragOver=(e)=>{
        e.preventDefault()
        saveOver = event.currentTarget
        
    }
    let dragEnter=(e)=>{
        e.preventDefault()
    }
    let dragLeave=()=>{
    }
    let recup=()=>{
        console.log(saveOver.innerHTML)
        console.log(elemPri.innerHTML)
        let saveInner = saveOver.innerHTML
        saveOver.innerHTML = elemPri.innerHTML
        elemPri.innerHTML = saveInner
    }
    let drop=()=>{
        console.log(saveOver)
        recup()
        // e.preventDefault()
    }
    // L'ECOUTE DES CHECK
    creatCheck.addEventListener('dragstart',dragStart)
    creatCheck.addEventListener('dragend',dragEnd)
    creatCheck.addEventListener('dragover',dragOver)
    creatCheck.addEventListener('dragenter',dragEnter)
    creatCheck.addEventListener('dragleave',dragLeave)
    creatCheck.addEventListener('drop',drop)
    creatCheck.addEventListener('click',()=>{
        elemPri = event.target
    })
}
buttonAjouter.addEventListener('click',()=>{
    laTache = leInput.value
    creationTache()
    leInput.value = ""
    event.preventDefault()
    console.log(laTache)
})
