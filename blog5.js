
function showSystemNotification() {
    const systemNotif = document.getElementById("systemNotification");
    systemNotif.classList.add("show");
}

function notificationResponse(action) {

    console.log("System notification selected:", action);


    const systemNotif = document.getElementById("systemNotification");
    systemNotif.classList.remove("show");


    setTimeout(() => {
        const emailNotif = document.getElementById("emailNotification");
        emailNotif.classList.add("show");
    }, 2000);
}

function emailAction(action) {

    console.log("Email action selected:", action);

    const emailNotif = document.getElementById("emailNotification");
    emailNotif.classList.remove("show");
}


function runCommand(type) {
    const terminal = document.getElementById("terminalOutput");
    let output = "";

    if(type === "trace")
        output = "\n$ trace_call landline\nCALL TRACE INITIATED...\nLOCATION FOUND: INSIDE APARTMENT\nERROR: SOURCE = YOU\n";
    if(type === "backup")
        output = "\n$ backup_blog --all\nUPLOADING...\nWARNING: ENTITY MAY FOLLOW DATA\nBACKUP COMPLETE\n";
    if(type === "firewall")
        output = "\n$ firewall --enable --max\nFIREWALL ENABLED\nWARNING: EXIT ROUTES BLOCKED\nYOU ARE CONTAINED\n";
    if(type === "message")
        output = "\n$ message alex\nRESPONSE RECEIVED:\n'YOU SHOULD NOT HAVE LOGGED IN.'\nCONNECTION TERMINATED\n";

    terminal.innerHTML += "<pre>" + output + "</pre>";
}

function goToNextDay() {
    window.location.href = "blog6.html";
}

window.onload = showSystemNotification;
