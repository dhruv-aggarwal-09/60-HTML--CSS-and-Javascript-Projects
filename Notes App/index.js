const btnEl = document.getElementById("btn")

function createNoteEl(id,content){
    const element = document.createElement("textarea")
    element.classList.add("note")
    element.placeholder = "Empty Note"
    element.value = content

    element.addEventListener("dblclick", ()=>{
        const warning = confirm("Do you want to delete this note?")
        if(warning){
            deleteNote(id, element)
        }
    })

    element.addEventListener("input",()=>{
        updateNote(id, element.value)
    })
}

function deleteNote(){

}

function addNote(){
    const noteObj = {
        id: Math.floor(Math.random() * 100000),
        content: "",
    };
    const noteEl = createNoteEl(noteObj.id, noteObj.content)
}

btnEl.addEventListener("click", addNote)