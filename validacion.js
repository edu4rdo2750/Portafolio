function verificar_nombre_vacio(){
  let contenido = String(document.querySelector("#nombref").value);
  if (contenido.length==0){return 1}
  else{
      return 0;
  }
  }
  
  function verificar_largo_mayor50_nombre(){
      let contenido=String(document.querySelector("#nombref").value);
      if (contenido.length>50){return 1}
      else{
          return 0;
      }
  
  }
  
  function verificar_vacio_email(){
      let contenido=String(document.querySelector("#emailf").value);
      if (contenido.length==0){return 1}
      else{
          return 0;
      } 
  }
  
  function verificar_composicion_email_erronea(){
      if (verificar_vacio_email()==false){
      let contenido=String(document.querySelector("#emailf").value);
      if (contenido.match(/(\w|d|\.|\-|_)+@\w+\.\w+/)){return 0}
      else{
          return 1;
      }   
   }
  }
  
  //funciones para verificar si asunto esta vacio o tiene más de 50 caracteres
  function verificar_vacio_asunto(){
      let contenido=String(document.querySelector("#asuntof").value);
      if (contenido.length==0){return 1}
      else{
          return 0;
      }
      }
      
      function verificar_largo_mayor50_asunto(){
          let contenido=String(document.querySelector("#asuntof").value);
          if (contenido.length>50){return 1}
          else{
              return 0;
          }
      
      }
  
  //funciones para verificar si mensaje esta vacio o si tiene más de 300 caracteres
  function verificar_vacio_mensaje(){
      let contenido=String(document.querySelector("#mensajef").value);
      if (contenido.length==0){return 1}
      else{
          return 0;
      }
      }
      
      function verificar_largo_mayor300_mensaje(){
          let contenido=String(document.querySelector("#mensajef").value);
          if (contenido.length>300){return 1}
          else{
              return 0;
          }
      
      }
  
  function ejecucion(){
      if (verificar_nombre_vacio()|| verificar_largo_mayor50_nombre()){
          if (verificar_nombre_vacio()){swal("OOoops Algo salio mal", "El campo 'Nombre' está vacío", "error", {button: "Entendido"});}
          if(verificar_largo_mayor50_nombre()){swal("Error","El campo 'Nombre' no puede tener más de 50 carácteres.","error");}
      }
      else if (verificar_vacio_email()||verificar_composicion_email_erronea()){
          if(verificar_vacio_email()){swal("OOps Algo salio mal","El campo 'Email' está vacío","error", {button: "Entendido"} );}
          if(verificar_composicion_email_erronea()){swal("Error","El campo 'Email' no tiene la estructura de email: ejempl@ejemplo.ejemplo","error")}
  
      }
      else if(verificar_vacio_asunto()||verificar_largo_mayor50_asunto()){
          if(verificar_vacio_asunto()){swal("OOoops Algo salio mal","El campo 'Asunto' está vacío","error", {button: "Entendido"})}
          if(verificar_largo_mayor50_asunto()){swal("Error","El campo 'Asunto' no puede tener más de 50 carácteres.","error")}
  
      }
      else if(verificar_vacio_mensaje()||verificar_largo_mayor300_mensaje()){
          if(verificar_vacio_mensaje()){swal("OOoops Algo salio mal","El campo 'Mensaje' está vacío","error", {button:"Entendido"});}
          if(verificar_largo_mayor300_mensaje()){swal("Error","El campo 'Mensaje' no puede tener más de 300 carácteres.","error");}
  
      }else{
          swal("BIEN!!!","El mensaje ha sido enviado con exito","success");
  
      }
  
  }
  
  const boton_contacto = document.getElementById("contacto__btn");
  boton_contacto.addEventListener("click",ejecucion);
  