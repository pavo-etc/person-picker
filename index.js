var text = "";
var people = [];
var peopleRemaining = 0;


function savePeople() {
    text = document.getElementById("people").value; 
    lines = text.split('\n');
    // Ignore empty lines
    for (let i = 0; i < lines.length; i++) {
        if (lines[i] !== "") {
            people.push(lines[i]);
        }
    }
    peopleRemaining = people.length;
    setNextPresenterButton();
}

function getNextPerson() {
    if (peopleRemaining === 0) return;
    let i = Math.floor(Math.random() * peopleRemaining)
    let randomPerson = people[i];
    document.getElementById("queue").innerHTML += "<p>" + randomPerson + "</p>";
    people.splice(i, 1);
    peopleRemaining--;
    setNextPresenterButton();

}

function setNextPresenterButton() {
    let button = document.getElementById("nextperson");
    if (peopleRemaining === 0) {
        button.hidden = true;
    } else {
        button.hidden = false;
    }
}
//let names = text.