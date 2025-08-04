function addTodo() {
    const todoText = document.getElementById("todo-input");
    const text = todoText.value.trim();
    if (text) {
        const newList = document.createElement("li");
        newList.textContent = text;
        newList.onclick = function () { newList.style.textDecoration = 'line-through'; }
        document.getElementById('todo-list').appendChild(newList);
        todoText.value = '';
    }

}