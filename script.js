window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then( function(json) {
            const div = document.getElementById("container");
            json.sort(function (a, b) {
                return b.hoursInSpace - a.hoursInSpace;
            });
            for(let i=0; i<json.length; i++){
                let green = ''
                if (json[i].active === true){
                    green = 'class="green"';
                }
                div.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                           <li ${green}>Active: <span>${json[i].active}</li>
                           <li>Skills: ${(json[i].skills).join(', ')}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>
                `;
            }
            div.innerHTML += `
                <h2>Astronaut Count: ${json.length}</h2>
            `;
        });
    });
});