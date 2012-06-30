var expresioncita = new RegExp('access_token=(.*)&token_type');
var resultado = expresioncita.exec(window.location.href)[1];

if(resultado == null){
  alert("No tenés TOKEN! QUÉ HACÉS SIN TOKEN!?!?!?!?!?!?!?");
}