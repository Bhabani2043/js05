
var appointments = ["Birthday", "Meeting"];

function LoadAppointments(){
    document.getElementById("lstAppointments").innerHTML = "";
    appointments.map(function(appointment){
        var option = document.createElement("option");
        option.text = appointment;
        option.value = appointment;

        document.getElementById("lstAppointments").appendChild(option);
    });
    document.getElementById("lblCount").textContent = `Total No. of Appointments : ${appointments.length}`;

}
function AddClick(){
    var appointment = document.getElementById("txtAppointment").value;
    if(appointments.indexOf(appointment)===-1){
        appointments.push(appointment);
        LoadAppointments();
        alert(`${appointment}\nAdded to List`);
        document.getElementById("txtAppointment").value = "";
    } else {
        alert(`${appointment} - Exists`);
    }
   
}

function SortAsc(){
    appointments.sort();
    LoadAppointments();
}
function SortDsc(){
    appointments.sort();
    appointments.reverse();
    LoadAppointments();
}

function DeleteClick(){
    var selectedItem = document.getElementById("lstAppointments").value;
    var selectedIndex = appointments.indexOf(selectedItem);
    var confirmation = confirm(`Are you sure?\nWant to delete ${selectedItem}?`);
    if(confirmation===true){
        appointments.splice(selectedIndex,1);
        LoadAppointments();
    }
}

function ClearClick(){
    appointments.length = 0;
    LoadAppointments();
}
function EditClick(){
    var appointment = document.getElementById("lstAppointments").value;
    document.getElementById("txtEditAppointment").value = appointment;
}

function SaveClick(){
    var selectedItem = document.getElementById("lstAppointments").value;
    var selectedIndex = appointments.indexOf(selectedItem);
    var newAppointment = document.getElementById("txtEditAppointment").value;
    appointments[selectedIndex] = newAppointment;
    LoadAppointments();
}