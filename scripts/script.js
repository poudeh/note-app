const showAddModalBtn = document.getElementById('add-note-btn')
const mainModal = document.getElementById('main-modal')
const deleteModal = document.getElementById('Delete-Modal')
const closeMainModal = document.getElementById('close-main-Modal')

const addNoteBtn = document.getElementById('confirmAddNote')
const deleteNoteBtn = document.getElementById('deleteBtn')

const noteTitle = document.getElementById('noteTitle')
const noteDesc = document.getElementById('noteDesc')

const mainModalTitle = document.getElementById('main-modal__title')

let notesContainer = []
let mainNoteID = null



addNoteBtn.addEventListener('click', (event) => {
    event.preventDefault()

    if (mainModalTitle.textContent == 'add Note!') {
        let newNote = {
            id: notesContainer.length + 1,
            Title: noteTitle.value,
            description: noteDesc.value,
            date:getNowDate()
        }
        notesContainer.push(newNote);
        saveIntoLocalStorage(notesContainer)
        newNoteGenerator(notesContainer);


    } else {
       let mainNote = notesContainer.find(note=> {
            return note.id == mainNoteID
        })
        let newNotes = notesContainer.filter(note=> {
            return note !== mainNote
        })
        notesContainer = newNotes
        mainNote.Title = noteTitle.value;
        mainNote.description = noteDesc.value;

        notesContainer.push(mainNote)
        saveIntoLocalStorage(notesContainer)
        newNoteGenerator(notesContainer);


    }




})

const newNoteGenerator = (notesArray) => {
    const notesWrapper = document.getElementById('notes-Container')
    console.log(notesArray);
    notesWrapper.innerHTML = ''
    notesArray.forEach(note => {
        notesWrapper.insertAdjacentHTML('beforeend', `
        <div
        class="relative mt-2.5 flex w-85 h-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
        <div class="p-6">
          <h5
            class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            ${note.Title}
          </h5>
          <p class="block font-sans text-base text-wrap font-light leading-relaxed text-inherit">
          ${note.description}
          </p>
        </div>
        <div class="p-6 pt-0">
          <button
          onclick=showDeleteModal(${note.id})
            class="select-none rounded-lg bg-pink-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true">
            Delete Note
          </button>
          <button
          onclick=showEditModal(${note.id})
            class="select-none rounded-lg bg-blue-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true">
            Edit Note
          </button>
          <span class="block mt-2 text-gray-400">${note.date}</span>
        </div>
      </div>
        
        `)


    });
    closeModalFunc(mainModal)

}

function showDeleteModal(noteID) {
    mainNoteID = noteID
    showModalFunc(deleteModal)


}
function showEditModal(noteID) {
    mainNoteID = noteID
    let mainNote = notesContainer.find(note => {
        return note.id == mainNoteID
    })
    noteTitle.value = mainNote.Title
    noteDesc.value = mainNote.description

    mainModalTitle.textContent = 'edit Note!'
    addNoteBtn.textContent = 'Confirm edit note'
    showModalFunc(mainModal)

}


function deleteNoteHandler() {
    let newNotes = notesContainer.filter(note => {
        return note.id !== mainNoteID
    })
    notesContainer = newNotes
    saveIntoLocalStorage(notesContainer)
    newNoteGenerator(notesContainer)




}


function getNowDate() {
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let now = new Date()
    let nowDay = now.getDay() //now.getDay => it returns the day index.
    let nowMonth = now.getMonth()
    let nowYear = now.getFullYear() //2023
    let dayOfMonth = now.getDate()

    return `${months[nowMonth]} ${dayOfMonth},${nowYear} (${days[nowDay]})`  //* April 12 2022(tuesday)


}



function closeModalFunc(Modal) {
    Modal.classList.replace('flex', 'hidden')

}

function showModalFunc(Modal) {
    Modal.classList.replace('hidden', 'flex')

}


function clearInputs() {
    noteTitle.value = ''
    noteDesc.value = ''
    
}



function saveIntoLocalStorage(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))

}

deleteNoteBtn.addEventListener('click', (event) => {
    event.preventDefault()
    deleteNoteHandler()
    closeModalFunc(deleteModal)

})


showAddModalBtn.addEventListener('click', () => {
    console.log('click');
    mainModalTitle.textContent = 'add Note!'
    showModalFunc(mainModal)
})

closeMainModal.addEventListener('click', () => {
    closeModalFunc(mainModal)
})



window.addEventListener('load', () => {
    let notes = JSON.parse(localStorage.getItem('notes'))
    console.log(notes);
    notesContainer.push(...notes)
    newNoteGenerator(notesContainer)



})

window.addEventListener('keydown', (event) => {
    console.log(event);
    if (event.keyCode === 27) {
        closeModalFunc(mainModal)
        closeModalFunc(deleteModal)

    }

})

