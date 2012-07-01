/*$(document).ready(function(){
  var expresioncita = new RegExp('access_token=(.*)&token_type');
  var resultado = expresioncita.exec(window.location.hash);

  if(resultado != null){
    token = resultado[1];

    // ahora se puede listar los archivos...

    // eliminar el ícono
    $('body').html("Tu token es: "+token);
    // obtener archivos
    $.post('https://www.googleapis.com/drive/v2/files?access_token='+token, function(data) {
      $('body').html(data);
    });
  }else{
    location.href = "https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/drive.file&client_id=773902439453.apps.googleusercontent.com&redirect_uri=http://rchit.com.ar/diamantes/index.html&response_type=token";
  }
});*/

function appendResults(text) {
  var results = document.getElementById('results');
  results.appendChild(document.createElement('P'));
  results.appendChild(document.createTextNode(text));
}

function makeRequest() {
  var request = gapi.client.urlshortener.url.get({
    'shortUrl': 'http://goo.gl/fbsS'
  });
  request.execute(function(response) {
    appendResults(response.longUrl);
  });
}

function load() {
  gapi.client.setApiKey('YOUR API KEY');
  gapi.client.load('urlshortener', 'v1', makeRequest);
}