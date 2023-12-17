const add = document.getElementById("add");
const input = document.getElementById("input");
const items = document.getElementById("todo-container")
add.addEventListener('click',(e)=>{
    if(input.value){
        items.innerHTML += `<div class="todo">
                <span class="item">${input.value}</span>
                <span class="icons">
                    <span class="done">✅</span>
                    <span class="delete">🗑️</span>
                </span>
            </div>
        `;
        input.value = "";
        input.focus()
    }
})

items.addEventListener('click',(e)=>{
    let btnClicked = e.target;
    if(btnClicked.classList.contains("done")){
        btnClicked.parentElement.parentElement.children[0].classList.toggle('completed');
    }
    if(btnClicked.classList.contains("delete")){
        console.log("delete clicked");
        btnClicked.parentElement.parentElement.remove();
    }
})
