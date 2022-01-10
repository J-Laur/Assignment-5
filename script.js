const table = document.getElementById("table"); 
//selects the last row in the table in order to append another row below it

const column = document.querySelectorAll("div#row"); 
//selects all three rows in order to append a cell to the end of all 3 
//simultaneously, which created a column

let rows = 3;
let columns = 3;
let color = false;

function addRow(){

    var addRowButton = document.getElementsByClassName("btn btn-dark my-3 add-row");

    addRowButton.addEventListener('click', () => {let newRow = table.createElement("row")});

    for(let i = 0; i < columns; i++) {

        let newCell = document.createElement("lastrow");
        setProperties(newCell);
        newRow.appendChild(newCell);
    }
    table.appendChild(newRow);
    rows++;

}

function deleteRow(){

   table.deleteRow(-1);

   rows--;
}

function addColumn(){

    var addColButton = document.getElementsByClassName("btn btn-dark my-3 add-col");

    addColButton.addEventListener('click', () => {column.appendChild()})
}

function deleteColumn(){

    table.deleteColumn(-1);

    columns--;
}