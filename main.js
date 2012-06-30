var expresioncita = new RegExp('access_token=(.*)&token_type');
var resultado = expresioncita.exec(window.location.href);

if(resultado != null){
  resultado = resultado[1];

  // ahora se puede listar los archivos...
}