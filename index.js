let addToDoButton = document.getElementById('addToDo');            //die Container mit denen gearbeitet wird werden angesprochen und in Variablen gespeichert
let inputField = document.getElementById('inputField');
let toDoContainer = document.getElementById('toDoContainer');

addToDoButton.addEventListener('click', function(){                //erzeugt einen Event Listener welcher durch ein Maus-Click eine Funktion auslöst
   let paragraph = document.createElement('p')                     //erzeugt einen Paragraph
   paragraph.classList.add('paragraph-styling');                   //verbindet das Styling aus unsererm CSS sheet mit dem erzeugten Paragraphen
   paragraph.innerText = inputField.value;                         //verbindung zwischen inputField(dem eingebenem Text) und dem neu erstellten Paragraph
   toDoContainer.appendChild(paragraph);                           //fügt den neu erstellten Paragraph dem  To Do Container hinzu(erzeugt ein Child Container)
   inputField.value = '';                                          //löscht nach dem click auf des addButtons den eingegebenen Text aus dem InputField
   paragraph.addEventListener('click', function(){
       paragraph.style.textDecoration = "line-through";
   })
   paragraph.addEventListener('dblclick', function(){
       toDoContainer.removeChild(paragraph);
   })
})


/*addToDoButton.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        e.preventDefault();
        document.getElementById('addToDo').click();
    }             
    let paragraph = document.createElement('p')                   
    paragraph.classList.add('paragraph-styling');                  
    paragraph.innerText = inputField.value;                         
    toDoContainer.appendChild(paragraph);                           
    inputField.value = '';      
})*/                        