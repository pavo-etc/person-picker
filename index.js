var text = "";
var people = [];
var peopleRemaining = 0;


function savePeople() {
    text = document.getElementById("people").value; 
    people = text.split('\n');
    peopleRemaining = people.length;
}

function getNextPerson() {
    if (peopleRemaining === 0) return;
    let i = Math.floor(Math.random() * peopleRemaining)
    let randomPerson = people[i];
    document.getElementById("queue").innerHTML += "<p>" + randomPerson + "</p>";
    people.splice(i, 1);
    peopleRemaining--;
}
//let names = text.