let postItContainer = document.querySelector('.PostItsConteiner');
let inputFront = document.querySelector('.inputFrontModal');
let inputBack = document.querySelector('.inputBackModal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let letterColor = document.querySelector('.inputModalLetterColor');
let backColor = document.querySelector('.InputModalBackgroundColor');

let editingId = null;

// LOAD: Tenta buscar a lista no localStorage ao carregar a página
let list = JSON.parse(localStorage.getItem('myPostIts')) || [];

// Ajusta o ID para não sobrescrever os existentes
let id = list.length > 0 ? Math.max(...list.map(item => item.id)) + 1 : 0;

// Renderiza os itens que já estavam salvos
render();

function openModal() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

function saveToStorage() {
    localStorage.setItem('myPostIts', JSON.stringify(list));
}

function addTask() {
    if (inputFront.value.trim() !== '' && inputBack.value.trim() !== '') {
        
        if (editingId === null) {
            const newListData = {
                id: id++,
                front: inputFront.value,
                back: inputBack.value,
                letterColor: letterColor.value,
                backgroundColor: backColor.value,
                isBackVisible: false,
            }
            list.push(newListData);
        } else {
            const index = list.findIndex((item) => item.id === editingId);
            list[index].front = inputFront.value;
            list[index].back = inputBack.value;
            list[index].letterColor = letterColor.value;
            list[index].backgroundColor = backColor.value;
        }

        inputFront.value = "";
        inputBack.value = "";
        letterColor.value = "#333333";
        backColor.value = "#d6ff41";
        editingId = null; 
        
        closeModal();
        render();
        saveToStorage(); // SALVA após adicionar/editar
    }
}

function render() {
    postItContainer.innerHTML = "";

    list.map((item) => {
        postItContainer.innerHTML +=
        `<div onClick="showPostItBack(${item.id})" style="background-color: ${item.backgroundColor};" class="PostIt">
                <header class="headerPostIt">
                    <h2 class="LetsGoPhrase">Let's go!</h2>
                    <div>
                        <button onClick="editPostIt(event, ${item.id})" class="editButton"><img src="icons/editar.png" alt="edit_icon"></button>
                        <button onClick="deletePostIt(event, ${item.id})" class="deleteButton"><img src="icons/lixeira.png" alt="trash-icon"></button>
                    </div>
                </header>

                <div class="PostItContent">
                    <h4 style="color: ${item.letterColor};" class="PostItFront">
                    ${item.front}
                    </h4>
                    <p style="display: ${item.isBackVisible ? 'block' : 'none'}; color: ${item.letterColor};" class="PostItBack">
                        ${item.back}
                    </p>
                </div>
            </div>`
    })
}

function deletePostIt(event, clickedId) {
    event.stopPropagation();
    list = list.filter((item) => item.id !== clickedId);
    render();
    saveToStorage(); // SALVA após deletar
}

function editPostIt(event, clickedId) {
    event.stopPropagation();
    editingId = clickedId;
    const clickedPostIt = list.find((item) => item.id === clickedId);
    
    openModal();
    
    inputFront.value = clickedPostIt.front;
    inputBack.value = clickedPostIt.back;
    letterColor.value = clickedPostIt.letterColor;
    backColor.value = clickedPostIt.backgroundColor;
}

function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    editingId = null;
    inputFront.value = "";
    inputBack.value = "";
}

function showPostItBack(clickedId){
    const clickedPostIt = list.find((item) => item.id === clickedId);
    clickedPostIt.isBackVisible = !clickedPostIt.isBackVisible;
    render();
    saveToStorage(); // SALVA o estado (virado/não virado)
}
