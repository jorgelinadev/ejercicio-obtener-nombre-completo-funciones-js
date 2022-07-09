//alert('Mi archivo funciona');

//obtenerNombreCompleto(nombre, apellido)
//Crear una función obtenerNombreCompleto que tome como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores

//obtenerNombreCompleto('Ada', 'Lovelace') // 'Ada Lovelace'

const ingresarNombreApellido = ('Nombre', 'Apellido');

const obtenerNombreCompleto = (nombre, apellido) => {
        return `${nombre} ${apellido}`;
}

console.log(obtenerNombreCompleto('Nombre', 'Apellido'));

console.log(obtenerNombreCompleto('Jorgelina', 'Alberti'));

console.log(obtenerNombreCompleto('Martín', 'Andrada'));

console.log(obtenerNombreCompleto('Matías', 'Andrada'));

console.log(obtenerNombreCompleto('Ignacio', 'Larrivey'));