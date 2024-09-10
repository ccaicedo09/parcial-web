document.addEventListener('DOMContentLoaded', function() {
    const solicitudes = {};

    document.getElementById('testDriveForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const estrato = document.getElementById('estrato').value;
        const birthdate = document.getElementById('birthDate').value;
        const testDriveDate = document.getElementById('testDriveDate').value;
        const testDriveHour = document.getElementById('testDriveHour').value;

        // Validaciones
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;
        const estratoRegex = /^[1-6]$/;

        if (!emailRegex.test(email)) {
            alert('Por favor, ingrese un email válido.');
            return;
        }

        if (!phoneRegex.test(phone)) {
            alert('Por favor, ingrese un número de teléfono válido (10 dígitos).');
            return;
        }

        if (!estratoRegex.test(estrato)) {
            alert('Por favor, ingrese un estrato válido (1-6).');
            return;
        }

        if (solicitudes[email]) {
            solicitudes[email] += 1;
        } else {
            solicitudes[email] = 1;
        }

        alert(`
            Nombre: ${name}
            Apellido: ${lastName}
            Email: ${email}
            Teléfono: ${phone}
            Estrato: ${estrato}
            Fecha de Nacimiento: ${birthdate}
            Fecha del Test Drive: ${testDriveDate}
            Hora del Test Drive: ${testDriveHour}
            Solicitudes: ${solicitudes[email]}
        `);
    });

    document.getElementById('cancelButton').addEventListener('click', function() {
        window.location.href = 'index.html'; // Redirige al menú de inicio
    });
});