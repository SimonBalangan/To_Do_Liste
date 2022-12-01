 let addToDoButton = document.getElementById('addToDo');            //die Container mit denen gearbeitet wird werden angesprochen und in Variablen gespeichert
 let inputField = document.getElementById('inputField');
 let toDoContainer = document.getElementById('toDoContainer');

 addToDoButton.addEventListener('click', function(){                //erzeugt einen Event Listener welcher durch ein Maus-Click eine Funktion auslöst
    let paragraph = document.createElement('p')                     //erzeugt einen Paragraph
    paragraph.classList.add('paragraph-styling');                   //verbindet das Styling aus unsererm CSS sheet mit dem erzeugten Paragraphen
    paragraph.innerText = inputField.value;                         //verbindung zwischen inputField(dem eingebenem Text) und dem neu erstellten Paragraph
    toDoContainer.appendChild(paragraph); 
    inputField.value = ''; 
    //ESC-BUTTON
    let escButton = document.createElement('button')
    escButton.classList.add('escButton-styling');
    toDoContainer.appendChild(escButton);
    escButton.addEventListener('click', function(){
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(escButton);
    })
    paragraph.appendChild(escButton).innerHTML = 'X';
    //EDIT-BUTTON
    let editButton = document.createElement('button')
    escButton.classList.add('editButton-styling');
    toDoContainer.appendChild(editButton);
    editButton.addEventListener('click', function(){
        toDoContainer.edit(paragraph);
        toDoContainer.edit(editButton);
    })
    paragraph.appendChild(editButton).innerHTML = 'EDIT';
    
    
    
    
    
    
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(escButton);
    })
 })
 