var parent = document.getElementById("parent")

function addNote() {
    var noteInput = document.getElementById("noteInput")
    // if (!noteInput.value) {

    // }
    if (noteInput.value.length == 0) {
        alert("Input field are empty")
        return
    }

    //Create Card Div
    var cardDiv = document.createElement("div")
    cardDiv.setAttribute("class", "card my-3")

    //Create Card header Div
    var cardHeaderDiv = document.createElement("div")
    cardHeaderDiv.setAttribute("class", "card-header")
    // cardHeader text
    cardHeaderDiv.innerHTML = "Note"

    // append cardheADER INTO CARD
    cardDiv.append(cardHeaderDiv)

    //CREATE card body div
    var cardBodyDiv = document.createElement("div")
    cardBodyDiv.setAttribute("class", "card-body")

    // card body append into card div
    cardDiv.append(cardBodyDiv)


    //CREATE card-title 
    var cardTitleh5 = document.createElement("h5")
    cardTitleh5.setAttribute("class", "card-title")
    cardTitleh5.innerHTML = noteInput.value
    // h5Element append into card body
    cardBodyDiv.append(cardTitleh5)


    //Button Container
    var buttonContainer = document.createElement("div")
    buttonContainer.setAttribute("class", "mt-3  buttonContainer")

    // buttonContainer append in cardBodyDiv
    cardBodyDiv.append(buttonContainer)

    //create Edit Button
    var editBtn = document.createElement("button")
    editBtn.innerHTML = "EDIT"
    editBtn.className = "btn btn-primary"

    //create DELETE Button
    var deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Delete"
    deleteBtn.className = "btn btn-danger"
    deleteBtn.setAttribute("onclick", "deleteTodo(this)")

    buttonContainer.append(editBtn)
    buttonContainer.append(deleteBtn)

    console.log(cardDiv)
    parent.append(cardDiv)
    noteInput.value = ""
}


function deleteTodo(ele) {
    ele.parentNode.parentNode.parentNode.remove()

}

function deleteAll() {
    parent.innerHTML = ""
}