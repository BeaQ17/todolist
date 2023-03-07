const date = document.getElementById("date");

const clear = document.getElementById("clear");

const list = document.getElementById("list");

const add_task = document.getElementById("add_task");

// const add_circle = document.getElementById("add_circle");

function addItem(item){
    const text = <li>
                    <i class="far fa-check-circle fa-lg" job="complete"></i>
                    <p id="item">${item}</p>
                    <i class="fas fa-trash fa-lg" job="delete"></i>
                </li>

    list.insertAdjacentHTML("afterbegin", text);
};

document.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        const item = add_task.value;
        if(item){
            addItem(item);
        };
        add_task.value = "";
    }
});