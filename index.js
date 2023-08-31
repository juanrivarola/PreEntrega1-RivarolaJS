function calcularPorcentaje (volorAntiguo, valorNuevo){
    const cantAumento = (valorNuevo - valorAntiguo) / valorAntiguo * 100
    return cantAumento
}

let resp = prompt('Quieres calcular el aumento de tu producto? (Si/No)').toLowerCase()
let valorAntiguo,valorNuevo

while (resp === 'si'){ 

   valorAntiguo = NaN;
   valorNuevo = NaN;
   
   while (isNaN(valorAntiguo)) {
    valorAntiguo = parseFloat(prompt('Ingrese el valor antiguo'))
    if (isNaN(valorAntiguo)) {
        alert('Error: el valor ingresado debe ser un número.');
    }
   }

   while (isNaN(valorNuevo)) {
    valorNuevo = parseFloat(prompt('Ingrese el nuevo costo'))
    if (isNaN(valorNuevo)) {
        alert('Error: el valor ingresado debe ser un número.');
    }
   }

    const resultado = calcularPorcentaje(valorAntiguo, valorNuevo)
    alert('el aumento es de ' + resultado +'%')
    resp = prompt('Quieres calcular otro producto?').toLowerCase()
}
    
    alert('Refresca la pagina cuando quieras conocer el aumento')


