

let descripcion = document.getElementById('descripcion');  //.value 

let transaCompra = document.getElementById('compra');   //  .checked 
let transaVenta = document.getElementById('venta');
let transaccion = ' '

let ivaBasico = document.getElementById('basico');
let ivaMinimo = document.getElementById('minimo');
let ivaExento = document.getElementById('exento');
let iva = 0.0 ;
let totalConIva = 0.0 ;


let subtotal = document.getElementById('subtotal');   //.value

let totalVentasValor = 0.0 ;
let totalComprasValor = 0.0 ;



function saberTransaccion () { if ( transaCompra.checked ) { 
    transaccion = transaCompra.value;
}
else if ( transaVenta.checked) { 
    transaccion = transaVenta.value;
}
else alert('elija tipo transaccion')
return transaccion }

function saberIva() { if (ivaBasico.checked) { 
    iva = subtotal.value * ivaBasico.value / 100;
}
else if (ivaMinimo.checked) { 
    iva = subtotal.value * ivaMinimo.value / 100;
}
else if (ivaExento.checked) { 
    iva = subtotal.value * ivaExento.value /100;
}
else alert('elija IVA')
return iva

}

function calcularTotales () { 
    if (transaCompra.checked) { 
        totalComprasValor = parseFloat(totalComprasValor) + parseFloat(subtotal.value);
        return totalComprasValor;
    }
    else if (transaVenta.checked) { 
        totalVentasValor = parseFloat(totalVentasValor) + parseFloat(subtotal.value);
        return totalVentasValor; 
    }
    
}

function sumarIvaYSubtotal () { 
    totalConIva = parseFloat(subtotal.value) + parseFloat(iva) ;
    return totalConIva ; 
}


function ingresar() { 
   


    let datos = '<tr>  <td> ' + descripcion.value +  
    ' </td>   <td> ' + saberTransaccion() +   
    '     </td>  <td>  ' + subtotal.value +  
    ' </td>  <td> ' + saberIva() +    
    ' </td>   <td> ' + sumarIvaYSubtotal() +   '  </td>  </tr>   '

    document.getElementById('body-container').innerHTML += datos;

    calcularTotales();
    document.getElementById('totalVentas').innerHTML = totalVentasValor;
    document.getElementById('totalCompras').innerHTML = totalComprasValor;



    // aca voy a tener que declarar la funcion con el innerHTML para la tabla
    //  return  console.log(ivaBasico.value);
}

document.getElementById('ingresar').addEventListener('click', ingresar);
    
 
