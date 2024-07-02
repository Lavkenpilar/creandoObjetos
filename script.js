const guitarra ={
    cuerdas: 6,
    color: "azul",
    año:1994,
}
const pc = {
    marca: "asus",
    ram:"16GV",
    so:"window",
    game:true,
}
const casa = {
    habitaciones:4,
    baños:2,
    patio:1,
    garage:1,
    direccion:"san diego 8031"
}
console.log (guitarra.año)
console.log (pc.game)
console.log(casa.habitaciones)

console.log(guitarra["color"])
console.log(pc["ram"])
console.log(casa["direccion"])

const persona = {
    nombre:"pilar",
    apellido:"olave",
    profesion:"frontend developer",
    hobby:"trekking",
    añoDeNacimiento:1983,
}
console.log(persona.profesion)
console.log(persona["hobby"])