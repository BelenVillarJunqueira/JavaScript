let turnos = [];

function sacarTurno(nombre, edad, dni, direccion, telefono, especialidad) {
    turnos.push({ nombre, edad, dni, direccion, telefono, especialidad });
    alert(`Turno registrado para ${nombre} en ${especialidad}.`);
    console.log("Lista de turnos actualizada:", turnos);
}

function atenderTurno(listaTurnos) {
    if (listaTurnos.length === 0) {
        alert("No hay turnos pendientes.");
        return;
    }

    let turno = listaTurnos.shift();
    alert(`Atendiendo a ${turno.nombre} en ${turno.especialidad}.`);
    console.log("Lista de turnos después de atender:", listaTurnos);
}

function filtrarTurnosPorEspecialidad(especialidadBuscar, listaTurnos) {
    let filtrados = listaTurnos.filter(
        (turno) => turno.especialidad.toLowerCase() === especialidadBuscar.toLowerCase()
    );

    if (filtrados.length === 0) {
        alert("No se encontraron turnos para esa especialidad.");
    } else {
        let mensaje = "Turnos encontrados:\n";
        filtrados.forEach((t) => {
            mensaje += `- ${t.nombre} (Edad: ${t.edad}, DNI: ${t.dni}, Tel: ${t.telefono}, Dirección: ${t.direccion})\n`;
        });
        alert(mensaje);
        console.log("Filtrados:", filtrados);
    }
}

function iniciarSimulador() {
    let opcion;
    do {
        opcion = prompt(
            "Bienvenido al turnero del hospital\nElija una opción:\n1. Sacar turno\n2. Atender turno\n3. Filtrar por especialidad\n4. Salir"
        );

        switch (opcion) {
            case "1":
                let nombre = prompt("Ingrese su nombre:");
                if (!nombre) return alert("Nombre inválido.");

                let edad = prompt("Ingrese su edad:");
                if (isNaN(edad) || edad <= 0) return alert("Edad no válida.");

                let dni = prompt("Ingrese su DNI:");
                if (!dni || isNaN(dni)) return alert("DNI no válido.");

                let direccion = prompt("Ingrese su dirección:");
                if (!direccion) return alert("Dirección no válida.");

                let telefono = prompt("Ingrese su teléfono:");
                if (!telefono || isNaN(telefono)) return alert("Teléfono no válido.");

                let especialidades = ["Clínica Médica", "Cardiología", "Traumatología", "Oftalmología", "Ginecología"];
                let mensajeEsp = "Seleccione una especialidad:\n";
                especialidades.forEach((esp, i) => (mensajeEsp += `${i + 1}. ${esp}\n`));
                let espOpcion = prompt(mensajeEsp);
                let especialidad = especialidades[espOpcion - 1];

                if (!especialidad) return alert("Opción inválida.");
                sacarTurno(nombre, edad, dni, direccion, telefono, especialidad);
                break;

            case "2":
                atenderTurno(turnos);
                break;

            case "3":
                let filtro = prompt("Ingrese la especialidad a buscar:");
                filtrarTurnosPorEspecialidad(filtro, turnos);
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