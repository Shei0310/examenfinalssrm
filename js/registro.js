function crearcuenta(){
    var nombre=$("#nombre").val();
    var email=$("#correo").val();
    var password=$("#contraseña").val();
    var datos=nombre.concat(" "+email);
    console.log(datos);

    if( nombre =="" || email ==""  || password ==""){
        console.log("hola");
        Swal.fire({
              icon: 'warning',
              title: 'Debes llenar los espacios requeridos',
              
              })
      }else{
          Swal.fire({
                  title: 'Registrado con éxito',
                  text: "Bienvenido "+nombre,
                  
                  })
      }
}