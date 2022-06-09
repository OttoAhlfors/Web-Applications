

//This code is allready in .html document but works in either one

/*function addlistElement() {
    var listInput = document.getElementById("list_input").value,
    listNode = document.getElementById("data_list"),
    liNode = document.createElement("LI"),
    txtNode = document.createTextNode(listInput)

    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
}*/


//This code is anotherway of doing list item adding, not completed 

/*if(document.readyState !== "loading"){
    console.log("Document done")
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function(){
        console.log("Document ready");
        initializeCode();
    })
}

function initializeCode() {
    const addTextButton = document.getElementById("add_comment");

    addTextButton.addEventListener("click", function() {
        const inputField = document.getElementById("list_input");
        const list = document.getElementById("data_list");
        list.innerHTML = list.innerHTML + (Math.random() + 1).toString(36);
    });
}*/