const handleBtn = () => {
    const inputField = document.getElementById('input-field');
    const getValue = inputField.value;
    inputField.value = '';
    displayNote(getValue);
    saveToLocalStorage(getValue);
}

const displayNote = (getValue) => {
    const displayContainer = document.getElementById('display-container');
    const li = document.createElement('li');
    li.innerText = getValue;
    li.style.backgroundColor = '#660a27'
    li.style.margin ='10px'
    li.style.padding ='5px'
    displayContainer.appendChild(li);
}

const saveToLocalStorage = (getValue) => {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(getValue);
    localStorage.setItem('notes', JSON.stringify(notes));
}

const displayFromLocalStorage = () => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => displayNote(note));
}

// Display stored notes on page load
window.onload = () => {
    displayFromLocalStorage();
}
