const spesa = ['Pane', 'Formaggio', 'Insalata', 'Farina', 'Verdure', 'Pasta', 'Sale'];
let x = 0;
let listaDom = document.getElementById('lista');
while (x < spesa.length) {
    //InnerHTML

    // listaDom.innerHTML += `<li>${spesa[x]}</li>`;
    // x++;

    //Append 

    let liDom = document.createElement("li");
    listaDom.append(liDom);
    liDom.append(spesa[x]);
    x++
}
