let turnos = [];

function sacarTurno() {
    let nombre = prompt("Ingrese su nombre:");
    if (!nombre) {
        alert("Debe ingresar un nombre válido.");
        return;
    }

    let edad = prompt("Ingrese su edad:");
    if (isNaN(edad) || edad <= 0) {
        alert("Edad no válida.");
        return;
    }

    let dni = prompt("Ingrese su DNI:");
    if (!dni || isNaN(dni)) {
        alert("DNI no válido.");
        return;
    }

    let direccion = prompt("Ingrese su dirección:");
    if (!direccion) {
        alert("Debe ingresar una dirección válida.");
        return;
    }

    let telefono = prompt("Ingrese su teléfono:");
    if (!telefono || isNaN(telefono)) {
        alert("telefono no válido.");
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

function filtrarTurnosPorEspecialidad() {
    let especialidadBuscar = prompt("Ingrese la especialidad a filtrar:");
    let filtrados = turnos.filter(turno => turno.especialidad.toLowerCase() === especialidadBuscar.toLowerCase());

    if (filtrados.length === 0) {
        alert("No se encontraron turnos para esa especialidad.");
    } else {
        let mensaje = "Turnos encontrados:\n";
        filtrados.forEach(t => {
            mensaje += `- ${t.nombre} (DNI: ${t.dni}, Edad: ${t.edad}, (Teléfono: ${t.telefono}, Dirección: ${t.direccion})\n`;
        });
        alert(mensaje);
        console.log("Filtrados:", filtrados);
    }
}

function iniciarSimulador() {
    let opcion;
    do {
        opcion = prompt("Bienvenido al turnero del hospital.\n Elija una opción:\n1. Sacar turno\n2. Atender turno\n3. Filtrar turnos por especialidad\n4. Salir");

        switch (opcion) {
            case "1":
                sacarTurno();
                break;
            case "2":
                atenderTurno();
                break;
            case "3":
                filtrarTurnosPorEspecialidad();
                break;
            case "4":
                alert("Gracias por atenderse con nosotros.");
                break;
            default:
                alert("Opción no válida. Inténtelo de nuevo.");
        }
    } while (opcion !== "4");
}

iniciarSimulador();
