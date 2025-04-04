let turnos = [
    {especialidad: "Clinica Médica", consultorio: 1},
    {especialidad: "Cardiología", consultorio: 2},
    {especialidad: "Traumatología", consultorio: 3},
    {especialidad: "Oftalmología", consultorio: 4},
    {especialidad: "Ginecología", consultorio: 5}
];

function sacarTurno() {
    let nombre = prompt("Ingrese su nombre:");
    if (!nombre) {
        alert("Debe ingresar un nombre válido.");
        return;
    }

    let especialidades = ["Clínica Médica", "Cardiología", "Traumatología", "Oftalmología", "Ginecología"];
    let especialidadMensaje = "Seleccione una especialidad:\n";
    
    especialidades.forEach((esp, index) => {
        especialidadMensaje += `${index + 1}. ${esp}\n`;
    });

    let opcion = prompt(especialidadMensaje);
    let especialidad = especialidades[opcion - 1];

    if (!especialidad) {
        alert("Opción inválida. Inténtelo de nuevo.");
        return;
    }

    turnos.push({ nombre, especialidad });
    alert(`Turno registrado para ${nombre} en ${especialidad}.`);
    console.log("Lista de turnos actualizada:", turnos);
}

function atenderTurno() {
    if (turnos.length === 0) {
        alert("No hay turnos pendientes.");
        return;
    }

    let turno = turnos.shift();
    alert(`Atendiendo a ${turno.nombre} en ${turno.especialidad}.`);
    console.log("Lista de turnos después de atender:", turnos);
}

function iniciarSimulador() {
    let opcion;
    do {
        opcion = prompt("Bienvenido al turnero del hospital.\nElija una opción:\n1. Sacar turno\n2. Atender turno\n3. Salir");

        switch (opcion) {
            case "1":
                sacarTurno();
                break;
            case "2":
                atenderTurno();
                break;
            case "3":
                alert("Gracias por atenderse con nosotros.");
                break;
            default:
                alert("Opción no válida. Inténtelo de nuevo.");
        }
    } while (opcion !== "3");
}

iniciarSimulador();
