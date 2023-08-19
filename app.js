const btn__cotizar = document.getElementById('btn__cotizar');
const precio__final = document.getElementById('precio__final');


let cuaderno__user = {
  tamano: 'nada',
  cierre: 'nada',
  cantidad_caritas: 1,
  decoracion: false,
  precio: 10
};

btn__cotizar.addEventListener('click', (e) => {
    e.preventDefault();
    cuaderno__user.precio = 10;

    cuaderno__user.tamano = document.querySelector('input[name="tamano"]:checked').value;
    cuaderno__user.cierre = document.querySelector('input[name="cierre"]:checked').value;
    cuaderno__user.decoracion = document.querySelector('input[name="decoracion"]:checked').value;
    cuaderno__user.cantidad_caritas = document.getElementById('caritas').value;

    // Algoritmo para el Tamaño
    if (cuaderno__user.tamano === 'tamano__A6') {
      cuaderno__user.precio += 5;
    } else if ( cuaderno__user.tamano === 'tamano__15x15') {
      cuaderno__user.precio += 10;
    } else if ( cuaderno__user.tamano === 'tamano__A5') {
      cuaderno__user.precio += 15;
    }

    // Algoritmo para el Cierre
    if (cuaderno__user.cierre === 'cierre__ninguno') {
      cuaderno__user.precio += 0;
    } else if ( cuaderno__user.cierre === 'cierre__cintas') {
      cuaderno__user.precio += 5;
    } else if ( cuaderno__user.cierre === 'cierre__elasticos') {
      cuaderno__user.precio += 10;
    }

    // Algoritmo para el Cantidad de Caritas retratadas 
    if (cuaderno__user.cantidad_caritas === '1') {
      cuaderno__user.precio += 0;
    } else if ( cuaderno__user.cantidad_caritas === '2') {
          if (cuaderno__user.tamano === 'tamano__A6') {
            cuaderno__user.precio += 2;
          } else if ( cuaderno__user.tamano === 'tamano__15x15') {
            cuaderno__user.precio += 4;
          } else if ( cuaderno__user.tamano === 'tamano__A5') {
            cuaderno__user.precio += 6;
          }
    } else if ( cuaderno__user.cantidad_caritas === '3') {
          if (cuaderno__user.tamano === 'tamano__A6') {
            cuaderno__user.precio += 4;
          } else if ( cuaderno__user.tamano === 'tamano__15x15') {
            cuaderno__user.precio += 6;
          } else if ( cuaderno__user.tamano === 'tamano__A5') {
            cuaderno__user.precio += 8;
          }
    } else if ( cuaderno__user.cantidad_caritas === '4') {
          if (cuaderno__user.tamano === 'tamano__A6') {
            cuaderno__user.precio += 6;
          } else if ( cuaderno__user.tamano === 'tamano__15x15') {
            cuaderno__user.precio += 8;
          } else if ( cuaderno__user.tamano === 'tamano__A5') {
            cuaderno__user.precio += 10;
          }
    }
      
    // Algoritmo para el Decoración
    if (cuaderno__user.decoracion === 'decoracion__ninguna') {
      cuaderno__user.precio += 0;
    } else if ( cuaderno__user.decoracion === 'decoracion__con') {
      cuaderno__user.precio += 20;
    } 

    console.log(cuaderno__user);
    precio__final.textContent = cuaderno__user.precio;
});


console.log(cuaderno__user);









