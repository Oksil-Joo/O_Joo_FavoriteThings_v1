(() => {
    function getData() {
        fetch("./data.json")
        .then(res => res.json()) //unpach the API
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error(errpr));
    }

    //invoke the getData function
    getData();

})();