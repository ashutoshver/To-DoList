document.querySelector("form").addEventListener("submit", todoList);

function todoList() {
  event.preventDefault();
  if (document.querySelector("#cont1 input").value.length == 0) {
    alert("Input Empty");
  } else {

    let Name = document.querySelector("#name").value;
    let Email = document.querySelector("#email").value;
    let Number = document.querySelector("#mobNo").value;

    let Div = document.createElement("div");

    let P1 = document.createElement("p");
    P1.innerText = Name;
    let P2 = document.createElement("p");
    P2.innerText = Email;
    let P3 = document.createElement("p");
    P3.innerText = Number;
    let btn = document.createElement("button")
    btn.innerText = "Remove";

    Div.append(P1, P2, P3, btn);
    document.querySelector("#sub-cont").append(Div);

    // for delete
    var current_tasks = document.querySelectorAll("button");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      }
    }
  }
}





