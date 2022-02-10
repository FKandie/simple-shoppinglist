// Created by Felix Kandie

rows = 1;
function addRow(){
    var table = document.getElementsByTagName("table")[0];
    var row = document.getElementsByTagName("tr")[1];
    var newRow = document.createElement("tr");
    newRow.innerHTML = row.innerHTML;
    rows ++;
    table.appendChild(newRow);
    newRow.id = rows;
    document.getElementsByClassName("id")[rows - 1].innerHTML = rows + ".";
    document.getElementsByClassName ("t")[rows -1].onclick = function (){takeRow(newRow.id);}
}
function takeRow(x){
    var r = document.getElementsByTagName("tr");
    if (r.length>2){
        document.getElementById(x).remove();
        r = document.getElementsByTagName("tr");
        rows--;
        var i = x;
        while (i<r.length){
            r[i].id--;
            document.getElementsByClassName ("id")[i-1].innerHTML = i + ".";
            i++;
        }
    }
}
