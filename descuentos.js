const precioOriginal = 10000;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajeprecioConDescuento = 100 - descuento;
    const precionConDescuento = (precio * porcentajeprecioConDescuento)/100;

    return precionConDescuento;
}

function calcularPrecioDescuento(){
    const inputPrice = document.getElementById("InputPrice");
    const price = inputPrice.value;
    
    const inputDiscoint = document.getElementById("InputDiscount");
    const discoint = inputDiscoint.value;

    const precioConDescuento = calcularPrecioConDescuento(price,descuento);
    const result = document.getElementById("resultado")
    result.innerText = "El precio con descuento es $" + precioConDescuento;

}
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeprecioConDescuento,
//     precioOriginal,
//     precionConDescuento
// })