let notes = JSON.parse(localStorage.getItem('notes')) || []; //Сам список заметок
let line; //Линия снизу
let notesDisplay; //Общий div, в котором все заметки
let doc; //Строка с заметкой
notesDisplay = document.createElement('div');
let oneMoreDiv;
let buttonEditNote;
let i;

// notes = [];

function addNote() {
        document.getElementById('notes').innerHTML = '';
        notes.push(document.getElementById('input').value);
        localStorage.setItem('notes', JSON.stringify(notes));
        console.log(notes);
        cycle();
        document.getElementById('input').value = '';
        localStorage.setItem('notesDisplayValue', JSON.stringify(notes));
}

function downloadNotes() {
        document.getElementById('notes').innerHTML = '';
        localStorage.setItem('notes', JSON.stringify(notes));
        console.log(notes);
        cycle();
        document.getElementById('input').value = '';
        localStorage.setItem('notesDisplayValue', JSON.stringify(notes));
}

function editNote() {
       
        let parent = this.parentElement;
        parent.style.display = 'none';
        for (let i = 0; i < notes.length; i++) {
                if (this.previousSibling.textContent === notes[i]) {
                        console.log(this.previousSibling.textContent);
                        console.log(notes[i]);
                        notes.splice(i, 1);
                        console.log(notes);
                        localStorage.setItem('notes', JSON.stringify(notes));
                }
        }
}

downloadNotes();

function cycle() {
        for (i = 0; i < notes.length; i++) {
                doc = document.createElement('p');
                doc.textContent = notes[i];
                doc.className = 'notes';
                line = document.createElement('hr');
                line.className = 'line';
                buttonEditNote = document.createElement('button');
                buttonEditNote.innerHTML = '&#8942;';
                buttonEditNote.className = 'buttonEdit';
                buttonEditNote.onclick = editNote;
                oneMoreDiv = document.createElement('div');
                oneMoreDiv.id = 'oneMoreDiv' + i;
                oneMoreDiv.className = 'oneMoreDiv';
                document.getElementById('notes').appendChild(oneMoreDiv);
                document.getElementById('oneMoreDiv' + i).appendChild(doc);
                document.getElementById('oneMoreDiv' + i).appendChild(buttonEditNote);
        }
}