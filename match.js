window.addEventListener("keydown", function(event) {
  var controlKey = event.ctrlKey || event.metaKey;
  if (controlKey && event.keyCode == 13) {
    //make sure only one form...
	if (document.forms.length == 1){
		document.forms[0].submit();
	}else if (document.forms.length == 0){
	  //do nothing.
	}else{
	  //try and match active element:
	  if (document.activeElement.form){
	    document.activeElement.form.submit();
	  }
	}
  }
}, false);
