// intento de funcion para llevar el conteo y escribirlo
const escribirCant = (idbtnSuma, idbtnResta, escribir) =>{
    let conteo = parseInt(document.querySelector(`#${escribir}`).innerHTML);
    document.querySelector(`#${idbtnSuma}`).onclick = () =>{
        conteo+=1;
        document.querySelector(`#${escribir}`).innerHTML = conteo;
        // return conteo;
    }
    document.querySelector(`#${idbtnResta}`).onclick = () =>{
        conteo-=1;
        document.querySelector(`#${escribir}`).innerHTML = conteo;
    }
}
escribirCant('chSum', 'chRes','chCan');
escribirCant('lonSum', 'lonRes','lonCan');
escribirCant('salSum', 'salRes','salCan');
escribirCant('mixSum', 'mixRes','mixCan');
escribirCant('carSum', 'carRes','carCan');
escribirCant('atolSum', 'atolRes','atolCan');

const cantidadPan = (id) =>{
    return parseInt(document.querySelector(`#${id}`).innerHTML);
}
const limpiarDatos = () =>{
    document.querySelector('#cliente').value = "";
    document.querySelector('#chCan').innerHTML = "0";
    document.querySelector('#lonCan').innerHTML = "0";
    document.querySelector('#salCan').innerHTML = "0";
    document.querySelector('#mixCan').innerHTML = "0";
    document.querySelector('#carCan').innerHTML = "0";
    document.querySelector('#atolCan').innerHTML = "0";
}
document.querySelector('#add').onclick = () => {
    // document.querySelector('#tiCl').innerHTML = `Cliente: ${document.querySelector('#cliente').value}`;
    // ----
    // let chCan = parseInt(document.querySelector('#chCan').innerHTML);
    let chCan = cantidadPan('chCan');
    let lonCan = cantidadPan('lonCan');
    let salCan = cantidadPan('salCan');
    let mixCan = cantidadPan('mixCan');
    let carCan = cantidadPan('carCan');
    let atolCan = cantidadPan('atolCan');
    // validacion de que no venga vacio
    if (chCan != 0) {
        document.querySelector('#lista').innerHTML += `
        <div class="linea">
        <li> Cliente: ${document.querySelector('#cliente').value}   </li>
        <li> Chorizo: ${chCan} Q${chCan * 8} </li>
        <li> Longaniza: ${lonCan} Q${lonCan * 8} </li>
        <li> Salchicha: ${salCan} Q${salCan * 8} </li>
        <li> Mixto: ${mixCan} Q${mixCan * 10} </li>
        <li> Carne: ${carCan} Q${carCan * 10} </li>
        <li> Atol: ${atolCan} Q${atolCan * 3.5} </li>
        </div>
        `;
        limpiarDatos();
    }else{
        document.querySelector('#lista').innerHTML += `<li class="less"> El listado esta vacio, porfavor vuelve a intentarlo </li>`;
    }

}
