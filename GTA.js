document.getElementById("addButton").addEventListener("click", addRow);

function addRow() {
    const path = "data.json";
    fetch(path)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error("error ", error));
}

