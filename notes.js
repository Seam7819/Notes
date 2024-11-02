const handleBtn = () => {
    const inputField = document.getElementById('input-field');
    const getValue = inputField.value;
    inputField.value = '';
    const displayContainer = document.getElementById('display-container');
    const div = document.createElement('li');
    div.innerText = `
    ${getValue}`
    displayContainer.appendChild(div);
}



