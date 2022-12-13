function iniciarsesion(){
    var email=$("#correo").val();
    var password=$("#contraseña").val();
   
    console.log(email);

    if(email ==""  || password ==""){
        console.log("hola");
        Swal.fire({
              icon: 'warning',
              title: 'Debes llenar los espacios requeridos',
              
              })
      }else{
          Swal.fire({
                  title: 'Ha iniciado sesión con éxito',
                  text: "Bienvenido",
                  
                  })
      }
}