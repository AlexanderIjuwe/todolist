const inputBox = document.getElementById("input-box");
const incompleteListContainer = document.getElementById("incomplete-list-container")
const completeListContainer = document.getElementById("complete-list-container");

function addTask(){
    if (inputBox.value === ""){
        alert("write something Joor")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        incompleteListContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}

incompleteListContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        node = e.target.parentElement
        completeListContainer.appendChild(node)
        count = completeListContainer.childElementCount;
        checkList(count)
        saveData();
    }
    else{
        null
    }
}, false) 
function saveData(){
    localStorage.setItem("data",incompleteListContainer.innerHTML)
    localStorage.setItem("newdata",completeListContainer.innerHTML)
}
function showTask(){
    incompleteListContainer.innerHTML = localStorage.getItem("data")
    completeListContainer.innerHTML = localStorage.getItem("newdata")
}
function checkList(Count){
    if (Count > 5){
        completeListContainer.removeChild(completeListContainer.firstChild);
    }
    else{
        null
    }
}
showTask()