function func(){
	setTimeout(function(){
		var nav = document.getElementById("nav1");
		nav.style.opacity = "1"
		nav.style.width = "90vw"
	},500);
	
	setTimeout(function(){
		var id1 = document.getElementById("1");
		id1.style.opacity = "1";
	},1000);
	setTimeout(function() {
  		var id2 = document.getElementById("2");
  		id2.style.opacity = "1"
	}, 1500);
	setTimeout(function() {
  		var id3 = document.getElementById("3");
  		id3.style.opacity = "1"
	}, 2000);
}