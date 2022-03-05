let input_element = document.getElementsByClassName('caja')
let span_element = document.getElementsByClassName('span')
let btnRegistro = document.getElementById('btnRegistro')
let textoNombre


let arrayInput = [...input_element]
let arraySpan = [...span_element]

arrayInput.forEach(inputElement => {
  // Funcion de error
  
  inputElement.addEventListener('change',(e)=>{
    console.log(inputElement.value);
    textoElement = e.target.value
    inputIndex = arrayInput.indexOf(inputElement)
    if(textoElement.length>10){
      if(inputElement.type!="select-one"){
        console.log("este NO");
        arraySpan[inputIndex].innerHTML = "Máximo 10 caracteres"
        inputElement.className = "error"
        arraySpan[inputIndex].inclassNamenerHTML = ""
      }else{
        arraySpan[inputIndex].innerHTML = ""
        inputElement.className = ""
      }
      
    }else if(textoElement==""){
      arraySpan[inputIndex].innerHTML = ""
      inputElement.className = ""
    }else if(textoElement.length<10){
      arraySpan[inputIndex].innerHTML = ""
      inputElement.className = "ok"
    }
  })

  // Funcion de asistencia

  inputElement.addEventListener('click',()=>{
    textoElement = inputElement.value

    inputIndex = arrayInput.indexOf(inputElement)
    setTimeout(() => {
      if(textoElement=="" || inputElement.type==="select-one"){
        setTimeout(() => {
          arraySpan[inputIndex].innerHTML="Texto de asistencia"
          arraySpan[inputIndex].className="asistencia"
          console.log("Zona 1");

        }, 1000);
      }else if(arraySpan[inputIndex].innerHTML!="Máximo 10 caracteres"){
        arraySpan[inputIndex].innerHTML=""
        arraySpan[inputIndex].className=""
        console.log("zona 2");
      }else{
        console.log("ZONA 3");
      }
    }, 2000);
    
  })


  // Función campo requerido

  btnRegistro.addEventListener('click',(e)=>{
  
    textoElement = inputElement.value

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


      e.preventDefault()
    }
  
  })

});






