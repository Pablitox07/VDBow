document.getElementById("addButton").addEventListener("click", addRow);

function addRow() {
  
    
    var tableBody = document.getElementById("tabla");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td"); 
    var tr = document.createElement("tr");
    
    td1.innerHTML = document.getElementById("nombreclave").value;
    td2.innerHTML  = document.getElementById("codigoclave").value;

    
    tr.appendChild(td1);
    tr.appendChild(td2);

    
    tableBody.appendChild(tr);
    }