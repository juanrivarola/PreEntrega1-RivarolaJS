let resp = prompt('Quieres calcular el aumento de tu producto?')

while (resp === 'si'){ 
    const valorAntiguo = parseFloat(prompt('Ingrese el valor antiguo'))
    const valorNuevo = parseFloat(prompt('Ingrese su nuevo costo'))  
    const resultado = calcularPorcentaje(valorAntiguo, valorNuevo)
 
    function calcularPorcentaje (volorAntiguo, valorNuevo){
        const cantAumento = (valorNuevo - valorAntiguo) / valorAntiguo * 100
        return cantAumento
    }

    alert('el aumento es de ' + resultado +'%')
    resp = prompt('Quieres calcular otro producto?')
}
    
    alert('Refresca la pagina cuando quieras conocer el aumento')

