window.addEventListener("keydown", function(event) {
  var controlKey = event.ctrlKey || event.metaKey;
  if (controlKey && event.keyCode == 13) {
    alert('yo');
  }
}, false);
