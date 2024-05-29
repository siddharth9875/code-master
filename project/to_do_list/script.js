document.querySelector("#push").onclick = () => {

    if (document.querySelector(" #newtask input").value == 0) {
        alert("please enter a task");
    }
    else {
        document.querySelector("#tasks").innerHTML += `
        

        <div class="task">
           <span id="taskname">
           ${document.querySelector("#newtask input").value}
           </span>

           <button class="delete">
           <i class="fa-solid fa-trash"></i>
           </button>
        </div>


        `;


        let current_task = document.querySelectorAll(".delete");

        console.log(current_task)

        for (let i = 0; i < current_task.length; i++) {

            current_task[i].addEventListener('click', () => {
                console.log(current_task[i].parentElement.remove())
            })
        }

        document.querySelector('#newtask input').value = "";

    }
}







console.log(document.querySelector('input').value);