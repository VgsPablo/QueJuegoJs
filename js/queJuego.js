let name = "Pablo Vargas"

function saludar(usuario) {
    console.log("Bienvenid@ 🙋🏻‍♂️", usuario)
    alert("Bienvenid@ 🙋🏻‍♂️")
}

function login() {
    let usuario = prompt("Ingresa tu usuario:").trim()

        if (usuario !== "" && usuario.length >= 3) {
            saludar(usuario)
        } else {
            console.warn("No se reconoce el usuario.")
            alert("No se reconoce el usuario.")
        }
}

const juegos = [
    { nombre: "Fifa 23", precio: 23000 },
    { nombre: "The Elder Scrolls V: Skyrim", precio: 12000 },
    { nombre: "Cyberpunk 2077", precio: 3000 },
]

let carrito = []

function verJuegos() {

let bienvenida = prompt("¡Hola! ¿Queres ver nuestra lista de juegos disponibles? Responde SI o NO")

while(bienvenida != "SI" && bienvenida != "NO"){
    alert("Respuesta invalida. Por favor responder SI o NO")
    bienvenida = prompt("¡Hola! ¿Queres ver nuestra lista de juegos disponibles? Responde SI o NO")
}

if(bienvenida == "SI"){
    let listaJuegos = juegos.map(
        (juego) => juego.nombre + " " + "$" + juego.precio
    );
    alert(listaJuegos.join(" \n "))
}

else if(bienvenida == "NO"){
    alert("¡Gracias por visitarnos!")
}

while(bienvenida != "NO"){
    let juego = prompt("Agrega un juego a tu carrito")
    let precio = 0

    if(juego == "Fifa 23" || juego == "The Elder Scrolls V: Skyrim" || juego == "Cyberpunk 2077" ){
        switch (juego){
            case "Fifa 23":
                precio = 23000;
                break;
            case "The Elder Scrolls V: Skyrim":
                precio = 12000;
                break;    
            case "Cyberpunk 2077":
                precio = 3000;
                break;
            default:
                break;    
        }

        carrito.push(juego, precio)
        console.log(carrito)
    }

    else {
        alert("No encontramos el juego.")
    }

    bienvenida = prompt("¿Queres seguir comprando?")
    while(bienvenida === "NO"){
        alert("¡Gracias por tu compra!")
        carrito.forEach((carritoFinal) =>{
            console.log(`juego: ${carritoFinal.juego}, total ${carritoFinal.precio}`)
        })
        break;
    }

}

}

const total = carrito.reduce((acc, el) => acc + el.precio, 0)
console.log(`El total a pagar es: ${total}`)