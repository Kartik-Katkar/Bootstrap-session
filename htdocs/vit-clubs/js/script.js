// OOP Concept
class Club {
    constructor(name, head) {
        this.name = name;
        this.head = head;
    }

    display() {
        return `${this.name} - Head: ${this.head}`;
    }
}

// Object creation
let codingClub = new Club("Coding Club", "Amit");
console.log(codingClub.display());

// jQuery interaction
$("#addStory").click(function () {
    $("#stories").append("<li>National Hackathon Winner</li>");
});

// Form validation
function validate() {
    let email = document.getElementById("email").value;

    if (email === "") {
        alert("Email required");
        return false;
    }
    return true;
}
