let notes = JSON.parse(localStorage.getItem('notes')) || []; //Сам список заметок
let line; //Линия снизу
let notesDisplay; //Общий div, в котором все заметки
let doc; //Строка с заметкой
notesDisplay = document.createElement('div');
let oneMoreDiv;
let buttonEditNote;
let buttonDeleteNote;
let i;
let input = document.getElementById('input');
let lastIndex;
let tapButton = document.getElementById('tab-button');

// notes = [];
// localStorage.setItem('notes', JSON.stringify(notes));

function addNote() {
        document.getElementById('notes').innerHTML = '';
        notes.push(document.getElementById('input').value);
        localStorage.setItem('notes', JSON.stringify(notes));
        console.log(notes);
        cycle();
        document.getElementById('input').value = '';
        localStorage.setItem('notes', JSON.stringify(notes));
}

function downloadNotes() {
        document.getElementById('notes').innerHTML = '';
        localStorage.setItem('notes', JSON.stringify(notes));
        console.log(notes);
        cycle();
        document.getElementById('input').value = '';
        localStorage.setItem('notes', JSON.stringify(notes));
}

function deleteNote() {
        let parent = this.parentElement;
        parent.style.display = 'none';
        for (let i = 0; i < notes.length; i++) {
                if (this.previousSibling.previousSibling.textContent === notes[i]) {
                        console.log(this.previousSibling.textContent);
                        console.log(notes[i]);
                        notes.splice(i, 1);
                        console.log(notes);
                        localStorage.setItem('notes', JSON.stringify(notes));
                        console.log(notes);
                }
        }
}

function editNote() {
        let pastElement = this.previousSibling;
        input.value = pastElement.textContent;
        for (let i = 0; i < notes.length; i++) {
                if (this.previousSibling.textContent === notes[i]) {
                        lastIndex = i;
                }
        }
        tapButton.textContent = 'Изменить';
        tapButton.className = 'edit-button';
        tapButton.onclick = downloadNotes;
        console.log(lastIndex);
}

function downloadNotes() {
        notes[lastIndex] = document.getElementById('input').value;
        localStorage.setItem('notes', JSON.stringify(notes));
        document.getElementById('notes').innerHTML = '';
        cycle();
        console.log(notes);
        input.value = ''
        tapButton.textContent = 'Добавить';
        tapButton.className = 'tab-button';
        tapButton.onclick = addNote;
}

function cycle() {
        tapButton.textContent = 'Добавить';
        tapButton.className = 'tab-button';
        tapButton.onclick = addNote;
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
                buttonDeleteNote = document.createElement('button');
                buttonDeleteNote.innerHTML = '&times;';
                buttonDeleteNote.className = 'delete-button';
                buttonDeleteNote.onclick = deleteNote;
                oneMoreDiv = document.createElement('div');
                oneMoreDiv.id = 'oneMoreDiv' + i;
                oneMoreDiv.className = 'oneMoreDiv';
                document.getElementById('notes').appendChild(oneMoreDiv);
                document.getElementById('oneMoreDiv' + i).appendChild(doc);
                document.getElementById('oneMoreDiv' + i).appendChild(buttonEditNote);
                document.getElementById('oneMoreDiv' + i).appendChild(buttonDeleteNote);
        }
}

downloadNotes();