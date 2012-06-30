var expresioncita = new RegExp('access_token=(.*)&token_type');
var resultado = expresioncita.exec(window.location.href);

if(resultado == null){
  alert("No tenés TOKEN! QUÉ HACÉS SIN TOKEN!?!?!?!?!?!?!?");
}else{
  resultado = resultado[1];
  alert("Tu token es: "+resultado);
}