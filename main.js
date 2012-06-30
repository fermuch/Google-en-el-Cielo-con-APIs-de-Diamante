function poptastic(url) {
  var newWindow = window.open(url, 'name', 'height=600,width=450');
  if (window.focus) {
    newWindow.focus();
  }
}