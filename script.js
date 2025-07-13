let content = document.getElementById("inputtext");
let addtask = document.getElementById("add");
let counter = document.getElementById("taskCount");
let ogcount = 0;
let count = 0;
addtask.addEventListener("click", function () {
  if (content.value != "") {
    let tasks = document.getElementById("tasklist");
    let newtask = document.createElement("li");
    let right = document.createElement("button");
    let wrong = document.createElement("button");
    let options = document.createElement("div");

    newtask.classList.add("task");
    right.classList.add("right");
    wrong.classList.add("wrong");
    options.classList.add("option");

    newtask.textContent = content.value;
    tasks.appendChild(newtask);

    right.textContent="✓";
    right.style.color="white";
    right.style.background="green";

    wrong.textContent="✕";
    wrong.style.color="white";
    wrong.style.background="red";

    ogcount++;

    wrong.addEventListener("click",function(){
        if(!newtask.classList.contains("strike")){
            ogcount--;
        }
        countUpdate();
        newtask.remove();
    })
    right.addEventListener("click",function(){
        newtask.classList.toggle("strike");
        if(newtask.classList.contains("strike")){
            ogcount--;
        }
        else{
            ogcount++;
        }
        countUpdate();
    })


    options.appendChild(right);
    options.appendChild(wrong);
    newtask.append(options);
    content.value="";
    countUpdate();
  }
});

function countUpdate(){
    counter.textContent = ogcount +" tasks remaining"
}
