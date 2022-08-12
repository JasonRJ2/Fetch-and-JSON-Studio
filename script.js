window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        return response.json();
    }).then(function(json){
        const container = document.getElementById("container")
        let astronauts = "";
        for (astronauts of json) {
            astronauts += `
            <div class="astronauts">
                <div class="bio">
                    <h3>${astronauts.firstName} ${astronauts.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronauts.hoursInSpace}</li>
                        <li>Active: ${astronauts.active}</li>
                        <li>Skills: ${astronauts.skills.join(", ")}</li>
                    </ul>
                </div>
            <img class="avatar" src="images/${astronauts.picture}"
            </div>
            `;
        }
        container.innerHTML = astronauts;
    });
});