var important = false;
var formVisible = true;
var icon;

function togglePriority(){
    console.log("Clicked");

    if(important == true) {
        //set as non-important
    icon.removeClass("fas").addClass("far");
    important = false;
    }
    else{
        //set as important
        icon.removeClass("far").addClass("fas");
        important = true;
    }
}

function toggleForm(){
    if(formVisible){
        $(".section-form").hide();
        formVisible = false
    }
    else{
        $(".section-form").show();
        formVisible = true;
    }
}

function saveTask(){
    console.log("Saving Task....");

    let title = $("#txtTitle").val();
    let desc = $("#txtDescription").val();
    let dueDate = $("#dpDueDate").val();
    let status = $("#selStatus").val();
    let category = $("#selCategory").val();
    let color = $("#selColor").val();

    //console.log(title, desc, dueDate, status, category, color);

    let theTask = new Task(important, title, desc,  dueDate, status, category, color);
    console.log(theTask);
    displayTask(theTask);
    clearForm();
    
}

function clearForm(){
    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#dpDueDate").val("");
    $("#selStatus").val("");
    $("#selCategory").val("");
    $("#selColor").val("");
}

function displayTask(task){

    let syntax = `<div class="task">
    <i class="far fa-star"></i>

    <div class="info">    
        <h5>${task.title}</h5>
        <p>${task.description}</p>
    </div>

    <div class="details">
        <label class="status">${task.status}</label>
        <label class="category">${task.category}</label>
    </div>`;

    $(".task-list").append(syntax);
}

function init(){
    console.log("Task Manager");
    icon = $("#iPriority");
    //hook events
    icon.click(togglePriority);
    $("#btnShowDetails").click(toggleForm);
    $("#btnSave").click(saveTask);
    //load data
}



window.onload = init;