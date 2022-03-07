window.onload = () => {

  // Inputs
  let input_element = document.getElementsByClassName('caja')
  let span_element = document.getElementsByClassName('span')
  let btnRegistro = document.getElementById('btnRegistro')
  let textoNombre

  let arrayInput = [...input_element]
  let arraySpan = [...span_element]

  arrayInput.forEach(inputElement => {
    // Funcion de error
    inputElement.addEventListener('change', (e) => {
      // Variables
      textoElement = e.target.value
      inputIndex = arrayInput.indexOf(inputElement)

      // Incumplimiento
      if (textoElement.length >= 10) {
        if (inputElement.type == "text") {
          arraySpan[inputIndex].classList.remove("asistencia");
          arraySpan[inputIndex].innerHTML = "Máximo 10 caracteres"
          inputElement.classList.remove("ok")
          inputElement.classList.add("error")
        } else if (inputElement.type === "select-one") {
          arraySpan[inputIndex].innerHTML = "Seleccioná una nacionalidad"
          inputElement.classList.remove("ok");
          inputElement.classList.add("error")
        }
        else if (inputElement.type === "date" && !inputElement.checkValidity()) {
          arraySpan[inputIndex].classList.remove("asistencia");
          arraySpan[inputIndex].innerHTML = "Seleccioná una fecha"
          inputElement.classList.remove("ok");
          inputElement.classList.add("error")
        }
        else {
          arraySpan[inputIndex].innerHTML = ""
          inputElement.classList.remove("error");

        }
      }
      // campo vacio
      else if (textoElement === "") {
        arraySpan[inputIndex].innerHTML = ""
        inputElement.classList.remove("ok", "error");
      }
      // campo igual a 0
      else if (textoElement === '0') {
        inputElement.classList.remove("ok");
        inputElement.classList.add("error");
        arraySpan[inputIndex].innerHTML = "Seleccioná un equipaje"
      }
      // campo correcto
      else if (textoElement.length < 10 && textoElement.length > 0) {
        arraySpan[inputIndex].innerHTML = "";
        inputElement.classList.remove("error");
        inputElement.classList.add("ok");
      }
    })

    // Funcion de asistencia

    inputElement.addEventListener('focus', () => {
      // Variables
      textoElement = inputElement.value
      inputIndex = arrayInput.indexOf(inputElement)

      // Campo vacio
      if (textoElement === "") {
        // Funcion de tiempo
        setTimeout(() => {
          // Primer intervalo hasta respuesta
          if (textoElement == "" || inputElement.type === "select-one") {
            // Segundo intervalo segun input
            setTimeout(() => {
              if (textoElement === "") {
                arraySpan[inputIndex].innerHTML = "Texto de asistencia"
                arraySpan[inputIndex].className = "asistencia"
              }
            }, 1000);
          }
          else if (arraySpan[inputIndex].innerHTML != "Máximo 10 caracteres" || arraySpan[inputIndex].innerHTML != "Seleccioná un equipaje") {
            arraySpan[inputIndex].innerHTML = ""
            arraySpan[inputIndex].className = ""
          }
        }, 4000);
      }
    })

    // Función campo requerido al Submit

    btnRegistro.addEventListener('click',(e)=>{
      // Variables
      textoElement = inputElement.value

      // Condicion de validación por cada input
      if(textoElement==""){
        // Nombre
        let spanNombre = document.getElementById('nombre_label');
        spanNombre.innerHTML="Usuario *"
        spanNombre.className="requerido"

        //Apellido
        let spanApellido = document.getElementById('apellido_label');
        spanApellido.innerHTML="Usuario *"
        spanApellido.className="requerido"

        //Fecha
        let spanFecha = document.getElementById('fecha_label');
        spanFecha.innerHTML="Agenda *"
        spanFecha.className="requerido"

        //Selector
        let spanSelector = document.getElementById('selector_label');
        spanSelector.innerHTML="Nacionalidad *"
        spanSelector.className="requerido"

        //NumeroA
        let spanNumeroA = document.getElementById('numeroA_label');
        spanNumeroA.innerHTML="Equipaje *"
        spanNumeroA.className="requerido"

        //Direccion
        let spanDireccion = document.getElementById('direccion_label');
        spanDireccion.innerHTML="Usuario *"
        spanDireccion.className="requerido"

        //Localidad
        let spanLocalidad = document.getElementById('localidad_label');
        spanLocalidad.innerHTML="Usuario *"
        spanLocalidad.className="requerido"

        //numeroB
        let spanNumeroB = document.getElementById('numeroB_label');
        spanNumeroB.innerHTML="Equipaje *"
        spanNumeroB.className="requerido"
      }
    })
  });

  // Input Selector
  let selector = document.getElementById("Selector")
  if (selector.value == "Seleccionar") {
    selector.classList.add("deseleccionada");
  }
  selector.addEventListener('change', () => {

    if (selector.value == "Seleccionar") {
      selector.classList.add("deseleccionada");
      console.log(selector.value);
    } else if (selector.value != "Seleccionar") {
      selector.classList.remove("deseleccionada");
    }
  })
};

// Submit formulario
let formSubmit = document.getElementById('formulario')
formSubmit.addEventListener('submit', (e) => {

  nombre = document.getElementById("Nombre").value;
  apellido = document.getElementById("Apellido").value;
  direccion = document.getElementById("Direccion").value;
  localidad = document.getElementById("Localidad").value;
  aceptar = document.getElementById("checkbox");

  if (nombre == "" || nombre.length > 9 || apellido == "" || apellido.length > 9 || direccion == "" || direccion.length > 9 || localidad == "" || localidad.length > 9) {
    e.preventDefault()
  }
  else if (!aceptar.checked) {
    e.preventDefault()
  }
})