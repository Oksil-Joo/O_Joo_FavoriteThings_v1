(() => {
    const theTeam = document.querySelector("#team-members"),
            theTemplate = document.querySelector("#bio-template").content;
            
    let buttons = document.querySelectorAll("button");

    function showData() {
        let key = this.dataset.key;

        let headline = document.querySelector("h1");

        headline.textContent = data[key].name;
    }

    function getData() {
        fetch("./data.json")
        .then(res => res.json()) //unpach the API
        .then(data => {
            console.table(data);

            buildTeam(info);
        })
    }

    function buildTeam(info) {
       let team = Object.keys(info);

       team.forEach(person => {
           let panel = theTemplate.cloneNode(true),
                memberInfo = panel.firstElementChild.children;

            memberInfo[0].querySelector('img').src = `images/${info[person].biopic}`;
            memberInfo[1].textContent = info[person].name;
            memberInfo[2].textContent = info[person].role;
            memberInfo[3].textContent = info[person].desc;

            theTeam.appendChild(panel);
       })
    }
    //invoke the getData function
    getData();

    buttons.forEach(button => button.addEventListener("click", showData));
})();