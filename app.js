const main=document.querySelector(".main")
const Btn=document.querySelector("#addBtn")

Btn.addEventListener("click",
function(){
    addNote()
})
const saveNotes=()=>{
    const notes=document.querySelectorAll('.note textarea')
    const data=[]
    notes.forEach(
        (note)=>{
            data.push(note.value)
        }
    )
    localStorage.setItem('notes',JSON.stringify(data))
}
const addNote=()=>{
    const Note=document.createElement('div')
    Note.classList.add('note')
    Note.innerHTML=`
    <div class="tool">
    <i class="save fa-solid fa-floppy-disk"></i>
    <i class="trash fa-solid fa-trash"></i>
   
</div>
<textarea></textarea>
    
    `
    Note.querySelector('.trash').addEventListener('click',
    function(){
        Note.remove()
    })
    Note.querySelector('.save').addEventListener('click',
    function()
    {
        saveNotes()
    })
    main.appendChild(Note)
    saveNotes()
}