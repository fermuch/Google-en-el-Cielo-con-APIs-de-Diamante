var expresioncita = new RegExp('access_token=(.*)&token_type');
var resultado = expresioncita.exec(window.location.href);

if(resultado != null){
  resultado = resultado[1];

  // ahora se puede listar los archivos...

  // eliminar el ícono
  
}else{
  location.href = "https://accounts.google.com/o/oauth2/auth?scope=https://www.google.com/m8/feeds&client_id=773902439453.apps.googleusercontent.com&redirect_uri=http://rchit.com.ar/diamantes/index.html&response_type=token";
}