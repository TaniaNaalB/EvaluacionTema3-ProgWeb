var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
}

function readFormData() {
    var formData = {};
    formData["ID_participante"] = document.getElementById("ID_participante").value; 
    formData["nombre_participante"] = document.getElementById("nombre_participante").value;
    formData["fecha"] = document.getElementById("fecha").value;
    formData["dias_inscripcion"] = document.getElementById("dias_inscripcion").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("participate_list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.ID_participante;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nombre_participante;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.fecha;

    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.dias_inscripcion;

    var cell5 = newRow.insertCell(4);
    cell5.innerHTML=  '<button onClick= onEdit(this)>Modificar</button> <button onClick= onDelete(this)>Eliminar</button>'
}


//Boton de editar

function onEdit(td) {
selectedRow = td.parentElement.parentElement;
document.getElementById('ID_participante').value = selectedRow.cells[0].innerHTML;
document.getElementById('nombre_participante').value = selectedRow.cells[1].innerHTML;
document.getElementById('fecha').value = selectedRow.cells[2].innerHTML;
document.getElementById('dias_inscripcion').value = selectedRow.cells[3].innerHTML;   
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.ID_participante;
    selectedRow.cells[1].innerHTML = formData.nombre_participante;
    selectedRow.cells[2].innerHTML = formData.fecha;
    selectedRow.cells[3].innerHTML = formData.dias_inscripcion;
}

//Boton de eliminar

function onDelete(td) {
if(confirm('¿Esta seguro de eliminar este registro?')){
    row = td.parentElement.parentElement;
    document.getElementById('participate_list').deleteRow(row.rowIndex);
}
resetForm();
}

// Boton de Reiniciar

function resetForm() {
document.getElementById('ID_participante').value = '';
document.getElementById('nombre_participante').value = '';
document.getElementById('fecha').value = '';
document.getElementById('dias_inscripcion').value = '';
}
