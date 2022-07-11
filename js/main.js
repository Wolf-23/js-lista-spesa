const spesa = ['Pane', 'Formaggio', 'Insalata', 'Farina', 'Verdure', 'Pasta'];
let x = 0;
let listaDom = document.getElementById('lista');
while (x < spesa.length) {
    listaDom.innerHTML += `<li>${spesa[x]}</li>`;
    x++;
}