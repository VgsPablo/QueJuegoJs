let nombreCompleto = "Pablo Vargas"

function saludar(usuario) {
    console.log("Bienvenid@ 🙋🏻‍♂️", usuario)
}

function login() {
    let usuario = prompt("Ingresa tu usuario:").trim()

        if (usuario !== "" && usuario.length >= 3) {
            saludar(usuario)
        } else {
            console.warn("No se reconoce el usuario.")
        }
}

function verJuegos() {
    let juegos = "Juegos: \n" +
                    "1) Fifa 23 \n" +
                    "2) The Elder Scrolls V: Skyrim \n" +
                    "3) Cyberpunk 2077"

    let respuesta = prompt("Ingresa numero de juego para ver el precio: \n" + juegos)
    switch (parseInt(respuesta)) {
        case 1:
            console.log("Fifa 23. Precio: $23.000")
            break;
        case 2:
            console.log("The Elder Scrolls V: Skyrim. Precio: $12.000")
            break;
        case 3:
            console.log("Cyberpunk 2077. Precio: $3.000")
            break;
        default:
            console.error("No se reconoce el numero ingresado.")
    }
    let continuar = confirm("¿Seguir consultando?")
    if (continuar) {
        verJuegos()
    }
}