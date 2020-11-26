if(typeof menu_active_class_toggle != 'function'){
	   function menu_active_class_toggle(idName,className) {
		   var element = document.getElementById(idName);
		   element.classList.toggle(className);
		}
	}

	document.getElementById("menuToggler").onclick = function(){menu_active_class_toggle('navMenu','active');menu_active_class_toggle('menuToggler','active');}  