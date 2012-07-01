$(document).ready(function(){
  var expresioncita = new RegExp('access_token=(.*)&');
  var resultado = expresioncita.exec(window.location.hash);

  if(resultado != null){
    token = resultado[1];

    // ahora se puede listar los archivos...

    // eliminar el ícono
    $('body').html("Tu token es: "+token);
    // obtener archivos
    $.post('https://www.googleapis.com/drive/v2/files', {pageToken: token}, function(data) {
      $('body').html(data);
    });
  }else{
    //location.href = "https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/drive.file&client_id=773902439453.apps.googleusercontent.com&redirect_uri=http://rchit.com.ar/diamantes/index.html&response_type=token";
  }
});