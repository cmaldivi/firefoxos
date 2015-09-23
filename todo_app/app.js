window.addEventListener("load", function() {
  console.log("Hello World!");
});

function storeNewTask(){
     var newTask= document.getElementById("newtask");
     localStorage.setItem("newtask", newTask.value);
     console.log("new Task: " + newTask.value);
}